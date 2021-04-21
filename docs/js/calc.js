$(document).ready(function () {
    $('input[type="number"]').change(function () {
        calculation() // 入力値の更新タイミングで更新
    });
    $('input[type="text"]').change(function () {
        calculation() // 入力値の更新タイミングで更新
    });

    $('.process').on('change', 'select', function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // ビタ処理の追加
    $('#appendPowBita').on('click', function () {
        $('.process').append('<div name=powBita>POWビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntBita').on('click', function () {
        $('.process').append('<div name=intBita>INTビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdBita').on('click', function () {
        $('.process').append('<div name=spdBita>SPDビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitBita').on('click', function () {
        $('.process').append('<div name=vitBita>VITビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukBita').on('click', function () {
        $('.process').append('<div name=lukBita>LUKビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendAllBita').on('click', function () {
        $('.process').append('<div name=allBita>ALLビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 魔獣缶処理の追加
    $('#appendPowCan').on('click', function () {
        $('.process').append('<div name=powCan>魔獣缶A <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntCan').on('click', function () {
        $('.process').append('<div name=intCan>魔獣缶B <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // シール処理の追加
    $('#appendPowSeal').on('click', function () {
        $('.process').append('<div name=powSeal>POWシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntSeal').on('click', function () {
        $('.process').append('<div name=intSeal>INTシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdSeal').on('click', function () {
        $('.process').append('<div name=spdSeal>SPDシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitSeal').on('click', function () {
        $('.process').append('<div name=vitSeal>VITシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukSeal').on('click', function () {
        $('.process').append('<div name=lukSeal>LUKシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 巻物処理の追加
    $('#appendPowMakimono').on('click', function () {
        $('.process').append(`<div name=powMakimono>POW巻物
        <select name="selectPowMakimono">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntMakimono').on('click', function () {
        $('.process').append(`<div name=intMakimono>INT巻物
        <select name="selectIntMakimono">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdMakimono').on('click', function () {
        $('.process').append(`<div name=spdMakimono>SPD巻物
        <select name="selectSpdMakimono">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitMakimono').on('click', function () {
        $('.process').append(`<div name=vitMakimono>VIT巻物
        <select name="selectVitMakimono">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        calculation() // 処理の追加タイミングで更新<button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukMakimono').on('click', function () {
        $('.process').append(`<div name=lukMakimono>LUK巻物
        <select name="selectLukMakimono">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendAtkMakimono').on('click', function () {
        $('.process').append(`<div name=atkMakimono>ATK巻物
        <select name="selectAtkMakimono">
        <option value="0" selected>0</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
        <option value="120">120</option>
        <option value="140">140</option>
        <option value="160">160</option>
        <option value="180">180</option>
        <option value="200">200</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendDefMakimono').on('click', function () {
        $('.process').append(`<div name=defMakimono>DEF巻物
        <select name="selectDefMakimono">
        <option value="0" selected>0</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
        <option value="120">120</option>
        <option value="140">140</option>
        <option value="160">160</option>
        <option value="180">180</option>
        <option value="200">200</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMatMakimono').on('click', function () {
        $('.process').append(`<div name=matMakimono>MAT巻物
        <select name="selectMatMakimono">
        <option value="0" selected>0</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
        <option value="120">120</option>
        <option value="140">140</option>
        <option value="160">160</option>
        <option value="180">180</option>
        <option value="200">200</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMdfMakimono').on('click', function () {
        $('.process').append(`<div name=mdfMakimono>MDF巻物
        <select name="selectMdfMakimono">
        <option value="0" selected>0</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
        <option value="120">120</option>
        <option value="140">140</option>
        <option value="160">160</option>
        <option value="180">180</option>
        <option value="200">200</option>
        </select>
        <button class="delete">削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });

    // リキッド処理の追加
    $('#appendPowLiquid').on('click', function () {
        $('.process').append('<div name=powLiquid>アタークリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendDefLiquid').on('click', function () {
        $('.process').append('<div name=defLiquid>マモールリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMatLiquid').on('click', function () {
        $('.process').append('<div name=matLiquid>マホアタリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMdfLiquid').on('click', function () {
        $('.process').append('<div name=mdfLiquid>マホマモリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // スキル処理の追加
    $('#appendBloodScraper').on('click', function () {
        $('.process').append('<div name=bloodScraper>ブラッドスクレイパー  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendElysion').on('click', function () {
        $('.process').append('<div name=elysion>大天使の加護  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendApophis').on('click', function () {
        $('.process').append('<div name=apophis>邪神の呪詛  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 処理項目を削除する
    $('.process').on('click', '.delete', function () {
        $(this).parent()[0].remove();
        calculation() // 処理の追加タイミングで更新
    });

    // CSVインポート
    $('#import').on('click', function (e) {
        e.target.value = "" // CSV ファイルの初期化
        csvImport();
    });

    // CSVエクスポート
    $('#export').on('click', function () {
        csvExport();
    });

})

function calculation() {
    // 式の評価

    // 入力の取得
    const level = Number($('#level').val());
    const powStatus = Number($('#powStatus').val());
    const intStatus = Number($('#intStatus').val());
    const spdStatus = Number($('#spdStatus').val());
    const vitStatus = Number($('#vitStatus').val());
    const lukStatus = Number($('#lukStatus').val());
    const atkTotal = Number($('#atkTotal').val());
    const defTotal = Number($('#defTotal').val());
    const matTotal = Number($('#matTotal').val());
    const mdfTotal = Number($('#mdfTotal').val());
    const powTotal = Number(safeEval(safeReplace($('#powTotal').val())));
    const intTotal = Number(safeEval(safeReplace($('#intTotal').val())));
    const spdTotal = Number(safeEval(safeReplace($('#spdTotal').val())));
    const vitTotal = Number(safeEval(safeReplace($('#vitTotal').val())));
    const lukTotal = Number(safeEval(safeReplace($('#lukTotal').val())));

    // 結果の初期化
    let powResult = powTotal; // POW結果
    let intResult = intTotal; // POW結果
    let spdResult = spdTotal; // POW結果
    let vitResult = vitTotal; // POW結果
    let lukResult = lukTotal; // POW結果
    let atkResult = atkTotal; // ATK結果
    let defResult = defTotal; // DEF結果
    let matResult = matTotal; // MAT結果
    let mdfResult = mdfTotal; // MDF結果

    // リキッドの上昇値
    let atkLiquidBuff = 0; // リキッドのATK上昇値
    let defLiquidBuff = 0; // リキッドのDEF上昇値
    let matLiquidBuff = 0; // リキッドのMAT上昇値
    let mdfLiquidBuff = 0; // リキッドのMDF上昇値

    // エル羽の上昇値
    let atkElBuff = 0; // エル羽のATK上昇値
    let defElBuff = 0; // エル羽のDEF上昇値
    let matElBuff = 0; // エル羽のMAT上昇値
    let mdfElBuff = 0; // エル羽のMDF上昇値

    // 処理
    $(".process div").each(function (i) {
        $(".process div").eq(i).css('color', 'red');
        let task = ($(".process div").eq(i).attr('name'));

        // ビタ処理
        if (task == "powBita") {
            let powBuff = parseInt(powStatus * 0.2); // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (task == "intBita") {
            let intBuff = parseInt(intStatus * 0.2); // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (task == "spdBita") {
            let spdBuff = parseInt(spdStatus * 0.2); // SPD上昇値
            spdResult += spdBuff;
        }
        if (task == "vitBita") {
            let vitBuff = parseInt(vitStatus * 0.2); // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (task == "lukBita") {
            let lukBuff = parseInt(lukStatus * 0.2); // LUK上昇値
            lukResult += lukBuff;
        }
        if (task == "allBita") {
            let powBuff = parseInt(powStatus * 0.1); // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = parseInt(intStatus * 0.1); // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let spdBuff = parseInt(spdStatus * 0.1); // SPD上昇値
            spdResult += spdBuff;
            let vitBuff = parseInt(vitStatus * 0.1); // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = parseInt(lukStatus * 0.1); // LUK上昇値
            lukResult += lukBuff;
        }

        // 魔獣缶処理
        if (task == "powCan") {
            let powBuff = 10; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = -10; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (task == "intCan") {
            let intBuff = 10; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let vitBuff = -10; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }

        // シール処理
        if (task == "powSeal") {
            let powBuff = 15; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = -15; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (task == "intSeal") {
            let powBuff = -15; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = 15; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (task == "spdSeal") {
            let spdBuff = 15; // SPD上昇値
            spdResult += spdBuff;
            let lukBuff = -15; // LUK上昇値
            lukResult += lukBuff;
        }
        if (task == "vitSeal") {
            let spdBuff = -15; // SPD上昇値
            spdResult += spdBuff;
            let vitBuff = 15; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (task == "lukSeal") {
            let vitBuff = -15; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = 15; // LUK上昇値
            lukResult += lukBuff;
        }

        // 巻物処理
        if (task == "powMakimono") {
            let powBuff = Number($(".process div").eq(i).children().val()); // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (task == "intMakimono") {
            let intBuff = Number($(".process div").eq(i).children().val()); // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (task == "spdMakimono") {
            let spdBuff = Number($(".process div").eq(i).children().val()); // SPD上昇値
            spdResult += spdBuff;
        }
        if (task == "vitMakimono") {
            let vitBuff = Number($(".process div").eq(i).children().val()); // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (task == "lukMakimono") {
            let lukBuff = Number($(".process div").eq(i).children().val()); // LUK上昇値
            lukResult += lukBuff;
        }
        if (task == "atkMakimono") {
            let atkBuff = Number($(".process div").eq(i).children().val()); // ATK上昇値
            atkResult += atkBuff;
        }
        if (task == "defMakimono") {
            let atkBuff = Number($(".process div").eq(i).children().val()); // DEF上昇値
            defResult += atkBuff;
        }
        if (task == "matMakimono") {
            let atkBuff = Number($(".process div").eq(i).children().val()); // MAT上昇値
            matResult += atkBuff;
        }
        if (task == "mdfMakimono") {
            let atkBuff = Number($(".process div").eq(i).children().val()); // MDF上昇値
            mdfResult += atkBuff;
        }

        // リキッド処理
        if (task == "powLiquid") {
            let atkMagni = (level + powResult - 100) / 100; // ATK上昇倍率
            atkLiquidBuff = parseInt((atkResult - powResult - atkElBuff) * Math.max(0.1, atkMagni)); // ATK上昇量
            atkResult += atkLiquidBuff;
        }
        if (task == "defLiquid") {
            let defMagni = (level + vitResult - 100) / 100; // DEF上昇倍率
            defLiquidBuff = parseInt((defResult - defElBuff) * Math.max(0.1, defMagni)); // DEF上昇量
            defResult += defLiquidBuff;
        }
        if (task == "matLiquid") {
            let matMagni = (level + intResult - 100) / 100; // MAT上昇倍率
            matLiquidBuff = parseInt((matResult - matElBuff) * Math.max(0.1, matMagni)); // MAT上昇量
            matResult += matLiquidBuff;
        }
        if (task == "mdfLiquid") {
            let maxIntOrVit = Math.max(intResult, vitResult) // INT or VIT の大きい値を取る
            let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
            mdfLiquidBuff = parseInt((mdfResult - (intResult * 15) + (maxIntOrVit * 2) - mdfElBuff) * Math.max(0.1, mdfMagni)); // MDF上昇量
            mdfResult += mdfLiquidBuff;
        }

        // スキル処理
        if (task == "bloodScraper") {
            let powBuff = 9; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (task == "elysion") {
            let powBuff = parseInt(powResult * 0.2); // POW上昇値
            powResult += powBuff;
            // atkResult += powBuff * 3;
            let intBuff = parseInt(intResult * 0.2); // INT上昇値
            intResult += intBuff;
            // matResult += intBuff * 2;
            // mdfResult += intBuff * 15;
            let spdBuff = parseInt(spdResult * 0.2); // SPD上昇値
            spdResult += spdBuff;
            let vitBuff = parseInt(vitResult * 0.2); // VIT上昇値
            vitResult += vitBuff;
            // defResult += vitBuff * 2;
            let lukBuff = parseInt(lukResult * 0.2); // LUK上昇値
            lukResult += lukBuff;

            atkElBuff = parseInt((atkResult/*atkTotal*/ + (powResult * 2)) * 0.2); // エル羽のATK上昇量
            atkResult += atkElBuff;
            defElBuff = parseInt((defResult/*defTotal*/ + (vitResult * 2)) * 0.2); // エル羽のDEF上昇量
            defResult += defElBuff;
            matElBuff = parseInt((matResult/*matTotal*/ + (intResult * 2)) * 0.2); // エル羽のMAT上昇量
            matResult += matElBuff;
            let maxIntOrVit = Math.max(intResult, vitResult); // INT or VIT の大きい値を取る
            mdfElBuff = parseInt((mdfResult/*mdfTotal*/ + (maxIntOrVit * 2)) * 0.2); // エル羽のMDF上昇量
            mdfResult += mdfElBuff;
        }
        if (task == "apophis") {
            let lukBuff = parseInt(lukResult * 0.3); // LUK上昇値
            lukResult += lukBuff;
        }
    });

    // 結果の表示
    $('#powResult').text(powResult);
    $('#intResult').text(intResult);
    $('#spdResult').text(spdResult);
    $('#vitResult').text(vitResult);
    $('#lukResult').text(lukResult);
    $('#atkResult').text(atkResult + "(上昇値：" + atkLiquidBuff + ")");
    $('#defResult').text(defResult + "(上昇値：" + defLiquidBuff + ")");
    $('#matResult').text(matResult + "(上昇値：" + matLiquidBuff + ")");
    $('#mdfResult').text(mdfResult + "(上昇値：" + mdfLiquidBuff + ")");
}

const simpleParseCSV = (csv) => {
    return csv.split(/\r\n|\r|\n/).map((row) => row.split(','));
}

function csvImport() {
    let fileInput = $('#import')[0];
    let fileReader = new FileReader();
    fileInput.onchange = () => {
        let file = fileInput.files[0];
        fileReader.readAsText(file);
    };

    fileReader.onload = () => {
        csv = simpleParseCSV(fileReader.result);
        console.log(csv);
        input_id = []
        input_id.push([])
        input_id.push(['', '#powStatus', '#powCard', '#powTotal'])
        input_id.push(['', '#intStatus', '#intCard', '#intTotal'])
        input_id.push(['', '#spdStatus', '#spdCard', '#spdTotal'])
        input_id.push(['', '#vitStatus', '#vitCard', '#vitTotal'])
        input_id.push(['', '#lukStatus', '#lukCard', '#lukTotal'])
        input_id.push(['', '', '', '#atkTotal'])
        input_id.push(['', '', '', '#defTotal'])
        input_id.push(['', '', '', '#matTotal'])
        input_id.push(['', '', '', '#mdfTotal'])
        $.each(input_id, function (i, e) {
            $.each(e, function (j, elem) {
                if (i > 5) {
                    $(elem).val(csv[i][j]);
                } else {
                    $(elem).val(csv[i][j]);
                }
            })
        })

        calculation() // CSVインポート後のタイミングで更新
    }
}

function csvExport() {
    // table からデータを取得
    let d = [];
    $('.status-table tr').each(function (i) {
        let dd = [];
        $(this).find('th').each(function () {
            dd.push($(this).text()); // ラベル
        });
        $(this).find('td').each(function () {
            dd.push($(this).find('input').val()); // 入力値
        });
        d.push(dd);
    });

    // CSV として見やすいようにデータを入れ替え
    let m = [];
    $.each(d, function (i) {
        if (i > 5) {
            let m1 = [];
            m1.push(this[0])
            m1.push("")
            m1.push("")
            m1.push(this[2])
            m.push(m1)
            let m2 = [];
            m2.push(this[1])
            m2.push("")
            m2.push("")
            m2.push(this[3])
            m.push(m2)
        } else {
            m.push(this)
        }

    })
    console.log(m);

    // CSV 出力
    let csv_data = m.map(function (l) { return l.join(',') }).join('\r\n');
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // BOM を用意（文字コードを BOM 付き UTF-8 にする）
    let blob = new Blob([bom, csv_data], { type: "text/csv" }); // データを CSV の BLOB に変換
    $("#export")[0].href = window.URL.createObjectURL(blob);

    delete csv_data; // オブジェクトを削除してメモリを開放
}

function safeEval(val) {
    // 式の評価
    return Function('"use strict";return (' + val + ')')();
}

/**
 * 文字列を加算と減算の式に変換
 */
function safeReplace(str) {
    // 0-9, +, -, 以外を削除
    // 先頭と末尾の記号を削除
    // +, -, が連続している場合は削除
    tmp = str.replace(/[^0-9+-]/g, '').replace(/^[+-]+|[+-]+$/g, '').replace(/[+-][+-]+/g, '')
    // 数字が入力されていない場合は0を返す
    return (tmp.length) ? tmp : 0
}