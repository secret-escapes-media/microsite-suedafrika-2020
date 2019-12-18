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
      content.style.height = "520px";
      //content.style.minHeight = "400px";
      content.style.overflow = "auto";
    }
  });
}



/*********** Change layer thumbnails  *************/

  /*
var thumbn = document.getElementsByClassName("bv-thumb-zoom");
console.log(thumbn);
var j;

for (j = 0; j <= thumbn.length; j++) {
  thumbn[j].addEventListener("mouseover", function() {
    this.classList.toggle("bv-active");
    var content = this.nextElementSibling;
    //alert(content);
    if (content.style.height){
      content.style.height = null;
      content.style.zIndex = "10";

    } else {
      content.style.height = "520px";
      //content.style.minHeight = "400px";
      content.style.overflow = "auto";
      content.style.zIndex = "20";
    }
  if (this.style.height){
      this.style.height = 'auto';
      console.log("hey");
      this.style.zIndex = "10";
      this.style.display = "none";

    } else {
      //console.log("ho");
      //this.style.zIndex = "0!important";
      //this.style.display = "none";
      this.style.zIndex = "20!important";

    }
   //this.style.zIndex = "20!important";

  });
}*/


/*********** Blur and change text colour of hero image  *************/


$(window).on('scroll', function () {


var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
        pixs = pixs / 60,
        pixs2 = pixs / 30,
        offset = 800,
        offset2 = 1100,
        calc = 0.7 - (pixs )/25;
        //calc2 = 0.55 - (pixs2 )/25;
        //console.log(calc+' - '+pixs);
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
    //$(".bv-banner-out2").css({ "-webkit-filter": "blur("+pixs2+"px)","filter": "blur("+pixs2+"px)","opacity": calc2 });
  } else {
    $(".bv-banner-out").css({"opacity": calc });
  //  $(".bv-banner-out2").css({"opacity": calc });
  }


});
