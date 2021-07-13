$(document).ready( function (){
  // slider_player
$('.regular').slick({
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        accessibility: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        accessibility: false,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        accessibility: false,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});
  $('.next').click(function(){
    $('.slider').slick('slickNext');
  })
  $('.prev').click(function(){
    $('.slider').slick('slickPrev');
  })
  // setInterval(function(){
  //   $('.regular').slick('slickNext');
  //   },5000);
  // ------------------------------------------------------------------------------------------------
// for result match
    $('.regular2').slick({
      arrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            accessibility: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            accessibility: false,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            accessibility: false,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });
      $('.next2').click(function(){
        $('.slider2').slick('slickNext');
      })
      $('.prev2').click(function(){
        $('.slider2').slick('slickPrev');
      })
      setInterval(function(){
        $('.regular2').slick('slickNext');
        },5000);
      // ------------------------------------------------------------------------------------------------
        // for matchs slider
        $('.regular3').slick({
          arrows:false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          accessibility: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                accessibility: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                accessibility: false,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                accessibility: false,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
        });
          $('.next3').click(function(){
            $('.slider3').slick('slickNext');
          })
          $('.prev3').click(function(){
            $('.slider3').slick('slickPrev');
          })
          // ------------------------------------------------------------------------------------------------
          // for news header slider
          $('.regular4').slick({
            arrows:false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  accessibility: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  accessibility: false,
                  infinite: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  accessibility: false,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
            ]
          });
            $('.next4').click(function(){
              $('.slider4').slick('slickNext');
            })
            $('.prev4').click(function(){
              $('.slider4').slick('slickPrev');
            })

            // slider match
            // ------------------------------------------------------------------------------------------------
          // for news header slider
         $('.regular_m').slick({
            arrows:false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false,
            // dots: true,
            // dotsClass:'dot_pp',
            
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  accessibility: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  accessibility: false,
                  infinite: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  accessibility: false,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
            ]
          });
            $('.next_m').click(function(){
              $('.slider_m').slick('slickNext');
            })
            $('.prev_m').click(function(){
              $('.slider_m').slick('slickPrev');
            })
            $('.regular_m').on('beforeChange', function(event, slick, currentSlide, nextSlide){
              $('#external-buttons a.active').removeClass('active');
              $('#external-buttons a').eq(nextSlide).addClass('active');
            });
            // slider active
            var targetSlide = $('#external-buttons a.active').data('target');
              $('.regular_m').slick('slickGoTo', targetSlide );
            $('#external-buttons a').on('click', function(e){
                e.preventDefault();
                $('#external-buttons a.active').removeClass('active');
                $(this).addClass('active');
                var targetSlide = $(this).data('target');
                $('.regular_m').slick('slickGoTo', targetSlide );
            });
            // button
            $('.this_m').on('click', function(e){
              e.preventDefault();
              $('#external-buttons a.active').removeClass('active');
              $(this).addClass('active');
              var targetSlide = $(this).data('target');
              $('.regular_m').slick('slickGoTo', targetSlide );
            });
            // ------------------------------------------------------------------------------------------------
            // slide for club
            $('.regular_club').slick({
              arrows:false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              accessibility: false,
          
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    accessibility: false,
                    
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    accessibility: false,
                    infinite: true,
                    
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    accessibility: false,
                    slidesToScroll: 1,
                    infinite: true,
                    
                  }
                }
              ]
            });
            var targetSlide = $('#external-photo a.active').data('target');
            $('.regular_club').slick('slickGoTo', targetSlide );
          $('#external-photo a').on('click', function(e){
            e.preventDefault();
            $('#external-photo a.active').removeClass('active');
            $(this).addClass('active');
            var targetSlide = $(this).data('target');
            $('.regular_club').slick('slickGoTo', targetSlide );
          });
            
});