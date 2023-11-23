$(document).ready(function () {
    $(".home").click(function () {
        $('.overlay').removeClass("hidden");
    });
    $(".groen").click(function () {
        $('.overlay').addClass("hidden");
    });
    //verleden
    $(".home_verleden").click(function () {
        $('.overlay').removeClass("hidden");
    });
    $(".groen").click(function () {
        $('.overlay').addClass("hidden");
    });
    //beloning
    $(".beloning_ding1").click(function () {
        $('.geen_hidden').addClass("hidden2");
        $('.jup').removeClass("hidden2");
        $('.jup_pop').addClass("pop_up3");
    });
    $(".jup_pop").click(function () {
        window.location.href="verleden10.html";
    });
    $(".kleding_icon_def").click(function () {
        $('.content_kleding').removeClass("hidden2");
    });
    $(".kruisje_kleding_def").click(function () {
        $('.content_kleding').addClass("hidden2");
    });
});