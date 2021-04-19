$(document).ready(function () {
    $('#button').on('click', function () {
        // 入力の取得
        const level = Number($('#level').val());
        const powStatus = Number($('#powStatus').val());
        const intStatus = Number($('#intStatus').val());
        const spdStatus = Number($('#spdStatus').val());
        const vitStatus = Number($('#vitStatus').val());
        const lukStatus = Number($('#lukStatus').val());
        const atkStatus = Number($('#atkStatus').val());
        const defStatus = Number($('#defStatus').val());
        const matStatus = Number($('#matStatus').val());
        const mdfStatus = Number($('#mdfStatus').val());
        const powTotal = Number($('#powTotal').val());
        const intTotal = Number($('#intTotal').val());
        const spdTotal = Number($('#spdTotal').val());
        const vitTotal = Number($('#vitTotal').val());
        const lukTotal = Number($('#lukTotal').val());

        // 結果の初期化
        let powResult = powTotal; // POW結果
        let intResult = intTotal; // POW結果
        let spdResult = spdTotal; // POW結果
        let vitResult = vitTotal; // POW結果
        let lukResult = lukTotal; // POW結果
        let atkResult = atkStatus; // ATK結果
        let defResult = defStatus; // DEF結果
        let matResult = matStatus; // MAT結果
        let mdfResult = mdfStatus; // MDF結果

        // 処理
        $(".process div").each(function (i) {
            $(".process div").eq(i).css('color', 'red');
            let task = ($(".process div").eq(i).attr('name'));

            // ビタ処理
            if (task == "powBita") {
                let powBuff = parseInt(powStatus * 0.2); // POWバフ
                powResult += powBuff;
                atkResult += powBuff * 3;
            }
            if (task == "intBita") {
                let intBuff = parseInt(intStatus * 0.2); // INTバフ
                intResult += intBuff;
                matResult += intBuff * 2;
                mdfResult += intBuff * 15;
            }
            if (task == "spdBita") {
                let spdBuff = parseInt(spdStatus * 0.2); // SPDバフ
                spdResult += spdBuff;
            }
            if (task == "vitBita") {
                let vitBuff = parseInt(vitStatus * 0.2); // VITバフ
                vitResult += vitBuff;
                defResult += vitBuff * 2;
            }
            if (task == "lukBita") {
                let lukBuff = parseInt(lukStatus * 0.2); // LUKバフ
                lukResult += lukBuff;
            }
            if (task == "allBita") {
                let powBuff = parseInt(powStatus * 0.1); // POWバフ
                powResult += powBuff;
                atkResult += powBuff * 3;
                let intBuff = parseInt(intStatus * 0.1); // INTバフ
                intResult += intBuff;
                matResult += intBuff * 2;
                mdfResult += intBuff * 15;
                let spdBuff = parseInt(spdStatus * 0.1); // SPDバフ
                spdResult += spdBuff;
                let vitBuff = parseInt(vitStatus * 0.1); // VITバフ
                vitResult += vitBuff;
                defResult += vitBuff * 2;
                let lukBuff = parseInt(lukStatus * 0.1); // LUKバフ
                lukResult += lukBuff;
            }

            // リキッド処理
            if (task == "powLiquid") {
                let atkMagni = (level + powResult - 100) / 100; // ATK上昇倍率
                let atkBuff = parseInt( (atkResult - powResult) * Math.max(0.1, atkMagni) ); // ATK上昇量
                atkResult += atkBuff;
            }
            if (task == "defLiquid") {
                let defMagni = (level + vitResult - 100) / 100; // DEF上昇倍率
                let defBuff = parseInt( defResult * Math.max(0.1, defMagni) ); // DEF上昇量
                defResult += defBuff;
            }
            if (task == "matLiquid") {
                let matMagni = (level + intResult - 100) / 100; // MAT上昇倍率
                let matBuff = parseInt( matResult * Math.max(0.1, matMagni) ); // MAT上昇量
                matResult += matBuff;
            }
            if (task == "mdfLiquid") {
                let maxIntOrVit = Math.max(intResult, vitResult) // INT or VIT の大きい値を取る
                let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
                let mdfBuff = parseInt( (mdfResult - (intResult * 15) + (maxIntOrVit * 2) ) * Math.max(0.1, mdfMagni) ); // MDF上昇量
                mdfResult += mdfBuff;
            }
        });

        // 結果の表示
        $('#powResult').text(powResult);
        $('#intResult').text(intResult);
        $('#spdResult').text(spdResult);
        $('#vitResult').text(vitResult);
        $('#lukResult').text(lukResult);
        $('#atkResult').text(atkResult);
        $('#defResult').text(defResult);
        $('#matResult').text(matResult);
        $('#mdfResult').text(mdfResult);
    });

    // ビタ処理の追加
    $('#appendPowBita').on('click', function () {
        $('.process').append('<div name=powBita>POWビタ <button class="delete">削除</button> </div>');
    });
    $('#appendIntBita').on('click', function () {
        $('.process').append('<div name=intBita>INTビタ <button class="delete">削除</button> </div>');
    });
    $('#appendSpdBita').on('click', function () {
        $('.process').append('<div name=spdBita>SPDビタ <button class="delete">削除</button> </div>');
    });
    $('#appendVitBita').on('click', function () {
        $('.process').append('<div name=vitBita>VITビタ <button class="delete">削除</button> </div>');
    });
    $('#appendLukBita').on('click', function () {
        $('.process').append('<div name=lukBita>LUKビタ <button class="delete">削除</button> </div>');
    });
    $('#appendAllBita').on('click', function () {
        $('.process').append('<div name=allBita>ALLビタ <button class="delete">削除</button> </div>');
    });

    // リキッド処理の追加
    $('#appendPowLiquid').on('click', function () {
        $('.process').append('<div name=powLiquid>アタークリキッド  <button class="delete">削除</button> </div>');
    });
    $('#appendDefLiquid').on('click', function () {
        $('.process').append('<div name=defLiquid>マモールリキッド  <button class="delete">削除</button> </div>');
    });
    $('#appendMatLiquid').on('click', function () {
        $('.process').append('<div name=matLiquid>マホアタリキッド  <button class="delete">削除</button> </div>');
    });
    $('#appendMdfLiquid').on('click', function () {
        $('.process').append('<div name=mdfLiquid>マホマモリキッド  <button class="delete">削除</button> </div>');
    });

    // 処理項目を削除する
    $(document).on('click', '.delete', function () {
        $(this).parent()[0].remove();
    });
})
