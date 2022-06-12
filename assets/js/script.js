(function ($) {
	"use strict";

	jQuery(document).ready(function () {

		/* ---------- Smooth Scroll Js ----------- */

		$("a.smooth-scroll").on("click", function (e) {
			var anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $(anchor.attr("href")).offset().top - 50,
					},
					1000
				);
			e.preventDefault();
		});

		/* -------- Scroll Up ---------- */
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$(".scrollup").fadeIn();
			} else {
				$(".scrollup").fadeOut();
			}
		});
		$(".scrollup").on("click", function () {
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});

		/* ------------ Wow Js -------- */
		new WOW().init();
	});
})(jQuery);