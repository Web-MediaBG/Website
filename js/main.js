$(document).ready(function () {


    let $btns = $('.project-area .dropdown-menu a');


    $btns.click(function (e) {

        $('.project-area .dropdown-menu a').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $(function(){

        $(".dropdown-menu a").click(function(){
    
          $(".project-area .btn:first-child").text($(this).text());
          $(".project-area .btn:first-child").val($(this).text());
    
       });
    
    });

    let $btns2 = $('.project-area .button-group button');


    $btns2.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector2 = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector2
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: false }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    $(window).resize(function(){
        var width = $(window).width();
        var x = document.getElementById("inschrijven")
        var y = document.getElementById("Button")
        if(width < 1000){
           y.style.display = "none"
           x.style.display = "block"

        }
        else{
            y.style.display = "block";
            x.style.display = "none"
        }
    })
    .resize();//trigger the resize event on page load.

    navbarFixed();

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });



});