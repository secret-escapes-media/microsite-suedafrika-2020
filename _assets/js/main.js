// general js for the project that wouldn't be a reuseable component




var coll = document.getElementsByClassName("bv-collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("bv-active");
    var content = this.nextElementSibling;
    //alert(content);
    if (content.style.height){
      content.style.height = null;

    } else {
      content.style.height = "550px";
      //content.style.minHeight = "400px";
      content.style.overflow = "auto";
    }
  });
}




/*********** Blur and change text colour of hero image  *************/


$(window).on('scroll', function () {

  if($(window).scrollTop() > 200) {
         $(".bv-title-yellow").addClass("text--yellow");
     } else {
         //remove the background property so it comes transparent again (defined in your css)
        $(".bv-title-yellow").removeClass("text--yellow");
     }

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
        pixs = pixs / 60,
        offset = 600,
    //range = 100,
        calc = 1 - (pixs )/10;
        //calc = 0 + (pixs )/10;
        //calc2 = 0 + pixs ;
/*
    var opac = 0 + (pixs )/10;
    var scrollPos1 = $(document).scrollTop()-800 ;
    var scrollPos2 = $(document).scrollTop()-1200 ;
    var scrollPos3 = $(document).scrollTop()-1800 ;
    var numClasses = $('.js-nav-section').length - 1;
    console.log(calc);
*/

	if(isFirefox === false){
    $(".bv-banner-out").css({ "-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });
  } else {
    $(".bv-banner-out").css({"opacity": calc });
  }


});
