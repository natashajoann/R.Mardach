$(document).ready(function() {

  // BURGER menu

     $(".burger-button").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });


     $(".burger-menu").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });


     $(".dropdown-nav").click(function(){
         $(this).children(".dropdown-content").slideToggle("200");
       });

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

$(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle("200");
  });




});
