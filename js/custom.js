/*counter part start*/
$(".counter-1").countMe(40,65);
$(".counter-2").countMe(40,65);
$(".counter-3").countMe(40,65);
$(".counter-4").countMe(40,65);
/*counter part end*/


/*project  part start*/
$('.pro-main').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
    nextArrow:".next",
    prevArrow:".prev",
    autoplay:true,
  });

/*light-box*/

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
/*project part end*/

$('.shamim').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
  dots:true,
  nextArrow:".nexts",
  prevArrow:".prevs",
  autoplay:true,
  });


  new VenoBox({
    selector: ".my-video"
});

/*back part start*/
$(window).scroll(function(){
  var scrolling = $(window).scrollTop()

  if(scrolling > 30){
    $(".back-two-top i").fadeIn()
  }else{
    $(".back-two-top i").fadeOut()
  }
})

$(".back-two-top i").click(function(){
  $('html ,body').animate({
    scrollTop:0
  } ,2000)
})
/*back part end*/


