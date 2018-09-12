var navbar = document.querySelector("nav");
var links = document.querySelectorAll(".nav-link");

	window.addEventListener("scroll", function(){
		if(this.scrollY <= 10){
			navbar.classList.remove("navbar-light");
			navbar.classList.remove("bg-light");
			navbar.classList.add("navbar-dark");

		}
		else{
			navbar.classList.add("navbar-light");
			navbar.classList.add("bg-light");
			navbar.classList.remove("navbar-dark");
		}
	});


	$(function() {
      // Smooth Scrolling
      $(".nav-link").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });