$(function(){
  $("#titlename").prepend(`<button id="menu-button">☰</button>`);
  $(window).resize(function(){
    if($(window).width() >= 800){
      $("nav").show();
      $("nav").css("top","0px");
    }else{
      $("nav").hide();
      $("nav").css("top",$("#titlename").outerHeight());
    }
  }).trigger("resize"); 
  $("#menu-button").click(function(){
    if($(window).width() <= 800){
      $("nav").first().toggle("slow");
    }
  });
});
<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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
</script>
