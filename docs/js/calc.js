$(document).ready(function () {
    $('#button').on(
        'click', function () {
            // 入力の取得
            var level = Number($('#level').val());
            var powStatus = Number($('#powStatus').val());
            var intStatus = Number($('#intStatus').val());
            var spdStatus = Number($('#spdStatus').val());
            var vitStatus = Number($('#vitStatus').val());
            var lukStatus = Number($('#lukStatus').val());
            var atkStatus = Number($('#atkStatus').val());
            var defStatus = Number($('#defStatus').val());
            var matStatus = Number($('#matStatus').val());
            var mdfStatus = Number($('#mdfStatus').val());
            var powTotal = Number($('#powTotal').val());
            var intTotal = Number($('#intTotal').val());
            var spdTotal = Number($('#spdTotal').val());
            var vitTotal = Number($('#vitTotal').val());
            var lukTotal = Number($('#lukTotal').val());

            var powResult = powTotal;
            var atkBuff = 0;
            if($('#powBita').prop('checked')){
                var powBuff = parseInt(powStatus * 0.2);
                powResult += powBuff
                atkBuff += powBuff * 3;
            }
            $('#powResult').text(powResult);

            var atkResult = atkStatus + atkBuff;
            if($('#atkLiquid').prop('checked')){
                atkResult += (atkResult - powResult) * ((level + powResult - 100) / 100);
            }
            $('#atkResult').text(parseInt(atkResult));
        }
    );
})
