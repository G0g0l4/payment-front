$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('.close-modal').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        // placement: 'bottom',
    });
});