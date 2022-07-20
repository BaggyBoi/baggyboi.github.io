modifyTheme()
function openPage(a, b) {
    window.open(a, b)
}

$("#portfolio").click(function () {
    openPage("index.html", "_self")
});
$("#rps").click(function () {
    openPage("rps/index.html", "_blank")
});
$("#template").click(function () {
    openPage("template/index.html", "_blank")
});
$("#reddit").click(function () {
    openPage("https://www.reddit.com/user/Baggy_gamer", "_blank")
});
$("#youtube").click(function () {
    openPage("https://www.youtube.com/channel/UChT2nwpjYqhba88qUOf66KQ", "_blank")
});
$("#github").click(function () {
    openPage("https://github.com/BaggyBoi", "_blank")
});
let e = window.matchMedia("(max-width: 1300px)")
function scrollCheck(e) {
    if (e.matches) {
        $(document).scroll(function () {
            if ($(document).scrollTop() + $(window).height() >= $(document).height() - 500) {
                $("#goUp").css("opacity", "1")
            }
            else {
                $("#goUp").css("opacity", "0")
            }
        });
    } else {
        $(document).scroll(function () {
            if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
                $("#goUp").css("opacity", "1")
            }
            else {
                $("#goUp").css("opacity", "0")
            }
        });
    }
}
scrollCheck(e)
if (e.matches) {
    $(".menu-opener-li").css("display", "block")
    $(".for-mobile").css("display", "block")
}
else {
    $(".menu-opener-li").css("display", "none")
    $(".for-mobile").css("display", "none")
}
$("#goUp").click(function () {
    window.scrollTo(0, 0)
});
if (localStorage.getItem("isMenuOpened") == null) {
    localStorage.setItem("isMenuOpened", false)
}
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark")
}
$("#hint").css("opacity", "0")
if (localStorage.getItem("isMenuOpened") == "false") {
    let randomTimeOut = Math.floor((Math.random() * 7000) + 3000);
    setTimeout(() => {
        $("#hint").css("opacity", "1")
        $("#hint").css("display", "block")
    }, randomTimeOut);
}
$("#hint").click(function (e) {
    $(this).css("opacity", "0")
});
$(document).keyup(function (e) {
    if (e.ctrlKey && e.key == 'k') {
        localStorage.setItem("isMenuOpened", true)
        $("#background").css("opacity", "1");
        $("#background").css("z-index", "99");
        $(document).on('keydown', function (event) {
            if (event.key == "Escape") {
                $("#background").css("opacity", "0");
                $("#background").css("z-index", "-1");
            }
        });
    }
});

$("#closeMenuBtn").click(function () {
    $("#background").css("opacity", "0");
    $("#background").css("z-index", "-1");
});
$("#check").click(function () {
    if ($(this).is(":checked")) {
        localStorage.setItem("theme", "light")
        modifyTheme()
    }
    else {
        localStorage.setItem("theme", "dark")
        modifyTheme()
    }
});
function modifyTheme() {
    if (localStorage.getItem("theme") == "dark") {
        $("div").addClass("bg-black")
        $("div").addClass("text-white")
        $("div").removeClass("text-black")
        $("body").addClass("bg-black")
        $("#divider").addClass("bg-black")
        $(".navbar-white").addClass("bg-black")
        $(".navbar-white").addClass("navbar-dark")
        $(".navbar-white").removeClass("navbar-white")
        $(".navbar-brand").addClass("text-black")
        $(".text-secondary").addClass("text-white-50")
        $(".text-white-50").removeClass("text-secondary")
        $(".navbar-brand").addClass("text-light")
        $(".navbar-brand").removeClass("text-black")
        $(".navbar-toggler-icon").addClass("text-white")
        $(".navbar-toggler-icon").removeClass("text-black")
        $(".bg-white").addClass("bg-dark")
        $(".bg-dark").removeClass("bg-white")
        $("#hint").addClass("bg-dark");
        $("#hint").removeClass("bg-white");
        document.getElementById("hint").style.boxShadow = "0px 0px 25px white"
    }
    if (localStorage.getItem("theme") == "light") {
        $("div").addClass("bg-white")
        $("div").addClass("text-black")
        $("div").removeClass("text-white")
        $("body").addClass("bg-white")
        $("#divider").addClass("bg-black")
        $(".navbar-dark").addClass("bg-white")
        $(".navbar-dark").addClass("navbar-white")
        $(".navbar-dark").removeClass("navbar-dark")
        $(".navbar-brand").addClass("text-black")
        $(".text-white-50").addClass("text-secondary")
        $(".text-white-50").removeClass("text-white-50")
        $(".navbar-brand").addClass("text-black")
        $(".navbar-brand").removeClass("text-white")
        $(".navbar-toggler-icon").addClass("text-black")
        $(".navbar-toggler-icon").removeClass("text-white")
        $(".bg-dark").addClass("bg-white")
        $(".bg-dark").removeClass("bg-dark")
        $("#hint").addClass("bg-white");
        $("#hint").removeClass("bg-dark");
        document.getElementById("hint").style.boxShadow = "0px 0px 25px black"
        $("#check").attr("checked", true);
    }

}
$(".menu-opener").click(function () {
    localStorage.setItem("isMenuOpened", true)
    $("#background").css("opacity", "1");
    $("#background").css("z-index", "99");
});