$(document).ready(function() {

    $(".box-menu-accordion").click(function(e) {

        if ($(".box-menu-accordion").not(this).hasClass("opening")) {
            $(".box-menu-accordion").not(this).removeClass("opening");
            $(".box-menu-accordion").not(this).children(".accordion-detail").slideUp();

        }
        $(this).addClass("opening");
        $(this).children(".accordion-detail").stop().slideToggle();


    });
});