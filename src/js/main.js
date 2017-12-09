$(document).ready(function() {

    // Carousel
    var carousel = $("#carousel");
    carousel.owlCarousel({
        singleItem: true,
        pagination: true
    });
    $('#js-prev').click(function() {
        carousel.trigger('owl.prev');
        return false;
    });

    $('#js-next').click(function() {
        carousel.trigger('owl.next');
        return false;
    });

    // Acordeon
    $('#accordeon .acc-head').on('click', f_acc);
    function f_acc() {
        $('#accordeon .acc-body').not($(this).next()).slideUp(300);
        $(this).next().slideToggle(300);
    }

    // Dropdown
    $('#dropdown-widget .acc-head').on('click', f_acc_2);
    function f_acc_2() {
        $('#dropdown-widget .acc-body').not($(this).next()).slideUp(300);
        $(this).next().slideToggle(100);
    }

    // Calendar widget
    $(function() {
        $("#datepicker").datepicker();
    });

    // Sliders widget
    $(function() {
        $("#slider").slider();
    });

    $(function() {
        $("#slider-double").slider({
            range: true,
            min: 0,
            max: 1000,
            values: [0, 300]
        });
    });
});