// Navbar scrolling/shrinking effect
$(document).ready(function() {
    // Put your offset checking in a function
    function checkOffset() {
        if ($(".navbar").offset().top > 500) {
            $(".fixed-top").addClass("top-nav-collapse");
        }     
        else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    }
    // Run it when the page loads
    checkOffset();
    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});

// Smooth scrolling to target
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // // Scrolling at different speeds
  // $(document).ready(function(){
  //     var $win = $(window);

  //     $('div.parallax').each(function(){
  //         var scroll_speed = 5;
  //         var $this = $(this);
  //         $(window).scroll(function() {
  //             var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
  //             var bgPosition = '50% '+ bgScroll + 'px';
  //             $this.css({ backgroundPosition: bgPosition });
  //         });
  //     });
  // });

  // hide navbar on scrolling down
  // let prevScrollPos = 0;

  // document.addEventListener('scroll', () => {
  //   let nextScrollPos = window.scrollY;
  //   let scrollAmount = nextScrollPos - prevScrollPos;
  //   if (scrollAmount !== 0) { prevScrollPos = nextScrollPos };
  //   console.log(scrollAmount);
  //   // if (scrollAmount > 30) { $( 'nav' ).hide(1000) };
  //   if (scrollAmount > 100) { $( 'nav' ).addClass('animated slideOutUp') };
  //   // if (scrollAmount < -30) { $( 'nav' ).show(1000) };
  //   if (scrollAmount < -10) { 
  //     $( 'nav' ).removeClass('animated slideOutUp')
  //     $( 'nav' ).addClass('animated slideInDown')
  //   };
  // })
