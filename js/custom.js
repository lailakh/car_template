$(document).ready(function(){
 $('.header').height($(window).height());
 

   
})





$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })


$('li  a').click(function() {
    $('li   a').removeClass('active');
    $(this).addClass('active');
});