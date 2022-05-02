$(document).ready(function() {
    $('#btn').hide();

    $(() => {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#btn').fadeIn();
            } else {
                $('#btn').fadeOut();
            }
        });

        $('#btn').click(function(e) {
            $('body,html').animate({
                scrollTop: 0
            }, 800)
            return false

        });
    })
});