// 計算の処理系群

/**
 * 画面の入力をもとに、計算を行う
 */
function calculation() {
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
        let task = $(".process div").eq(i);
        let taskName = (task.attr('name'));

        // ビタ処理
        if (taskName == "powBita") {
            let powBuff = parseInt(powStatus * 0.2); // POW上昇値
            powBuff = Math.max(1, powBuff); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (taskName == "intBita") {
            let intBuff = parseInt(intStatus * 0.2); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (taskName == "spdBita") {
            let spdBuff = parseInt(spdStatus * 0.2); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            spdResult += spdBuff;
        }
        if (taskName == "vitBita") {
            let vitBuff = parseInt(vitStatus * 0.2); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (taskName == "lukBita") {
            let lukBuff = parseInt(lukStatus * 0.2); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            lukResult += lukBuff;
        }
        if (taskName == "allBita") {
            let powBuff = parseInt(powStatus * 0.1); // POW上昇値
            powBuff = Math.max(1, powBuff); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = parseInt(intStatus * 0.1); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let spdBuff = parseInt(spdStatus * 0.1); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            spdResult += spdBuff;
            let vitBuff = parseInt(vitStatus * 0.1); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = parseInt(lukStatus * 0.1); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            lukResult += lukBuff;
        }

        // 魔獣缶処理
        if (taskName == "powCan") {
            let powBuff = 10; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = -10; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (taskName == "intCan") {
            let intBuff = 10; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let vitBuff = -10; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }

        // シール処理
        if (taskName == "powSeal") {
            let powBuff = 15; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = -15; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (taskName == "intSeal") {
            let powBuff = -15; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = 15; // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (taskName == "spdSeal") {
            let spdBuff = 15; // SPD上昇値
            spdResult += spdBuff;
            let lukBuff = -15; // LUK上昇値
            lukResult += lukBuff;
        }
        if (taskName == "vitSeal") {
            let spdBuff = -15; // SPD上昇値
            spdResult += spdBuff;
            let vitBuff = 15; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (taskName == "lukSeal") {
            let vitBuff = -15; // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = 15; // LUK上昇値
            lukResult += lukBuff;
        }

        // ブレイク処理
        if (taskName == "break") {
            let powBuff = Number(task.find("input[name=powCard]").val()); // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = Number(task.find("input[name=intCard]").val()); // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let spdBuff = Number(task.find("input[name=spdCard]").val()); // SPD上昇値
            spdResult += spdBuff;
            let vitBuff = Number(task.find("input[name=vitCard]").val()); // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = Number(task.find("input[name=lukCard]").val()); // LUK上昇値
            lukResult += lukBuff;
        }

        // 巻物処理
        if (taskName == "powMakimono") {
            let powBuff = Number(task.children().val()); // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (taskName == "intMakimono") {
            let intBuff = Number(task.children().val()); // INT上昇値
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
        }
        if (taskName == "spdMakimono") {
            let spdBuff = Number(task.children().val()); // SPD上昇値
            spdResult += spdBuff;
        }
        if (taskName == "vitMakimono") {
            let vitBuff = Number(task.children().val()); // VIT上昇値
            vitResult += vitBuff;
            defResult += vitBuff * 2;
        }
        if (taskName == "lukMakimono") {
            let lukBuff = Number(task.children().val()); // LUK上昇値
            lukResult += lukBuff;
        }
        if (taskName == "atkMakimono") {
            let atkBuff = Number(task.children().val()); // ATK上昇値
            atkResult += atkBuff;
        }
        if (taskName == "defMakimono") {
            let atkBuff = Number(task.children().val()); // DEF上昇値
            defResult += atkBuff;
        }
        if (taskName == "matMakimono") {
            let atkBuff = Number(task.children().val()); // MAT上昇値
            matResult += atkBuff;
        }
        if (taskName == "mdfMakimono") {
            let atkBuff = Number(task.children().val()); // MDF上昇値
            mdfResult += atkBuff;
        }

        // リキッド処理
        if (taskName == "powLiquid") {
            let atkMagni = (level + powResult - 100) / 100; // ATK上昇倍率
            atkLiquidBuff = parseInt((atkResult - powResult - atkElBuff) * Math.max(0.1, atkMagni)); // ATK上昇量
            atkResult += atkLiquidBuff;
        }
        if (taskName == "defLiquid") {
            let defMagni = (level + vitResult - 100) / 100; // DEF上昇倍率
            defLiquidBuff = parseInt((defResult - defElBuff) * Math.max(0.1, defMagni)); // DEF上昇量
            defResult += defLiquidBuff;
        }
        if (taskName == "matLiquid") {
            let matMagni = (level + intResult - 100) / 100; // MAT上昇倍率
            matLiquidBuff = parseInt((matResult - matElBuff) * Math.max(0.1, matMagni)); // MAT上昇量
            matResult += matLiquidBuff;
        }
        if (taskName == "mdfLiquid") {
            let maxIntOrVit = Math.max(intResult, vitResult) // INT or VIT の大きい値を取る
            let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
            mdfLiquidBuff = parseInt((mdfResult - (intResult * 15) + (maxIntOrVit * 2) - mdfElBuff) * Math.max(0.1, mdfMagni)); // MDF上昇量
            mdfResult += mdfLiquidBuff;
        }

        // スキル処理
        if (taskName == "bloodScraper") {
            let powBuff = 9; // POW上昇値
            powResult += powBuff;
            atkResult += powBuff * 3;
        }
        if (taskName == "elysion") {
            let powBuff = parseInt(powResult * 0.2); // POW上昇値
            powBuff = Math.max(1, powBuff); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            powResult += powBuff;
            atkResult += powBuff * 3;
            let intBuff = parseInt(intResult * 0.2); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            intResult += intBuff;
            matResult += intBuff * 2;
            mdfResult += intBuff * 15;
            let spdBuff = parseInt(spdResult * 0.2); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            spdResult += spdBuff;
            let vitBuff = parseInt(vitResult * 0.2); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            vitResult += vitBuff;
            defResult += vitBuff * 2;
            let lukBuff = parseInt(lukResult * 0.2); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            lukResult += lukBuff;

            atkElBuff = parseInt((atkTotal - (powTotal * 3) + (powResult * 2)) * 0.2); // エル羽のATK上昇量
            atkResult += atkElBuff;
            defElBuff = parseInt((defTotal - (vitTotal * 2) + (vitResult * 2)) * 0.2); // エル羽のDEF上昇量
            defResult += defElBuff;
            matElBuff = parseInt((matTotal - (intTotal * 2) + (intResult * 2)) * 0.2); // エル羽のMAT上昇量
            matResult += matElBuff;
            let maxIntOrVit = Math.max(intResult, vitResult); // INT or VIT の大きい値を取る
            mdfElBuff = parseInt((mdfTotal - (intTotal * 15) + (maxIntOrVit * 2)) * 0.2); // エル羽のMDF上昇量
            mdfResult += mdfElBuff;
        }
        if (taskName == "apophis") {
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

/**
 * 文字列をJS式として評価する
 * @param {String} val 文字列 
 * @returns {*} JS式の評価結果
 */
function safeEval(val) {
    return Function('"use strict";return (' + val + ')')();
}

/**
 * 文字列を加算と減算の式にフィルタリングする
 * [0-9+-]以外を削除し、先頭と末尾の[+-]を削除し、連続した[+-]を削除する
 * @param {String} str 
 * @returns {String} フィルタリングされた式（フィルタリングして文字が残らない場合、0）
 */
function safeReplace(str) {
    tmp = str.replace(/[^0-9+-]/g, '').replace(/^[+-]+|[+-]+$/g, '').replace(/[+-][+-]+/g, '')
    return (tmp.length) ? tmp : 0
}