jQuery(function ($) {

    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    });


    $('.sidebar-dropdown a[href$="\#"]').click(function (event) {
        event.preventDefault();
    });
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });
    $("#toggled-sidebar").click(function () {
        $("body").toggleClass("sidebar-toggled");
        $("body").toggleClass("sidebar-mini");
    });
});
