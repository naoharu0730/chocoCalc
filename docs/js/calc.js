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

        // リキッドの上昇値
        let atkLiquidBuff = 0; // リキッドのATK上昇値
        let defLiquidBuff = 0; // リキッドのDEF上昇値
        let matLiquidBuff = 0; // リキッドのMAT上昇値
        let mdfLiquidBuff = 0; // リキッドのMDF上昇値

        // エル羽の上昇値
        let atkBuffEl = 0; // エル羽のATK上昇値
        let defBuffEl = 0; // エル羽のDEF上昇値
        let matBuffEl = 0; // エル羽のMAT上昇値
        let mdfBuffEl = 0; // エル羽のMDF上昇値

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
                atkLiquidBuff = parseInt( (atkResult - powResult - atkBuffEl) * Math.max(0.1, atkMagni) ); // ATK上昇量
                atkResult += atkLiquidBuff;
            }
            if (task == "defLiquid") {
                let defMagni = (level + vitResult - 100) / 100; // DEF上昇倍率
                defLiquidBuff = parseInt( (defResult - defBuffEl) * Math.max(0.1, defMagni) ); // DEF上昇量
                defResult += defLiquidBuff;
            }
            if (task == "matLiquid") {
                let matMagni = (level + intResult - 100) / 100; // MAT上昇倍率
                matLiquidBuff = parseInt( (matResult - matBuffEl) * Math.max(0.1, matMagni) ); // MAT上昇量
                matResult += matLiquidBuff;
            }
            if (task == "mdfLiquid") {
                let maxIntOrVit = Math.max(intResult, vitResult) // INT or VIT の大きい値を取る
                let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
                mdfLiquidBuff = parseInt( (mdfResult - (intResult * 15) + (maxIntOrVit * 2) - mdfBuffEl) * Math.max(0.1, mdfMagni) ); // MDF上昇量
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

                atkBuffEl = parseInt( (atkResult/*atkStatus*/ + (powResult * 2) ) * 0.2 ); // エル羽のATK上昇量
                atkResult += atkBuffEl;
                defBuffEl = parseInt( (defResult/*defStatus*/ + (vitResult * 2) ) * 0.2 ); // エル羽のDEF上昇量
                defResult += defBuffEl;
                matBuffEl = parseInt( (matResult/*matStatus*/ + (intResult * 2) ) * 0.2 ); // エル羽のMAT上昇量
                matResult += matBuffEl;
                let maxIntOrVit = Math.max(intResult, vitResult); // INT or VIT の大きい値を取る
                mdfBuffEl = parseInt( (mdfResult/*mdfStatus*/ + (maxIntOrVit * 2) ) * 0.2 ); // エル羽のMDF上昇量
                mdfResult += mdfBuffEl;
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

    // 魔獣缶処理の追加
    $('#appendPowCan').on('click', function () {
        $('.process').append('<div name=powCan>魔獣缶A <button class="delete">削除</button> </div>');
    });
    $('#appendIntCan').on('click', function () {
        $('.process').append('<div name=intCan>魔獣缶B <button class="delete">削除</button> </div>');
    });

    // シール処理の追加
    $('#appendPowSeal').on('click', function () {
        $('.process').append('<div name=powSeal>POWシール <button class="delete">削除</button> </div>');
    });
    $('#appendIntSeal').on('click', function () {
        $('.process').append('<div name=intSeal>INTシール <button class="delete">削除</button> </div>');
    }); 
    $('#appendSpdSeal').on('click', function () {
        $('.process').append('<div name=spdSeal>SPDシール <button class="delete">削除</button> </div>');
    }); 
    $('#appendVitSeal').on('click', function () {
        $('.process').append('<div name=vitSeal>VITシール <button class="delete">削除</button> </div>');
    }); 
    $('#appendLukSeal').on('click', function () {
        $('.process').append('<div name=lukSeal>LUKシール <button class="delete">削除</button> </div>');
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
        <button class="delete">削除</button> </div>`)
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

    // スキル処理の追加
    $('#appendBloodScraper').on('click', function () {
        $('.process').append('<div name=bloodScraper>ブラッドスクレイパー  <button class="delete">削除</button> </div>');
    });
    $('#appendElysion').on('click', function () {
        $('.process').append('<div name=elysion>大天使の加護  <button class="delete">削除</button> </div>');
    });
    $('#appendApophis').on('click', function () {
        $('.process').append('<div name=apophis>邪神の呪詛  <button class="delete">削除</button> </div>');
    });

    // 処理項目を削除する
    $(document).on('click', '.delete', function () {
        $(this).parent()[0].remove();
    });
})
