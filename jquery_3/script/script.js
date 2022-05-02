$(document).ready(function() {
    $('li').click(function(e) {
        var number = $(this).index()
        $('h2').hide().eq(number).show()
        $('p').hide().eq(number).show()
        $(this).toggleClass('active inactive')
        $('li').not(this).removeClass('acrive').addClass('inactive')
    });
    $('h2').not(':first').hide()
    $('p').now(':first').hide();
});