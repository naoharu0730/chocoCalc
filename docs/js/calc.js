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

    // ビタの上昇値
    let bitaBuff = new PISVL(0, 0, 0, 0, 0);
    let allBitaBuff = new PISVL(0, 0, 0, 0, 0);

    // リキッドの上昇値
    let liquidBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // 魔獣缶・シールの上昇値
    let canSealBuff = new PISVL(0, 0, 0, 0, 0);

    // 巻物の上昇値
    let makimonoBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // エル羽の上昇値
    let elBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // 処理
    $(".process div").each(function (i) {
        let task = $(".process div").eq(i);
        let taskName = (task.attr('name'));

        // ビタ処理
        if (taskName == "powBita") {
            // POW上昇による効果のリセット
            result.pow -= bitaBuff.pow;
            result.atk -= bitaBuff.pow * 3;

            bitaBuff.pow = parseInt(powStatus * 0.2); // POW上昇値
            bitaBuff.pow = Math.max(1, bitaBuff.pow); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += bitaBuff.pow;
            result.atk += bitaBuff.pow * 3;
        }
        if (taskName == "intBita") {
            // INT上昇による効果のリセット
            result.int -= bitaBuff.int;
            result.mat -= bitaBuff.int * 2;
            result.mdf -= bitaBuff.int * 15;

            bitaBuff.int = parseInt(intStatus * 0.2); // INT上昇値
            bitaBuff.int = Math.max(1, bitaBuff.int); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += bitaBuff.int;
            result.mat += bitaBuff.int * 2;
            result.mdf += bitaBuff.int * 15;
        }
        if (taskName == "spdBita") {
            // SPD上昇による効果のリセット
            result.spd -= bitaBuff.spd;

            bitaBuff.spd = parseInt(spdStatus * 0.2); // SPD上昇値
            bitaBuff.spd = Math.max(1, bitaBuff.spd); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += bitaBuff.spd;
        }
        if (taskName == "vitBita") {
            // VIT上昇による効果のリセット
            result.vit -= bitaBuff.vit;
            result.def -= bitaBuff.vit * 2;

            bitaBuff.vit = parseInt(vitStatus * 0.2); // VIT上昇値
            bitaBuff.vit = Math.max(1, bitaBuff.vit); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += bitaBuff.vit;
            result.def += bitaBuff.vit * 2;
        }
        if (taskName == "lukBita") {
            // LUK上昇による効果のリセット
            result.luk -= bitaBuff.luk;

            bitaBuff.luk = parseInt(lukStatus * 0.2); // LUK上昇値
            bitaBuff.luk = Math.max(1, bitaBuff.luk); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += bitaBuff.luk;
        }
        if (taskName == "allBita") {
            resetPISVLBuff(allBitaBuff, result);
            allBitaBuff.pow = parseInt(powStatus * 0.1); // POW上昇値
            allBitaBuff.pow = Math.max(1, allBitaBuff.pow); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += allBitaBuff.pow;
            result.atk += allBitaBuff.pow * 3;
            allBitaBuff.int = parseInt(intStatus * 0.1); // INT上昇値
            allBitaBuff.int = Math.max(1, allBitaBuff.int); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += allBitaBuff.int;
            result.mat += allBitaBuff.int * 2;
            result.mdf += allBitaBuff.int * 15;
            allBitaBuff.spd = parseInt(spdStatus * 0.1); // SPD上昇値
            allBitaBuff.spd = Math.max(1, allBitaBuff.spd); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += allBitaBuff.spd;
            allBitaBuff.vit = parseInt(vitStatus * 0.1); // VIT上昇値
            allBitaBuff.vit = Math.max(1, allBitaBuff.vit); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += allBitaBuff.vit;
            result.def += allBitaBuff.vit * 2;
            allBitaBuff.luk = parseInt(lukStatus * 0.1); // LUK上昇値
            allBitaBuff.luk = Math.max(1, allBitaBuff.luk); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += allBitaBuff.luk;
        }

        // 魔獣缶処理
        if (taskName == "powCan") {
            resetPISVLBuff(canSealBuff, result);
            canSealBuff.pow = 10; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = -10; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "intCan") {
            resetPISVLBuff(canSealBuff, result);
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
            resetPISVLBuff(canSealBuff, result);
            canSealBuff.pow = 15; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = -15; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "intSeal") {
            resetPISVLBuff(canSealBuff, result);
            canSealBuff.pow = -15; // POW上昇値
            result.pow += canSealBuff.pow;
            result.atk += canSealBuff.pow * 3;
            canSealBuff.int = 15; // INT上昇値
            result.int += canSealBuff.int;
            result.mat += canSealBuff.int * 2;
            result.mdf += canSealBuff.int * 15;
        }
        if (taskName == "spdSeal") {
            resetPISVLBuff(canSealBuff, result);
            canSealBuff.spd = 15; // SPD上昇値
            result.spd += canSealBuff.spd;
            canSealBuff.luk = -15; // LUK上昇値
            result.luk += canSealBuff.luk;
        }
        if (taskName == "vitSeal") {
            resetPISVLBuff(canSealBuff, result);
            canSealBuff.spd = -15; // SPD上昇値
            result.spd += canSealBuff.spd;
            canSealBuff.vit = 15; // VIT上昇値
            result.vit += canSealBuff.vit;
            result.def += canSealBuff.vit * 2;
        }
        if (taskName == "lukSeal") {
            resetPISVLBuff(canSealBuff, result);
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
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.pow = Number(task.children().val()); // POW上昇値
            result.pow += makimonoBuff.pow;
            result.atk += makimonoBuff.pow * 3;
        }
        if (taskName == "intMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.int = Number(task.children().val()); // INT上昇値
            result.int += makimonoBuff.int;
            result.mat += makimonoBuff.int * 2;
            result.mdf += makimonoBuff.int * 15;
        }
        if (taskName == "spdMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.spd = Number(task.children().val()); // SPD上昇値
            result.spd += makimonoBuff.spd;
        }
        if (taskName == "vitMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.vit = Number(task.children().val()); // VIT上昇値
            result.vit += makimonoBuff.vit;
            result.def += makimonoBuff.vit * 2;
        }
        if (taskName == "lukMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.luk = Number(task.children().val()); // LUK上昇値
            result.luk += makimonoBuff.luk;
        }
        if (taskName == "atkMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.atk = Number(task.children().val()); // ATK上昇値
            result.atk += makimonoBuff.atk;
        }
        if (taskName == "defMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.def = Number(task.children().val()); // DEF上昇値
            result.def += makimonoBuff.def;
        }
        if (taskName == "matMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.mat = Number(task.children().val()); // MAT上昇値
            result.mat += makimonoBuff.mat;
        }
        if (taskName == "mdfMakimono") {
            resetMakimonoBuff(makimonoBuff, result);
            makimonoBuff.mdf = Number(task.children().val()); // MDF上昇値
            result.mdf += makimonoBuff.mdf;
        }

        // リキッド処理
        if (taskName == "powLiquid") {
            // ATK上昇による効果のリセット
            result.atk -= liquidBuff.atk;

            let atkMagni = (level + result.pow - 100) / 100; // ATK上昇倍率
            liquidBuff.atk = parseInt((result.atk - result.pow - elBuff.atk) * Math.max(0.1, atkMagni)); // ATK上昇量
            result.atk += liquidBuff.atk;
        }
        if (taskName == "defLiquid") {
            // DEF上昇による効果のリセット
            result.def -= liquidBuff.def;

            let defMagni = (level + result.vit - 100) / 100; // DEF上昇倍率
            liquidBuff.def = parseInt((result.def - elBuff.def) * Math.max(0.1, defMagni)); // DEF上昇量
            result.def += liquidBuff.def;
        }
        if (taskName == "matLiquid") {
            // MAT上昇による効果のリセット
            result.mat -= liquidBuff.mat;

            let matMagni = (level + result.int - 100) / 100; // MAT上昇倍率
            liquidBuff.mat = parseInt((result.mat - elBuff.mat) * Math.max(0.1, matMagni)); // MAT上昇量
            result.mat += liquidBuff.mat;
        }
        if (taskName == "mdfLiquid") {
            // MDf上昇による効果のリセット
            result.mdf -= liquidBuff.mdf;

            let maxIntOrVit = Math.max(result.int, result.vit) // INT or VIT の大きい値を取る
            let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
            liquidBuff.mdf = parseInt((result.mdf - (result.int * 15) + (maxIntOrVit * 2) - elBuff.mdf) * Math.max(0.1, mdfMagni)); // MDF上昇量
            result.mdf += liquidBuff.mdf;
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

            elBuff.atk = parseInt((atkTotal + makimonoBuff.atk - (powTotal * 3) + (result.pow * 2)) * 0.2); // エル羽のATK上昇量
            result.atk += elBuff.atk;
            elBuff.def = parseInt((defTotal + makimonoBuff.def - (vitTotal * 2) + (result.vit * 2)) * 0.2); // エル羽のDEF上昇量
            result.def += elBuff.def;
            elBuff.mat = parseInt((matTotal + makimonoBuff.mat - (intTotal * 2) + (result.int * 2)) * 0.2); // エル羽のMAT上昇量
            result.mat += elBuff.mat;
            let maxIntOrVit = Math.max(result.int, result.vit); // INT or VIT の大きい値を取る
            elBuff.mdf = parseInt((mdfTotal + makimonoBuff.mdf - (intTotal * 15) + (maxIntOrVit * 2)) * 0.2); // エル羽のMDF上昇量
            result.mdf += elBuff.mdf;
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
    $('#atkResult').text(result.atk + "(上昇値：" + liquidBuff.atk + ")");
    $('#defResult').text(result.def + "(上昇値：" + liquidBuff.def + ")");
    $('#matResult').text(result.mat + "(上昇値：" + liquidBuff.mat + ")");
    $('#mdfResult').text(result.mdf + "(上昇値：" + liquidBuff.mdf + ")");
}

/**
 * PPW/INT/SPD/VIT/LUKの上昇値をリセットする
 * 魔獣缶・シールや、ビタなどのリセットに使用する
 */
function resetPISVLBuff(PISVLBuff, result) {
    // POW上昇による効果のリセット
    result.pow -= PISVLBuff.pow;
    result.atk -= PISVLBuff.pow * 3;
    // INT上昇による効果のリセット
    result.int -= PISVLBuff.int;
    result.mat -= PISVLBuff.int * 2;
    result.mdf -= PISVLBuff.int * 15;
    // SPD上昇による効果のリセット
    result.spd -= PISVLBuff.spd;
    // VIT上昇による効果のリセット
    result.vit -= PISVLBuff.vit;
    result.def -= PISVLBuff.vit * 2;
    // LUK上昇による効果のリセット
    result.luk -= PISVLBuff.luk;

    // 上昇値のリセット
    PISVLBuff.reset();
}

/**
 * 巻物の上昇値をリセットする
 */
 function resetMakimonoBuff(makimonoBuff, result) {
    // POW上昇による効果のリセット
    result.pow -= makimonoBuff.pow;
    result.atk -= makimonoBuff.pow * 3;
    // INT上昇による効果のリセット
    result.int -= makimonoBuff.int;
    result.mat -= makimonoBuff.int * 2;
    result.mdf -= makimonoBuff.int * 15;
    // SPD上昇による効果のリセット
    result.spd -= makimonoBuff.spd;
    // VIT上昇による効果のリセット
    result.vit -= makimonoBuff.vit;
    result.def -= makimonoBuff.vit * 2;
    // LUK上昇による効果のリセット
    result.luk -= makimonoBuff.luk;

    // ATK上昇による効果のリセット
    result.atk -= makimonoBuff.atk;
    // DEF上昇による効果のリセット
    result.def -= makimonoBuff.def;
    // MAT上昇による効果のリセット
    result.mat -= makimonoBuff.mat;
    // MDf上昇による効果のリセット
    result.mdf -= makimonoBuff.mdf;

    // 上昇値のリセット
    makimonoBuff.reset();
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