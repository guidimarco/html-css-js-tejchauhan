$('document').ready(function() {
    $("#icon").click(function() {
        $("#wrapper .overlay").addClass("overlay-click");
    });

    $('#close-overlay').click(function() {
        $('#wrapper .overlay').removeClass('overlay-click');
    });
});
