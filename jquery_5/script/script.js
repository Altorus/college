$(document).ready(function() {
    jQuery('#fader img:gt(0)').hide()

    setInterval(() => {
        jQuery('#fader :first-child')
            .fadeTo(500, 0)
            .next('img')
            .fadeTo(500, 1)
            .end()
            .appendTo('#fader')
    }, 4000)
});