// links
$(document).ready(function() {
  $("[data-link]").click(function() {
    window.location.href = $(this).attr("data-link");
    return false;
  });
  // -----------------------------------------------------------------------------------------------------------
});
// for clock
    function clock(){
        var hour =document.getElementById("hour");
        var minutes=document.getElementById("minutes");
        var ampm = document.getElementById("ampm")
        var h=new Date().getHours();
        var m =new Date().getMinutes();
        var am_pm="صباحا";

        if(h > 12){
            h = h - 12;
            am_pm="مساء"
        }
        h=(h<10) ? "0"+ h :h;
        m=(m<10) ? "0"+ m :m;

        hour.innerHTML =h;
        minutes.innerHTML=m;
        ampm.innerHTML=am_pm;
        
    }
    var interval =setInterval(clock, 1000);
    // -----------------------------------------------------------------------------------------------------------
// for marquee
    $(document).ready(function(){
      $('.marquee').marquee({
        duration: 20000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true
      });
      // -----------------------------------------------------------------------------------------------------------
// shadow for navbar and scroll img
$(window).scroll(function() {
  if ($(this).scrollTop() == 0) {
    $('.sticky-top').css({
        'box-shadow': 'none',
        '-moz-box-shadow' : 'none',
        '-webkit-box-shadow' : 'none' ,
        
      });
      $('aside img').css({'transform' :'none'});
      $('nav').css({'margin-top' :'10px'});
  }
  else {
      $('.sticky-top').css({
        'box-shadow': '0px 10px 10px #888',
        '-moz-box-shadow' : '0px 10px 10px #888',
        '-webkit-box-shadow' : '0px 10px 10px #888' });
        $('nav').css({'margin-top' :'0px'});
        $('aside img').css({'transform': 'scale(.90)',
        '-moz-transform': 'scale(.90)',
        '-webkit-transform': 'scale(.90)',
        'transition-duration': '1.80s',
        '-moz-transition-duration':' 1.80s',
        '-webkit-transition-duration': '1.80s',
       ' -o-transition-duration ': '1.80s ', 
       })

  }
});
// -----------------------------------------------------------------------------------------------------------
// for mobile view
$(document).ready(function($){
  var navclone =function(){
    $('body').on('click','.js-toggler',function(e){
      var $this=$(this);
      e.preventDefault();
      
      if($('body').hasClass('off_view')){
        $('body').removeClass('off_view');
        $('#sticky').removeClass('fixed-top');
        $('#sticky').addClass('sticky-top');
        $('#toggle i').removeClass('fas fa-times');
        $('#toggle i').addClass('fas fa-bars');
        $('#toggle').removeClass('white');
      
      }
        else{
          $('body').addClass('off_view');
          $('#sticky').removeClass('sticky-top');
          $('#sticky').addClass('fixed-top');
          $('#toggle i').removeClass('fas fa-bars');
          $('#toggle i').addClass('fas fa-times');
          $('#toggle').addClass('white');
        }
    })
  }
  $(document).mouseup(function(e){
    var container =$('.mobile_view');
    if(container.is(e.target) && container.has(e.target).length ===0){
      if($('body').hasClass('off_view')){
        $('body').removeClass('off_view');}
       
    }
  });
 
  navclone();
});
  // -----------------------------------------------------------------------------------------------------------
// mobile_view
function setHeight() {
  var one = document.getElementById('sticky');
  var two = document.getElementsByClassName('mobile_view')[0];
    two.style.top = one.offsetHeight + 'px';
}
setInterval(function(){
  setHeight();
    },10);
 
// -----------------------------------------------------------------------------------------------------------
// for video_icon
    $('video').on('play', function () {
    $('.video i').css('display','none')
  })
    // for video firefox
    $('.video i').click( function(){
    if($('video').get(0).paused==true){
      $('video').get(0).play();
    }
    else{$('video').get(0).pause();
    }
  });
  // -----------------------------------------------------------------------------------------------------------
  // for remove text
  $(function(){
    $(".video .text").click(function(){
      var videoelement= $(this).parent().find("video").get(0);
      if(videoelement.paused==true){
        $(this).css('display','none')
        videoelement.play();
      }
      else{
        videoelement.pause();
      }
    });
    
    });
  });
  // -----------------------------------------------------------------------------------------------------------
  // for chart _section
  $(function() {
    $("#bars li .bar").each( function( key, bar ) {
      var percentage = $(this).data('percentage'); 
      $(this).animate({
        'height' : percentage + '%'
      }, 1000);
    });
  });
  // -----------------------------------------------------------------------------------------------------------
  // for choose
 function isChecked() 
{
     var checkedclub1 = document.getElementById('club1').checked;
     var checkedclub2 = document.getElementById('club2').checked;
     var checkedclub3 = document.getElementById('club3').checked;
     var checkedclub4 = document.getElementById('club4').checked;

     if (checkedclub1 == false && checkedclub2 == false && checkedclub3 == false && checkedclub4 == false )
    {
        alert('يجب اختيار النادي اولا');
         return false;
     }
     else 
    {
    return true;
}
}
// -----------------------------------------------------------------------------------------------------------
// password
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// -----------------------------------------------------------------------------------------------------------
// details drop down
function myDetails() {
  document.getElementById("details").classList.toggle("d-none");
}
// -----------------------------------------------------------------------------------------------------------
// width
function setWidth() {
  var one = document.getElementsByClassName("width");
  var i; var j;
  var two = document.getElementsByClassName("width_2");
  for (i = 0 , j=0; i < one.length , j < two.length; i++ ,j++) {
    two[j].style.width = one[i].offsetWidth  + 'px';
    //update the width again, subtracting the difference between the first div and the second (which includes padding)
    // two[j].style.width = (two[j].offsetWidth-((two[j].offsetWidth - one[i].offsetWidth)*2))  + 'px';  
  }
}
function setWidth_2(){
  var one_p = document.getElementsByClassName("width_p");
  var i; var j;
  var two_p = document.getElementsByClassName("width_over");
  for (i = 0 , j=0; i < one_p.length , j < two_p.length; i++ ,j++) {
    two_p[j].style.width = one_p[i].offsetWidth  + 'px';
    //update the width again, subtracting the difference between the first div and the second (which includes padding)
    // two[j].style.width = (two[j].offsetWidth-((two[j].offsetWidth - one[i].offsetWidth)*2))  + 'px';  
  }
}
setInterval(function(){
  setWidth();
    },10);
setInterval(function(){
  setWidth_2();
    },10);
     // -----------------------------------------------------------------------------------------------------------
// plus player
function myPlus() {
  document.getElementById('blus').classList.remove("d-none");
  document.getElementById('blus_b').classList.remove("d-flex");
  document.getElementById('blus_b').classList.add("d-none");
}
