var screen_width;
var screen_height;
var images=["woman","desert","woman_p"];


$(document).ready(function()
{
    ShowResolution();
    ShowGallery();

});

// $(window).bind("resize",ShowResolution);

function ShowResolution() {
    screen_width = $(window).width();
    screen_height = $(window).height();
    var x = " x ";
    $("#resolution").append(screen_width,x,screen_height);
}

function ShowGallery()
{
  $("button").click(clickHandler);
}

function clickHandler() {
  if(screen_width>900){
    showImage("woman");
    $('html,body').animate({
       scrollTop: $("#woman").offset().top},
       1000);

  }
  else if(screen_width>600){
      showImage("woman_p");
      $('html,body').animate({
         scrollTop: $("#woman").offset().top},
         1000);
    }
  else if(screen_width>300){
    showImage("desert");
    $('html,body').animate({
       scrollTop: $("#desert").offset().top},
       1000);
  }

}

function showImage(image_name){10
  for (var i = 0; i < images.length; i++) {
    var img = document.getElementById(images[i]);


    if(images[i]==image_name){
      img.style.visibility="visible";
      $(img).addClass("animated bounceIn");
    }
    else{
      img.style.visibility="hidden";
    }
  }
}


function smoothScroll(){}
