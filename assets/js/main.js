const relatingTo = ["Hardware", "Software", "Other"];




window.onload = function() {
    $("#aboutUs").hide();
}

$("#navAboutUs").click(function() {;
    $("#aboutUs").show();
})

$("navAboutUs").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("aboutUs");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});