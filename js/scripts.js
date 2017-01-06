
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
                $(".c-mainNavigationPanel__item").addClass("is-active-siteLinks");
                $('img.c-mainNavigationPanel--logo').attr('src', 'assets/img/learnX__logo--white.png');
                $(".c-mainNavigationPanel").addClass("is-active-mainNavigationPanel");
                $(".btn--join").addClass('is-active-btnRoundSuccess');
                $(".c-mainNavigationPanel--menuContainer").addClass("is-active-mainNavigationPanelMenuContainer");


          
            } else {
                $(".l-siteHeader").removeClass("is-active-siteHeader");
                $(".c-mainNavigationPanel__item").removeClass("is-active-siteLinks");
                $(".c-mainNavigationPanel").removeClass("is-active-mainNavigationPanel");
                $(".btn--join").removeClass('is-active-btnRoundSuccess');
                $(".c-mainNavigationPanel--menuContainer").removeClass("is-active-mainNavigationPanelMenuContainer");
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

//Tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();