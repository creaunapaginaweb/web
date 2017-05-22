$(".link").click(function() {
  var id = $(this).attr('href')
  $('html,body').animate({
      scrollTop: $(id).offset().top - 99
    },'slow');
});


$('.content-nav').scrollToFixed();


var step1 = $("#paso1").offset().top - 100;
var step2 = $("#paso2").offset().top - 100;
var step3 = $("#paso3").offset().top - 100;

$(window).scroll(function(){
    if($(window).scrollTop() > (step1) && $(window).scrollTop() < (step2)){
      $(".content-nav .col a").removeClass('active')
      $(".content-nav .col:first-child a").addClass('active')
    } else if ($(window).scrollTop() > (step2) && $(window).scrollTop() < (step3)){
      $(".content-nav .col a").removeClass('active')
      $(".content-nav .col:nth-child(2) a").addClass('active')
    } else if ($(window).scrollTop() > (step3)){
      $(".content-nav .col a").removeClass('active')
      $(".content-nav .col:nth-child(3) a").addClass('active')
    } else {
      $(".content-nav .col a").removeClass('active')
    }
});

$("#share").jsSocials({
    url: "https://creaunapaginaweb.github.io/",
    showCount: true,
    showLabel: true,
    shareIn: "popup",
    text: "Cómo crear tu propia página web de la manera más fácil y rápida.",
    shares: [{
      share: "twitter",           // name of share
      label: "Tweet",             // share button text (optional)
      via: "hectorsanchezmx",       // custom twitter sharing param 'via' (optional)
      }, "facebook","linkedin"]
});
