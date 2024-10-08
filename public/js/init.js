/*
	Aerial by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/

(function() {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', viewport: { scalable: false } },
			'wide': { range: '-1680', href: 'css/style-wide.css' },
			'normal': { range: '-1280', href: 'css/style-normal.css' },
			'mobile': { range: '-736', href: 'css/style-mobile.css' },
			'mobilep': { range: '-480', href: 'css/style-mobilep.css' }
		}
	});

	// Events (JS).

		// Remove "loading" class once the page has fully loaded.
			window.onload = function() {
				document.body.className = '';
				const mailTarget = document.getElementById("header").getElementsByClassName("icon fa-envelope-o")[0];
				mailTarget.addEventListener("click", (event) => {
					const link = "mailto:support@oselya.life"
						+ "?subject=" + encodeURIComponent("Support request")
						+ "&body=" + encodeURIComponent("Вітаю,");
					window.location.href = link;
				});
				const viberTarget = document.getElementById("header").getElementsByClassName("icon fa-comments-o")[0];
				viberTarget.addEventListener("click", (event) => {
					const link = "viber://pa?chatURI=Oselya";
					window.location.href = link;
				});
				const telegramTarget = document.getElementById("header").getElementsByClassName("icon fa-mobile")[0];
				telegramTarget.addEventListener("click", (event) => {
					const link = "https://t.me/OselyaLifeBot";
					window.location.href = link;
				})
			}

		// Prevent scrolling on touch.
			window.ontouchmove = function() {
				return false;
			}

		// Fix scroll position on orientation change.
			window.onorientationchange = function() {
				document.body.scrollTop = 0;
			}



	/*

	// Events (jQuery).
	// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
	// block of JS events above and use the jQuery-based ones below instead.

		jQuery(window)

			// Remove "loading" class once the page has fully loaded.
				.on('load', function() {
					jQuery('body').removeClass('loading');
				})

			// Prevent scrolling on touch.
				.on('touchmove', function() {
					return false;
				})

			// Fix scroll position on orientation change.
				.on('orientationchange', function() {
					jQuery('body').scrollTop(0);
				});

	*/

})();
