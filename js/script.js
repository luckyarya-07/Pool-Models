jQuery(document).ready(function(){
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#sticky_header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#sticky_header").removeClass("active");
    }
});


// $(".footer-links-heading").hover(function(){
//       $(".horizontal-line").css( "border-bottom", "1px solid #bfc943" );
// });

$( ".links-heading-1,.links-heading-2" ).hover(
  function() {
    $( ".horizontal-line" ).addClass( "hover" );
  }, function() {
    $( ".horizontal-line" ).removeClass( "hover" );
  }
);


});
