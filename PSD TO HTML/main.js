$(".first").hide();
$(function(){
  var idiot=false;
  $(window).scroll(function(){
    var scrollmod= $(window).scrollTop();
    if(scrollmod>1){
      if(!idiot){
            $(".first").fadeIn(1500);
            idiot=true;
      };
    };
  });
});

$(function(){
  var idiot=false;
  $(window).scroll(function(){
    var scrollmod= $(window).scrollTop();
    if(scrollmod>400){
      if(!idiot){
            $(".second").addClass('slide');
            idiot=true;
      };
    };
  });
});
$(".main-footer").hide();
$(function(){
  var idiot=false;
  $(window).scroll(function(){
    var scrollmod= $(window).scrollTop();
    if(scrollmod>1100){
      if(!idiot){
            $(".main-footer").slideDown(1000);
            idiot=true;
      };
    };
  });
});

$(".mynavbtn").click(function(){
    $(".bar1").toggleClass("mytogclass1");
    $(".bar2").toggleClass("mytogclass2");
    $(".bar3").toggleClass("mytogclass3");
});
