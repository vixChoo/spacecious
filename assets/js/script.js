const sideControl = document.getElementById("openNav");
const closeControl = document.getElementById("closeNav");
const landAddress = document.getElementsByClassName("land-address");
var big_image, navbar_initialized, transparent = !0,
    transparentDemo = !0,
    fixedTop = !1,
    backgroundOrange = !1,
    toggle_initialized = !1,
    $datepicker = $(".datepicker"),
    $collapse = $(".navbar .collapse"),
    $html = $("html");

function openNav() {
    document.getElementById("sideNav").style.width = "100%", sideControl.style.display = "none", closeControl.classList.remove("d-none"), closeControl.classList.add("d-block")
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0%", sideControl.style.display = "block", closeControl.classList.add("d-none"), closeControl.classList.remove("d-block")
}

function hideNavbarCollapse(e) {
    e.addClass("collapsing-out")
}

function hiddenNavbarCollapse(e) {
    e.removeClass("collapsing-out")
}

function debounce(e, o, t) {
    var a;
    return function() {
        var n = this,
            s = arguments;
        clearTimeout(a), a = setTimeout(function() {
            a = null, t || e.apply(n, s)
        }, o), t && !a && e.apply(n, s)
    }
}

function debounce(e, o, t) {
    var a;
    return function() {
        var n = this,
            s = arguments;
        clearTimeout(a), a = setTimeout(function() {
            a = null, t || e.apply(n, s)
        }, o), t && !a && e.apply(n, s)
    }
}

function hideForm(e, o) {
    let t = document.getElementById(e);
    document.getElementById(o).checked ? (t.style.display = "block", t.classList.remove("d-none"), t.classList.add("d-block")) : (t.style.display = "none", t.classList.add("d-none"), t.classList.remove("d-block"))
}

function disableForm(e, o) {
    let t = document.getElementById(o);
    document.getElementById(e).checked ? "pickUp" == o ? (t.classList.remove("disabled"), (t = document.getElementById("pickUp2")).classList.remove("disabled")) : t.classList.remove("disabled") : t.classList.add("disabled")
}

function disableDiv(e, o) {
    let t = document.getElementById(o);
    document.getElementById(e).checked ? t.classList.add("disabled") : t.classList.remove("disabled")
}

function hideDiv(e) {
    let o = document.getElementById(e);
    o.className.includes("d-none") ? (o.style.display = "block", o.classList.remove("d-none"), o.classList.add("d-block")) : (o.classList.add("d-none"), o.classList.remove("d-block"), o.style.display = "none")
}

function hideBtnDiv(e, o) {
    let t = document.getElementById(e),
        a = document.getElementById(o);
    t.className.includes("d-none") ? (t.style.display = "block", t.classList.remove("d-none"), t.classList.add("d-block"), a.classList.add("d-none")) : (t.classList.add("d-none"), t.classList.remove("d-block"), t.style.display = "none", a.classList.remove("d-none"))
}

function redirect(e) {
    event.preventDefault(), window.location.href = e
}

function scrollToView(e) {
    let o = document.getElementById(e);
    0 != $(o).length && $("html, body").animate({
        scrollTop: $(o).offset().top - 100
    }, 1e3)
}
navigator.platform.indexOf("Win") > -1 ? (0 != $(".tab-content .table-responsive").length && $(".table-responsive").each(function() {
        new PerfectScrollbar($(this)[0])
    }), $html.addClass("perfect-scrollbar-on")) : $html.addClass("perfect-scrollbar-off"), $(document).ready(function() {
        $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), $('[data-toggle="popover"]').each(function() {
            color_class = $(this).data("color"), $(this).popover({
                template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            })
        });
        var e = document.getElementById("square1"),
            o = document.getElementById("square2"),
            t = document.getElementById("square3"),
            a = document.getElementById("square4"),
            n = document.getElementById("square5"),
            s = document.getElementById("square6"),
            l = document.getElementById("square7"),
            i = document.getElementById("square8");
        0 != $(".square").length && $(document).mousemove(function(r) {
            posX = event.clientX - window.innerWidth / 2, posY = event.clientY - window.innerWidth / 6, e.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", o.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", t.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", a.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", n.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", s.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", l.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)", i.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)"
        }), blackKit.initNavbarImage(), $navbar = $(".navbar[color-on-scroll]"), scroll_distance = $navbar.attr("color-on-scroll") || 500, 0 != $(".navbar[color-on-scroll]").length && (blackKit.checkScrollForTransparentNavbar(), $(window).on("scroll", blackKit.checkScrollForTransparentNavbar)), $(".form-control").on("focus", function() {
            $(this).parent(".input-group").addClass("input-group-focus")
        }).on("blur", function() {
            $(this).parent(".input-group").removeClass("input-group-focus")
        }), $(".bootstrap-switch").each(function() {
            $this = $(this), data_on_label = $this.data("on-label") || "", data_off_label = $this.data("off-label") || "", $this.bootstrapSwitch({
                onText: data_on_label,
                offText: data_off_label
            })
        }), $(".carousel").carousel({
            interval: !1
        })
    }), $collapse.length && ($collapse.on({
        "hide.bs.collapse": function() {
            hideNavbarCollapse($collapse)
        }
    }), $collapse.on({
        "hidden.bs.collapse": function() {
            hiddenNavbarCollapse($collapse)
        }
    })), $(document).on("click", ".navbar-toggler", function() {
        $toggle = $(this), 1 == blackKit.misc.navbar_menu_visible ? ($("html").removeClass("nav-open"), blackKit.misc.navbar_menu_visible = 0, $("#bodyClick").remove(), setTimeout(function() {
            $toggle.removeClass("toggled")
        }, 550)) : (setTimeout(function() {
            $toggle.addClass("toggled")
        }, 580), div = '<div id="bodyClick"></div>', $(div).appendTo("body").click(function() {
            $("html").removeClass("nav-open"), blackKit.misc.navbar_menu_visible = 0, setTimeout(function() {
                $toggle.removeClass("toggled"), $("#bodyClick").remove()
            }, 550)
        }), $("html").addClass("nav-open"), blackKit.misc.navbar_menu_visible = 1)
    }), blackKit = {
        misc: {
            navbar_menu_visible: 0
        },
        checkScrollForTransparentNavbar: debounce(function() {
            $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : transparent || (transparent = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"))
        }, 17),
        initNavbarImage: function() {
            var e = $(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),
                o = e.data("nav-image");
            $(window).width() < 991 || $("body").hasClass("burger-menu") ? null != o && e.css("background", "url('" + o + "')").removeAttr("data-nav-image").css("background-size", "cover").addClass("has-image") : null != o && e.css("background", "").attr("data-nav-image", "" + o).css("background-size", "").removeClass("has-image")
        },
        initDatePicker: function() {
            0 != $datepicker.length && $datepicker.datetimepicker({
                icons: {
                    time: "fas fa-clock",
                    date: "fas fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: "fas fa-chevron-left",
                    next: "fas fa-chevron-right",
                    today: "fa fa-screenshot",
                    clear: "fa fa-trash",
                    close: "fa fa-remove"
                }
            })
        },
        initSliders: function() {
            var e = document.getElementById("sliderRegular");
            0 != $("#sliderRegular").length && noUiSlider.create(e, {
                start: 40,
                connect: [!0, !1],
                range: {
                    min: 0,
                    max: 100
                }
            });
            var o = document.getElementById("sliderDouble");
            0 != $("#sliderDouble").length && noUiSlider.create(o, {
                start: [20, 60],
                connect: !0,
                range: {
                    min: 0,
                    max: 100
                }
            })
        }
    },
    function(e) {
        e.fn.bgscroll = function(o) {
            var t = e.extend({
                    bgpositionx: 50,
                    direction: "bottom",
                    debug: !1,
                    min: 0,
                    max: 100
                }, o),
                a = e(document).height() - e(window).height(),
                n = a - (this.offset().top + this.height());
            this.offset().top < a && (n = 0);
            var s = this.offset().top + this.height();
            if (e(window).scrollTop() > n && e(window).scrollTop() < s) {
                var l = (e(window).scrollTop() - n) / (s - n) * 100;
                "top" == t.direction && (l = 100 - l), l > t.max && (l = t.max), l < t.min && (l = t.min), t.debug && console.log("Element background position: " + l + " %")
            }
            return this.css({
                backgroundPosition: t.bgpositionx + "% " + l + "%"
            })
        }
    }(jQuery),
    function(e) {
        e(window).scroll(function() {
            e(this).scrollTop() > 100 ? e(".scrollup").fadeIn() : e(".scrollup").fadeOut()
        }), e(".scrollup").on("click", function() {
            return e("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }(jQuery), $(".owl-carousel-1").owlCarousel({
        loop: !0,
        margin: 20,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    }), $(".owl-carousel-2").owlCarousel({
        loop: !1,
        rewind: !0,
        margin: 20,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }), $(".owl-carousel-4").owlCarousel({
        loop: !1,
        rewind: !0,
        margin: 20,
        nav: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }), $(".owl-carousel-3").owlCarousel({
        loop: !0,
        rewind: !0,
        margin: 20,
        nav: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }), $(".owl-carousel-5").owlCarousel({
        items: 4,
        loop: !1,
        rewind: !0,
        autoWidth: !0,
        margin: 8,
        nav: !1
    }), $(document).ready(function() {
    	 if (window.innerWidth <= 765) {
            for (let i = 0; i < landAddress.length; i++) {
                landAddress[i].style.minWidth = window.innerWidth - 90 + "px";
            }
        }

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        }), $("#sidebarCollapse").on("click", function() {
            $("#sidebar, #content").toggleClass("active"), $(".collapse.in").toggleClass("in"), $("a[aria-expanded=true]").attr("aria-expanded", "false")
        })
    });


