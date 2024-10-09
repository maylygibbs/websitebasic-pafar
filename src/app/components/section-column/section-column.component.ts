import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-column-item',
  templateUrl: './section-column.component.html',
  styleUrls: ['./section-column.component.scss']
})
export class SectionColumnComponent implements OnInit {
	@Input() title: string = "";
	@Input() description: string = "";
	@Input() iconImage: string = "";
	@Input() link: string = "";
	@Input() className: string = "";
	@Input() type: string = "section__column-left"; // section__column-left, text-center, section__column-top--left

	constructor() { }

	ngOnInit(): void {
	}

}
