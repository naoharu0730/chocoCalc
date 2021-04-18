$(document).ready(function () {
    $('#button').on(
        'click', function () {
            var pow = $('#powTotal').val();
            $('#powResult').text(pow);
        }
    );
})
