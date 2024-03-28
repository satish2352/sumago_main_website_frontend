(function($) {
	
	"use strict";
	var banner_carousels_js = function($scope, $) {
		
	function thmOwlInit() {
		// owl slider
	
		if ($(".owl-theme").length) {
		  $(".owl-theme").each(function () {
			let elm = $(this);
			let options = elm.data('owl-options');
			let thmOwlCarousel = elm.owlCarousel(options);
		  });
		}
	
	  }
	  
	  thmOwlInit();	
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/printpark_banner_slider.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_service_carousel.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_testimonials_carousel.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_clients_section.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_project_carousel.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_blog_carousal.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_image_carousal.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_team_carousal.default', banner_carousels_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_feature_carousal.default', banner_carousels_js);
    });	

})(window.jQuery);