// JavaScript source code
// select all nav-links

    $("section:gt(0)").each(function (index, section) {
        $(section).height($(window).innerHeight())
    })



$(window).resize(function () {
    $("section:gt(0)").each(function (index, section) {
        $(section).height($(window).innerHeight())
    })

})
$("#navbar .nav-link").each(function (index,link) {
    $(link).click(function () {
        $activeSection = $("#" + $(this).attr("name"));
        $("html,body").animate({
            scrollTop: $activeSection.offset().top,
        },2000)
    })
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("nav-fixed ")
        
        $(".navbar").addClass("container-fluid")
        $(".navbar").removeClass("bg-transparent")
        $(".navbar").addClass("bg-dark")
    } else {
        $(".navbar").removeClass("nav-fixed")
        $(".navbar").addClass("bg-transparent")
        $(".navbar").removeClass("bg-dark")
    }
})