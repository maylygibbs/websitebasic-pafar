"use strict";
var $breakPoint = 991;
var $owl = $('.js-tab-carousel');
var $owlOptions = {
    items:1,
    margin:0,
    nav:true,
    dots:false,
    touchDrag: false
};

var smoothScripts = {
    
    initialize: function() {
        this.event(); 
        this.tabnavMobile(); 
        this.scroll(); 
        this.layout();
    },
    
    /*-----------------------------------------------
    * Custom js setting *
    ----------------------------------------------- */
    event : function(){
        // Back to top click
        $(".js-back-to-top").on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
        
    },

    // =========================== //
    // ANIMATION LINK SCROLL
    // =========================== //
    animateLinkScroll: function(){
        $('.js-link-scroll').on( "click", function() {
            var _scrollTarget = $(this).attr('href'),
                _dataTarget = $('html, body').find(_scrollTarget).length;

            if (_dataTarget != 0){
                $('html, body').animate({
                    scrollTop: $(_scrollTarget).offset().top - 60
                }, 1000);
                return false;
            }
        });
    },
    
    // =========================== //
    // TAB NAV MOBILE
    // =========================== //
    tabnavMobile : function(){
        if ( $(window).width() < $breakPoint ) {
            $owl.addClass('owl-carousel');
            $owl.owlCarousel($owlOptions);
            setTimeout(function(){
                $owl.trigger('refresh.owl.carousel');
            }, 500);
        } else {
            $('.owl-carousel li a.active').removeClass('active');
            $owl.removeClass('owl-carousel');
            $owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        }	
    },

    // =========================== //
    // NAVIGATION
    // =========================== //
    navigation: function(){
        $('nav').coreNavigation({
            menuPosition: "right",
            container: true,
            responsideSlide: true,
            dropdownEvent: 'hover',
            onInit: function(){
                $('ul.tabs > li > a').on( "click", function() {
                    e.preventDefault();
                    var tab_id = $(this).closest('li.tab-link').attr('data-tab');

                    $('ul.tabs li').removeClass('active');
                    $('.tab-content').removeClass('active');

                    $(this).closest('li.tab-link').addClass('active');
                    $("#"+tab_id).addClass('active');
                })
            }
        });
    },

    // =========================== //
    // SCROLL
    // =========================== //
    scroll : function(){
        var scrollTop = $(window).scrollTop();
        // Navbar on scroll
        if(scrollTop > 0){
            $(".js-header-scroll").addClass("header__sticky");
        }else {
            $(".js-header-scroll").removeClass("header__sticky");
        }

        // Back to top show
        if(scrollTop > 800){
            $(".js-back-to-top").fadeIn();
        }else {
            $(".js-back-to-top").fadeOut();
        }
    },

    // =========================== //
    // LAYOUT
    // =========================== //
    layout : function(){
        // Match height
        $('.js-match-height').matchHeight();

        // Header menu on mobile
        $( ".js-header-menu" ).prependTo( $( ".wrap-core-nav-list" ) );

        
        var $imgBg = $('.js-video-background-image').innerWidth();
        var $videoWidth = $imgBg * 76 / 100;
        var $halper = $imgBg - $videoWidth;
        var $pushLeft = $halper / 2;

        $('.js-video-background-wrapper').css('width', $videoWidth);
        $('.js-video-background-wrapper').css('left', $pushLeft);

    },

    // =========================== //
    // GALLERY PAGE SETTING
    // =========================== //
    gallery: function(){
        // Gallery filter
        $('.js-image-background').each(function(){
            var image =  $(this).data('image');
            $(this).css('background-image','url("'+ image +'")');
        });

        $('.js-item-image').mouseenter(function() {
            $('.gallery__item--image--overlay', this).addClass('show');
        })
        .mouseleave(function() {
            $('.gallery__item--image--overlay', this).removeClass('show');
        });

        // Imagge zooom
        $('.js-zoom-image').magnificPopup({
            type:'image',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return '<div class="mfp-heading">' + item.el.attr('data-title') + '</div> <div class="mfp-author"><strong>By : </strong>' + item.el.attr('data-author') + '</div>';
                }
            },
            gallery: {
                enabled: true
            },
        });
    },

    // =========================== //
    // SELECT2 INPUT
    // =========================== //
    select2Input: function(){
         $(".js-select").each(function(){
            var placeholder = $(this).attr('placeholder');
            $(this).select2({
                placeholder: placeholder,
                minimumResultsForSearch: -1,
            });
        });
    },

    // ================== //
    // Tabs Navigation
    // ================== //
    tabNavigation: function(){
        $('.js-tabs-navigation').each(function(){
            var $list = $('.js-nav-item', this).length;
            var $itemWidth = 100 / $list;

            $('.js-nav-item', this).css('width', $itemWidth + '%');
        });
    },

    // ================== //
    // COLLAPSE
    // ================== //
    collapse: function(){
        $('.collapse').on('shown.bs.collapse', function(e) {
            var $card = $(this).closest('.accordion__group');
            var offsetTop = $('.header').height() + 30;

            if ( $(window).width() < $breakPoint ) {
                var offsetTop = $('.header').height() + 50;
            } else {
                var offsetTop = $('.header').height() + 30;
            }	

            $('html,body').animate({
                scrollTop: $card.offset().top - offsetTop
            }, 500);
        });
    },

    // =========================== //
    // DISQUS EMBED
    // =========================== //
    disqusEmbed: function(domain,page_url,page_identifier){
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

        var disqus_config = function () {
            this.page.url = page_url;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = page_identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, 
            s = d.createElement('script');
            s.id = 'disqus-embed';
            s.src = 'https://'+ domain +'/embed.js';
            s.setAttribute('data-timestamp', + new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
};

// Document ready
$(document).ready(function(){
    smoothScripts.initialize();
});

// Window on resize
$(window).on("scroll", function(){  
    smoothScripts.scroll();
});

// Reset on resize
$(window).resize(function() {
    smoothScripts.tabnavMobile();
    smoothScripts.layout();
    setTimeout(function(){
        smoothScripts.tabnavMobile();
        smoothScripts.layout();
    }, 500); 
});

