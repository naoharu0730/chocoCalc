// 計算の処理系群

class PISVL{
    // POW、INT、SPD、VIT、LUK を管理するクラス
    constructor(pow=0, int=0, spd=0, vit=0, luk=0) {
        this.pow = pow;
        this.int = int;
        this.spd = spd;
        this.vit = vit;
        this.luk = luk;
    }
    get pow() {
        return this._pow;
    }
    set pow(value) {
        this._pow = value;
    }
    get int() {
        return this._int;
    }
    set int(value) {
        this._int = value;
    }
    get spd() {
        return this._spd;
    }
    set spd(value) {
        this._spd = value;
    }
    get vit() {
        return this._vit;
    }
    set vit(value) {
        this._vit = value;
    }
    get luk() {
        return this._luk;
    }
    set luk(value) {
        this._luk = value;
    }
    reset() {
        this._pow = 0;
        this._int = 0;
        this._spd = 0;
        this._vit = 0;
        this._luk = 0;
    }
}

class PISVLADMaMd{
    // POW、INT、SPD、VIT、LUK、ATK、DEF、MAT、MDF を管理するクラス
    constructor(pow=0, int=0, spd=0, vit=0, luk=0, atk=0, def=0, mat=0, mdf=0) {
        this.pow = pow;
        this.int = int;
        this.spd = spd;
        this.vit = vit;
        this.luk = luk;
        this.atk = atk;
        this.def = def;
        this.mat = mat;
        this.mdf = mdf;
    }
    get pow() {
        return this._pow;
    }
    set pow(value) {
        this._pow = value;
    }
    get int() {
        return this._int;
    }
    set int(value) {
        this._int = value;
    }
    get spd() {
        return this._spd;
    }
    set spd(value) {
        this._spd = value;
    }
    get vit() {
        return this._vit;
    }
    set vit(value) {
        this._vit = value;
    }
    get luk() {
        return this._luk;
    }
    set luk(value) {
        this._luk = value;
    }
    get atk() {
        return this._atk;
    }
    set atk(value) {
        this._atk = value;
    }
    get def() {
        return this._def;
    }
    set def(value) {
        this._def = value;
    }
    get mat() {
        return this._mat;
    }
    set mat(value) {
        this._mat = value;
    }
    get mdf() {
        return this._mdf;
    }
    set mdf(value) {
        this._mdf = value;
    }
    reset() {
        this._pow = 0;
        this._int = 0;
        this._spd = 0;
        this._vit = 0;
        this._luk = 0;
        this._atk = 0;
        this._def = 0;
        this._mat = 0;
        this._mdf = 0;
    }
}

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
    let result = new PISVLADMaMd(powTotal, intTotal, spdTotal, vitTotal, lukTotal, atkTotal, defTotal, matTotal, mdfTotal);

    // リキッドの上昇値
    let atkLiquidBuff = 0; // リキッドのATK上昇値
    let defLiquidBuff = 0; // リキッドのDEF上昇値
    let matLiquidBuff = 0; // リキッドのMAT上昇値
    let mdfLiquidBuff = 0; // リキッドのMDF上昇値

    // 魔獣缶・シールの上昇値
    let canSealBuff = new PISVL();

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
            result.pow += powBuff;
            result.atk += powBuff * 3;
        }
        if (taskName == "intBita") {
            let intBuff = parseInt(intStatus * 0.2); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += intBuff;
            result.mat += intBuff * 2;
            result.mdf += intBuff * 15;
        }
        if (taskName == "spdBita") {
            let spdBuff = parseInt(spdStatus * 0.2); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += spdBuff;
        }
        if (taskName == "vitBita") {
            let vitBuff = parseInt(vitStatus * 0.2); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += vitBuff;
            result.def += vitBuff * 2;
        }
        if (taskName == "lukBita") {
            let lukBuff = parseInt(lukStatus * 0.2); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += lukBuff;
        }
        if (taskName == "allBita") {
            let powBuff = parseInt(powStatus * 0.1); // POW上昇値
            powBuff = Math.max(1, powBuff); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += powBuff;
            result.atk += powBuff * 3;
            let intBuff = parseInt(intStatus * 0.1); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += intBuff;
            result.mat += intBuff * 2;
            result.mdf += intBuff * 15;
            let spdBuff = parseInt(spdStatus * 0.1); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += spdBuff;
            let vitBuff = parseInt(vitStatus * 0.1); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += vitBuff;
            result.def += vitBuff * 2;
            let lukBuff = parseInt(lukStatus * 0.1); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += lukBuff;
        }

        // 魔獣缶処理
        if (taskName == "powCan") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.pow = 10; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = -10; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "intCan") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.int = 10; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
            canSealBuff.vit = -10; // VIT上昇値
            result.vit += canSealBuff.vit;
            result.def += canSealBuff.vit * 2;
        }

        // シール処理
        if (taskName == "powSeal") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.pow = 15; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = -15; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "intSeal") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.pow = -15; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = 15; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "spdSeal") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.spd = 15; // SPD上昇値
            result.spd += canSealBuff.spd;
            canSealBuff.luk = -15; // LUK上昇値
            result.luk += canSealBuff.luk;
        }
        if (taskName == "vitSeal") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.spd = -15; // SPD上昇値
            result.spd += canSealBuff.spd;
            canSealBuff.vit = 15; // VIT上昇値
            result.vit += canSealBuff.vit;
            result.def += canSealBuff.vit * 2;
        }
        if (taskName == "lukSeal") {
            resetCanSealBuff(canSealBuff, result);
            canSealBuff.vit = -15; // VIT上昇値
            result.vit += canSealBuff.vit;
            result.def += canSealBuff.vit * 2;
            canSealBuff.luk = 15; // LUK上昇値
            result.luk += canSealBuff.luk;
        }

        // ブレイク処理
        if (taskName == "break") {
            let powBuff = Number(task.find("input[name=powCard]").val()); // POW上昇値
            result.pow += powBuff;
            result.atk += powBuff * 3;
            let intBuff = Number(task.find("input[name=intCard]").val()); // INT上昇値
            result.int += intBuff;
            result.mat += intBuff * 2;
            result.mdf += intBuff * 15;
            let spdBuff = Number(task.find("input[name=spdCard]").val()); // SPD上昇値
            result.spd += spdBuff;
            let vitBuff = Number(task.find("input[name=vitCard]").val()); // VIT上昇値
            result.vit += vitBuff;
            result.def += vitBuff * 2;
            let lukBuff = Number(task.find("input[name=lukCard]").val()); // LUK上昇値
            result.luk += lukBuff;
        }

        // 巻物処理
        if (taskName == "powMakimono") {
            let powBuff = Number(task.children().val()); // POW上昇値
            result.pow += powBuff;
            result.atk += powBuff * 3;
        }
        if (taskName == "intMakimono") {
            let intBuff = Number(task.children().val()); // INT上昇値
            result.int += intBuff;
            result.mat += intBuff * 2;
            result.mdf += intBuff * 15;
        }
        if (taskName == "spdMakimono") {
            let spdBuff = Number(task.children().val()); // SPD上昇値
            result.spd += spdBuff;
        }
        if (taskName == "vitMakimono") {
            let vitBuff = Number(task.children().val()); // VIT上昇値
            result.vit += vitBuff;
            result.def += vitBuff * 2;
        }
        if (taskName == "lukMakimono") {
            let lukBuff = Number(task.children().val()); // LUK上昇値
            result.luk += lukBuff;
        }
        if (taskName == "atkMakimono") {
            let atkBuff = Number(task.children().val()); // ATK上昇値
            result.atk += atkBuff;
        }
        if (taskName == "defMakimono") {
            let atkBuff = Number(task.children().val()); // DEF上昇値
            result.def += atkBuff;
        }
        if (taskName == "matMakimono") {
            let atkBuff = Number(task.children().val()); // MAT上昇値
            result.mat += atkBuff;
        }
        if (taskName == "mdfMakimono") {
            let atkBuff = Number(task.children().val()); // MDF上昇値
            result.mdf += atkBuff;
        }

        // リキッド処理
        if (taskName == "powLiquid") {
            let atkMagni = (level + result.pow - 100) / 100; // ATK上昇倍率
            atkLiquidBuff = parseInt((result.atk - result.pow - atkElBuff) * Math.max(0.1, atkMagni)); // ATK上昇量
            result.atk += atkLiquidBuff;
        }
        if (taskName == "defLiquid") {
            let defMagni = (level + result.vit - 100) / 100; // DEF上昇倍率
            defLiquidBuff = parseInt((result.def - defElBuff) * Math.max(0.1, defMagni)); // DEF上昇量
            result.def += defLiquidBuff;
        }
        if (taskName == "matLiquid") {
            let matMagni = (level + result.int - 100) / 100; // MAT上昇倍率
            matLiquidBuff = parseInt((result.mat - matElBuff) * Math.max(0.1, matMagni)); // MAT上昇量
            result.mat += matLiquidBuff;
        }
        if (taskName == "mdfLiquid") {
            let maxIntOrVit = Math.max(result.int, result.vit) // INT or VIT の大きい値を取る
            let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
            mdfLiquidBuff = parseInt((result.mdf - (result.int * 15) + (maxIntOrVit * 2) - mdfElBuff) * Math.max(0.1, mdfMagni)); // MDF上昇量
            result.mdf += mdfLiquidBuff;
        }

        // スキル処理
        if (taskName == "bloodScraper") {
            let powBuff = 9; // POW上昇値
            result.pow += powBuff;
            result.atk += powBuff * 3;
        }
        if (taskName == "elysion") {
            let powBuff = parseInt(result.pow * 0.2); // POW上昇値
            powBuff = Math.max(1, powBuff); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += powBuff;
            result.atk += powBuff * 3;
            let intBuff = parseInt(result.int * 0.2); // INT上昇値
            intBuff = Math.max(1, intBuff); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += intBuff;
            result.mat += intBuff * 2;
            result.mdf += intBuff * 15;
            let spdBuff = parseInt(result.spd * 0.2); // SPD上昇値
            spdBuff = Math.max(1, spdBuff); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += spdBuff;
            let vitBuff = parseInt(result.vit * 0.2); // VIT上昇値
            vitBuff = Math.max(1, vitBuff); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += vitBuff;
            result.def += vitBuff * 2;
            let lukBuff = parseInt(result.luk * 0.2); // LUK上昇値
            lukBuff = Math.max(1, lukBuff); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += lukBuff;

            atkElBuff = parseInt((atkTotal - (powTotal * 3) + (result.pow * 2)) * 0.2); // エル羽のATK上昇量
            result.atk += atkElBuff;
            defElBuff = parseInt((defTotal - (vitTotal * 2) + (result.vit * 2)) * 0.2); // エル羽のDEF上昇量
            result.def += defElBuff;
            matElBuff = parseInt((matTotal - (intTotal * 2) + (result.int * 2)) * 0.2); // エル羽のMAT上昇量
            result.mat += matElBuff;
            let maxIntOrVit = Math.max(result.int, result.vit); // INT or VIT の大きい値を取る
            mdfElBuff = parseInt((mdfTotal - (intTotal * 15) + (maxIntOrVit * 2)) * 0.2); // エル羽のMDF上昇量
            result.mdf += mdfElBuff;
        }
        if (taskName == "apophis") {
            let lukBuff = parseInt(result.luk * 0.3); // LUK上昇値
            result.luk += lukBuff;
        }
    });

    // 結果の表示
    $('#powResult').text(result.pow);
    $('#intResult').text(result.int);
    $('#spdResult').text(result.spd);
    $('#vitResult').text(result.vit);
    $('#lukResult').text(result.luk);
    $('#atkResult').text(result.atk + "(上昇値：" + atkLiquidBuff + ")");
    $('#defResult').text(result.def + "(上昇値：" + defLiquidBuff + ")");
    $('#matResult').text(result.mat + "(上昇値：" + matLiquidBuff + ")");
    $('#mdfResult').text(result.mdf + "(上昇値：" + mdfLiquidBuff + ")");
}

/**
 * 魔獣缶・シールの上昇値をリセットする
 */
function resetCanSealBuff(canSealBuff, result) {
    // POW上昇による効果のリセット
    result.pow -= canSealBuff.pow;
    result.atk -= canSealBuff.pow * 3;
    // INT上昇による効果のリセット
    result.int -= canSealBuff.int;
    result.mat -= canSealBuff.int * 2;
    result.mdf -= canSealBuff.int * 15;
    // SPD上昇による効果のリセット
    result.spd -= canSealBuff.spd;
    // VIT上昇による効果のリセット
    result.vit -= canSealBuff.vit;
    result.def -= canSealBuff.vit * 2;
    // LUK上昇による効果のリセット
    result.luk -= canSealBuff.luk;

    // 上昇値のリセット
    canSealBuff.reset();
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