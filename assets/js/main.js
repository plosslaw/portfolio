/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

var popup = document.querySelector("#email")
var emailIcon = document.querySelector("#email-icon")

function showEmail() {
	// var popup = document.getElementById("email");
	// var popup = document.querySelector("#email");
	var dummy = document.createElement("textarea");
	dummy.style.display = 'hidden';
	document.body.appendChild(dummy);
	dummy.value = "redcatking@protonmail.com";
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	toggleOn().then(setTimeout(hideEmail,3100));

	
  }

//   function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
//   }
function toggleOn(){
	// var popup = document.querySelector("#email");
	return new Promise(
		resolve => {
			emailIcon.classList.add("blockClick");
			popup.classList.add("show");
			// setTimeout(hideEmail,3000);
		}
	);
}

function hideEmail(){
	popup.classList.remove("show");
	emailIcon.classList.remove("blockClick");
}