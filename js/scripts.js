
        //Hamburger Menu
        $('.c-mainNavigationPanel--mobileMenuButton').click(function(){
            $('.c-mainNavigationPanel--menuContainer').slideToggle();
        });

        //Menu Change on scroll
        $(window).on("scroll", function(){

            if($(window).scrollTop() < 50 ) {
                $('img.c-mainNavigationPanel--logo').attr('src', 'assets/img/learnX__logo--black.png');
                $(".m-nav__item").removeClass("active-links");
            } 

            if($(window).scrollTop() > 50) {
                $(".l-siteHeader").addClass("is-active-siteHeader");
                $(".c-mainNavigationPanel--item").addClass("is-active-siteLinks");
                $('img.c-mainNavigationPanel--logo').attr('src', 'assets/img/learnX__logo--white.png');
                $(".c-mainNavigationPanel--menusWrapper").addClass("is-active-menusWrapper");
                $(".c-mainNavigationPanel").addClass("is-active-mainNavigationPanel");

          
            } else {
                $(".l-siteHeader").removeClass("is-active-siteHeader");
                $(".c-mainNavigationPanel--item").removeClass("is-active-siteLinks");
                $(".c-mainNavigationPanel--menusWrapper").removeClass("is-active-menusWrapper");
                $(".c-mainNavigationPanel").removeClass("is-active-mainNavigationPanel");
            }

        });

        // $(window).scroll(function () {
        //     if ($(document).scrollTop() == 0) {
        //         $('#header').removeClass('tiny');
        //         $('#menu-spacing').addClass('nav-margin-top');
        //         $('.title-area img').attr('src', 'img/resolute_logo.png');
        //     } else {
        //         $('#header').addClass('tiny');
        //         $('#menu-spacing').removeClass('nav-margin-top');
        //         $('.title-area img').attr('src', 'your-new-image.png');
        //     }
        // }); 