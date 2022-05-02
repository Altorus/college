$(document).ready(function() {
    $("#content").keyup(function() {
        var box = $(this).val()
        var main = box.length * 100
        var value = (main / 50)
        var count = 50 - box.length

        if (box.length != 50) {
            $('#count').html(count);
            $('#barbox').animate({
                "width": value + '%'
            }, 1)
        } else {
            alert("Места больше нет")
        }
        return false
    });
});