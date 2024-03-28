(function($) {

	

	"use strict";

	var pricing_js = function($scope, $) {

		

		//Tabs Box
			if($('.tabs-box').length){
				$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
					e.preventDefault();
					var target = $($(this).attr('data-tab'));
					
					if ($(target).is(':visible')){
						return false;
					}else{
						target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
						$(this).addClass('active-btn');
						target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
						target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
						$(target).fadeIn(100);
						$(target).addClass('active-tab');
					}
				});
			}

		

	};

	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/printpark_pricing_tab.default', pricing_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_product_tab.default', pricing_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/printpark_services_tab.default', pricing_js);
    });	



})(window.jQuery);