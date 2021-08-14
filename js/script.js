/*global $,owl,smoothScroll,AOS,alert*/
$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('#loading').fadeOut(1000);
    });


    $('[data-tool="tooltip"]').tooltip({
        trigger: 'hover',
        animate: true,
        delay: 50,
        container: 'body'
    });



    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 50
    });
    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('[data-fancybox]').fancybox();


    $(".p-slider").owlCarousel({
        navigation: false,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        items: 5,
        mouseDrag: true,
        pagination: false,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 3],
			[700, 3],
            [800, 4],
			[1000, 4],
			[1200, 5],
			[1400, 5],
			[1600, 5]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });

    $(".blog-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        items: 3,
        mouseDrag: true,
        pagination: false,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
            [800, 3],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 3]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });

    $(".h-slider").owlCarousel({
        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 1000,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        stopOnHover: false,
        mouseDrag: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });

    $(".ab-slider").owlCarousel({
        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 1000,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: true,
        stopOnHover: false,
        mouseDrag: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });

    $('.open-menu').click(function () {
        $('.org').slideToggle();
    });



    $('.org,.open-menu').click(function (e) {
        e.stopPropagation();
    });

    var windowWidth = $(window).width();
    if (windowWidth <= 1024) {
        $('body').click(function () {
            $('.org').slideUp();
        });
    }


    // for upload file
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(':file').on('fileselect', function (event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }
    });

    $('.form-control').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.form-control').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });

    $('.timer').countTo();

    $('.open-menu').click(function () {
        $('.mob-menu').addClass('active');
    });

    $('.cl-menu').click(function () {
        $('.mob-menu').removeClass('active');
    });

    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.serv-sticky').addClass('up');
        } else {
            $('.serv-sticky').removeClass('up');
        }
    });

    $('.order').click(function () {
        $('.ask-form').show();
        $('.cl-sticky').show();
        $('.ask-head').hide();
        $('.serv-sticky').addClass('upup');
    });

    $('.cl-sticky').click(function () {
        $('.ask-form').hide();
        $(this).hide();
        $('.ask-head').show();
        $('.serv-sticky').removeClass('upup');
    });

    AOS.init({
        once: true
    });

    (function () {
        var materialForm;

        materialForm = function () {
            return $('.material-field').focus(function () {
                return $(this).closest('.form-group-material').addClass('focused has-value');
            }).focusout(function () {
                return $(this).closest('.form-group-material').removeClass('focused');
            }).blur(function () {
                if (!this.value) {
                    $(this).closest('.form-group-material').removeClass('has-value');
                }
                return $(this).closest('.form-group-material').removeClass('focused');
            });
        };

        $(function () {
            return materialForm();
        });

    }).call(this);

});