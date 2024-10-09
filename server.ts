import 'zone.js/node';
import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {existsSync} from 'fs';
import {join} from 'path';
import {AppServerModule} from './src/main.server';
import { environment } from '@environments';
import * as qs from 'qs';

const request = require('request');
const nodemailer = require('nodemailer');

const getVariable = function(){
	return new Promise((resolve, reject)=>{
		request.get(`${environment.baseUrl}/api/environment-be?populate=*`,function(err:any,res:any,body:any){
			if(err){
				reject(err);
			}
			if(res.statusCode === 200 ){
				resolve(JSON.parse(body)['data']['attributes'])
			}
		});
	});
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express();
	const distFolder = join(process.cwd(), 'dist/angular-smooth/browser');
	const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

	server.use(express.json())

	// Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
	server.engine('html', ngExpressEngine({
		bootstrap: AppServerModule,
	}));

	server.set('view engine', 'html');
	server.set('views', distFolder);

	// ====================================== //
	// GET COUNTER COMMENTS
	// ====================================== //
	server.get('/api/counter-comments', async (req:any, res:any) => {
		request.get({
			headers: {'Content-Type' : 'application/json' },
			url: `https://disqus.com/api/3.0/threads/set.json?thread:link=${req.query.pagelink}&forum=${req.query.forum}&api_key=${req.query.publickey}`
		}, function(error:any, response:any, body:any){
			if(error){
				res.status(400).send(error);
			}else{
				res.send(JSON.parse(body));
			}
		});
	});

	// ====================================== //
	// GET DETAIL POST
	// ====================================== //
	server.get('/api/post-detail', (req:any, res:any) => {
		request.get({
			headers: {'Content-Type' : 'application/json' },
			url: `${environment.baseUrl}/api/blogs?fields[0]=uuid&filters[Slug][$eq]=${req.query.slug}&filters[uuid][$eq]=${req.query.uuid}`
		}, function(error:any, response:any, body:any){
			if(error){
				res.status(400).send(error);
			}else{
				let id = JSON.parse(body)['data'][0]['id'];
				const query = qs.stringify({
					populate: ['SEO.metaImage','Image','blog_categories','tags'],
				}, {
					encodeValuesOnly: true, 
				});
				request.get({
					headers: {'Content-Type' : 'application/json' },
					url: `${environment.baseUrl}/api/blogs/${id}?${query}`
				}, function(errorResult:any, responseResult:any, resultBody:any){
					if(errorResult){
						res.status(400).send(errorResult);
					}else{
						res.send(JSON.parse(resultBody)['data']['attributes']);
					}
				});
			}
		});
	});

	// ====================================== //
	// SEND EMAIL FROM CONTACT US
	// ====================================== //
	server.post('/api/sendmail', (req:any, res:any) => {
		request.post({
			headers: {'Content-Type' : 'application/x-www-form-urlencoded' },
			url:'https://www.google.com/recaptcha/api/siteverify',
			form:{ 
				secret: req.body.secret,
				response: req.body.token
			}
		}, async function(errorValidation:any, responseValidation:any, body:any){
			if(errorValidation){
				res.status(400).json({status: "Failed"});
			}else{
				let globalData: any = await getVariable();
				let transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: {
						user: globalData.GmailEmailAddress,
						pass: globalData.GmailAPPPassword,
					}
				});
				  
				var mailOptions = {
					to: "adamnurdin01@gmail.com",
					subject: "Smooth - " + req.body.subject,
					html: '<!DOCTYPE html>'+
					'<html><head><title>Appointment</title>'+
					'</head><body><div>'+
					'<p>From: <strong>'+ req.body.from +'</strong><br/>'+
					'Name: <strong>'+ req.body.name +'</strong><br/>'+
					'Subject: <strong>'+ req.body.subject +'</strong></p>'+
					'<p>'+ req.body.text +'</p>'+
					'</div></body></html>'
				};
		
				transporter.sendMail(mailOptions, function(error:any, info:any){
					if (error) {
						res.status(400).json({status: "Failed"});
					} else {
						res.status(200).json({status: "OK"});
					}
				});
			}
		});
	});

	// Example Express Rest API endpoints
	// server.get('/api/**', (req, res) => { });
	// Serve static files from /browser
	server.get('*.*', express.static(distFolder, {
		maxAge: '1y'
	}));

	// All regular routes use the Universal engine
	server.get('*', (req, res) => {
		res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
	});

	return server;
}

function run(): void {
	const port = process.env['PORT'] || environment.port;

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
