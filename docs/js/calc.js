// 計算の処理系群

class PISVL {
    // POW、INT、SPD、VIT、LUK を管理するクラス
    constructor(pow = 0, int = 0, spd = 0, vit = 0, luk = 0) {
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

class PISVLADMaMd {
    // POW、INT、SPD、VIT、LUK、ATK、DEF、MAT、MDF を管理するクラス
    constructor(pow = 0, int = 0, spd = 0, vit = 0, luk = 0, atk = 0, def = 0, mat = 0, mdf = 0) {
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

class PISVLHpSpADMaMd {
    // POW、INT、SPD、VIT、LUK、HP、SP。ATK、DEF、MAT、MDF を管理するクラス
    constructor(pow = 0, int = 0, spd = 0, vit = 0, luk = 0, hp = 0, sp = 0, atk = 0, def = 0, mat = 0, mdf = 0) {
        this.pow = pow;
        this.int = int;
        this.spd = spd;
        this.vit = vit;
        this.luk = luk;
        this.hp = hp;
        this.sp = sp;
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
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }
    get sp() {
        return this._sp;
    }
    set sp(value) {
        this._sp = value;
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
        this._hp = 0;
        this._sp = 0;
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
    const powTotal = Number(safeEval(safeReplace($('#powTotal').val())));
    const intTotal = Number(safeEval(safeReplace($('#intTotal').val())));
    const spdTotal = Number(safeEval(safeReplace($('#spdTotal').val())));
    const vitTotal = Number(safeEval(safeReplace($('#vitTotal').val())));
    const lukTotal = Number(safeEval(safeReplace($('#lukTotal').val())));
    const hpTotal = Number($('#hpTotal').val());
    const spTotal = Number($('#spTotal').val());
    const atkTotal = Number($('#atkTotal').val());
    const defTotal = Number($('#defTotal').val());
    const matTotal = Number($('#matTotal').val());
    const mdfTotal = Number($('#mdfTotal').val());

    // ステ振り
    let status = new PISVL(powStatus, intStatus, spdStatus, vitStatus, lukStatus);

    // ステ合計
    let total = new PISVLHpSpADMaMd(powTotal, intTotal, spdTotal, vitTotal, lukTotal, hpTotal, spTotal, atkTotal, defTotal, matTotal, mdfTotal);

    // 結果の初期化
    let result = new PISVLHpSpADMaMd(powTotal, intTotal, spdTotal, vitTotal, lukTotal, hpTotal, spTotal, atkTotal, defTotal, matTotal, mdfTotal);

    // ビタの上昇値
    let bitaBuff = new PISVL(0, 0, 0, 0, 0);
    let allBitaBuff = new PISVL(0, 0, 0, 0, 0);

    // リキッドの上昇値
    let liquidBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // ブレイクの上昇値
    let breakBuff = new PISVL(0, 0, 0, 0, 0);

    // 魔獣缶・シールの上昇値
    let canSealBuff = new PISVL(0, 0, 0, 0, 0);

    // 巻物の上昇値
    let makimonoBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // ブラッドスクレイパーの上昇値
    let bloodScraperBuff = new PISVL(0, 0, 0, 0, 0);

    // エル羽の上昇値
    let elysionBuff = new PISVLADMaMd(0, 0, 0, 0, 0, 0, 0, 0, 0);

    // フィス羽の上昇値
    let apophisBuff = new PISVL(0, 0, 0, 0, 0);

    // 処理
    $(".process div").each(function (i) {
        let task = $(".process div").eq(i);
        let taskName = (task.attr('name'));

        // ビタ処理
        if (taskName == "powBita") {
            // POW上昇による効果のリセット
            result.pow -= bitaBuff.pow;
            result.atk -= bitaBuff.pow * 3;

            bitaBuff.pow = parseInt(status.pow * 0.2); // POW上昇値
            bitaBuff.pow = Math.max(1, bitaBuff.pow); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += bitaBuff.pow;
            result.atk += bitaBuff.pow * 3;
        }
        if (taskName == "intBita") {
            // INT上昇による効果のリセット
            result.int -= bitaBuff.int;
            result.mat -= bitaBuff.int * 2;
            result.mdf -= bitaBuff.int * 15;

            bitaBuff.int = parseInt(status.int * 0.2); // INT上昇値
            bitaBuff.int = Math.max(1, bitaBuff.int); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += bitaBuff.int;
            result.mat += bitaBuff.int * 2;
            result.mdf += bitaBuff.int * 15;
        }
        if (taskName == "spdBita") {
            // SPD上昇による効果のリセット
            result.spd -= bitaBuff.spd;

            bitaBuff.spd = parseInt(status.spd * 0.2); // SPD上昇値
            bitaBuff.spd = Math.max(1, bitaBuff.spd); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += bitaBuff.spd;
        }
        if (taskName == "vitBita") {
            // VIT上昇による効果のリセット
            result.vit -= bitaBuff.vit;
            result.def -= bitaBuff.vit * 2;

            bitaBuff.vit = parseInt(status.vit * 0.2); // VIT上昇値
            bitaBuff.vit = Math.max(1, bitaBuff.vit); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += bitaBuff.vit;
            result.def += bitaBuff.vit * 2;
        }
        if (taskName == "lukBita") {
            // LUK上昇による効果のリセット
            result.luk -= bitaBuff.luk;

            bitaBuff.luk = parseInt(status.luk * 0.2); // LUK上昇値
            bitaBuff.luk = Math.max(1, bitaBuff.luk); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += bitaBuff.luk;
        }
        if (taskName == "allBita") {
            resetPISVLBuff(allBitaBuff, result);
            allBitaBuff.pow = parseInt(status.pow * 0.1); // POW上昇値
            allBitaBuff.pow = Math.max(1, allBitaBuff.pow); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += allBitaBuff.pow;
            result.atk += allBitaBuff.pow * 3;
            allBitaBuff.int = parseInt(status.int * 0.1); // INT上昇値
            allBitaBuff.int = Math.max(1, allBitaBuff.int); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += allBitaBuff.int;
            result.mat += allBitaBuff.int * 2;
            result.mdf += allBitaBuff.int * 15;
            allBitaBuff.spd = parseInt(status.spd * 0.1); // SPD上昇値
            allBitaBuff.spd = Math.max(1, allBitaBuff.spd); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += allBitaBuff.spd;
            allBitaBuff.vit = parseInt(status.vit * 0.1); // VIT上昇値
            allBitaBuff.vit = Math.max(1, allBitaBuff.vit); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += allBitaBuff.vit;
            result.def += allBitaBuff.vit * 2;
            allBitaBuff.luk = parseInt(status.luk * 0.1); // LUK上昇値
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
            resetPISVLBuff(breakBuff, result);
            breakBuff.pow = Number(task.find("input[name=powCard]").val()); // POW上昇値
            result.pow += breakBuff.pow;
            result.atk += breakBuff.pow * 3;
            breakBuff.int = Number(task.find("input[name=intCard]").val()); // INT上昇値
            result.int += breakBuff.int;
            result.mat += breakBuff.int * 2;
            result.mdf += breakBuff.int * 15;
            breakBuff.spd = Number(task.find("input[name=spdCard]").val()); // SPD上昇値
            result.spd += breakBuff.spd;
            breakBuff.vit = Number(task.find("input[name=vitCard]").val()); // VIT上昇値
            result.vit += breakBuff.vit;
            result.def += breakBuff.vit * 2;
            breakBuff.luk = Number(task.find("input[name=lukCard]").val()); // LUK上昇値
            result.luk += breakBuff.luk;
        }

        // 巻物処理
        if (taskName == "powMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.pow = Number(task.children().val()); // POW上昇値
            result.pow += makimonoBuff.pow;
            result.atk += makimonoBuff.pow * 3;
        }
        if (taskName == "intMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.int = Number(task.children().val()); // INT上昇値
            result.int += makimonoBuff.int;
            result.mat += makimonoBuff.int * 2;
            result.mdf += makimonoBuff.int * 15;
        }
        if (taskName == "spdMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.spd = Number(task.children().val()); // SPD上昇値
            result.spd += makimonoBuff.spd;
        }
        if (taskName == "vitMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.vit = Number(task.children().val()); // VIT上昇値
            result.vit += makimonoBuff.vit;
            result.def += makimonoBuff.vit * 2;
        }
        if (taskName == "lukMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.luk = Number(task.children().val()); // LUK上昇値
            result.luk += makimonoBuff.luk;
        }
        if (taskName == "atkMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.atk = Number(task.children().val()); // ATK上昇値
            result.atk += makimonoBuff.atk;
        }
        if (taskName == "defMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.def = Number(task.children().val()); // DEF上昇値
            result.def += makimonoBuff.def;
        }
        if (taskName == "matMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.mat = Number(task.children().val()); // MAT上昇値
            result.mat += makimonoBuff.mat;
        }
        if (taskName == "mdfMakimono") {
            resetPISVLADMaMdBuff(makimonoBuff, result);
            makimonoBuff.mdf = Number(task.children().val()); // MDF上昇値
            result.mdf += makimonoBuff.mdf;
        }

        // リキッド処理
        if (taskName == "powLiquid") {
            // ATK上昇による効果のリセット
            result.atk -= liquidBuff.atk;

            let atkMagni = (level + result.pow - 100) / 100; // ATK上昇倍率
            liquidBuff.atk = parseInt((result.atk - result.pow - elysionBuff.atk) * Math.max(0.1, atkMagni)); // ATK上昇量
            result.atk += liquidBuff.atk;
        }
        if (taskName == "defLiquid") {
            // DEF上昇による効果のリセット
            result.def -= liquidBuff.def;

            let defMagni = (level + result.vit - 100) / 100; // DEF上昇倍率
            liquidBuff.def = parseInt((result.def - elysionBuff.def) * Math.max(0.1, defMagni)); // DEF上昇量
            result.def += liquidBuff.def;
        }
        if (taskName == "matLiquid") {
            // MAT上昇による効果のリセット
            result.mat -= liquidBuff.mat;

            let matMagni = (level + result.int - 100) / 100; // MAT上昇倍率
            liquidBuff.mat = parseInt((result.mat - elysionBuff.mat) * Math.max(0.1, matMagni)); // MAT上昇量
            result.mat += liquidBuff.mat;
        }
        if (taskName == "mdfLiquid") {
            // MDf上昇による効果のリセット
            result.mdf -= liquidBuff.mdf;

            let maxIntOrVit = Math.max(result.int, result.vit) // INT or VIT の大きい値を取る
            let mdfMagni = (level + maxIntOrVit - 100) / 100; // MDF上昇倍率
            liquidBuff.mdf = parseInt((result.mdf - (result.int * 15) + (maxIntOrVit * 2) - elysionBuff.mdf) * Math.max(0.1, mdfMagni)); // MDF上昇量
            result.mdf += liquidBuff.mdf;
        }

        // スキル処理
        if (taskName == "bloodScraper") {
            resetPISVLBuff(bloodScraperBuff, result);
            bloodScraperBuff.pow = 9; // POW上昇値
            result.pow += bloodScraperBuff.pow;
            result.atk += bloodScraperBuff.pow * 3;
        }
        if (taskName == "elysion") {
            resetPISVLADMaMdBuff(elysionBuff, result);

            elysionBuff.pow = parseInt(result.pow * 0.2); // POW上昇値
            elysionBuff.pow = Math.max(1, elysionBuff.pow); // POW上昇値が 0 以下だったら、上昇値は 1 とする
            result.pow += elysionBuff.pow;
            result.atk += elysionBuff.pow * 3;
            elysionBuff.int = parseInt(result.int * 0.2); // INT上昇値
            elysionBuff.int = Math.max(1, elysionBuff.int); // INT上昇値が 0 以下だったら、上昇値は 1 とする
            result.int += elysionBuff.int;
            result.mat += elysionBuff.int * 2;
            result.mdf += elysionBuff.int * 15;
            elysionBuff.spd = parseInt(result.spd * 0.2); // SPD上昇値
            elysionBuff.spd = Math.max(1, elysionBuff.spd); // SPD上昇値が 0 以下だったら、上昇値は 1 とする
            result.spd += elysionBuff.spd;
            elysionBuff.vit = parseInt(result.vit * 0.2); // VIT上昇値
            elysionBuff.vit = Math.max(1, elysionBuff.vit); // VIT上昇値が 0 以下だったら、上昇値は 1 とする
            result.vit += elysionBuff.vit;
            result.def += elysionBuff.vit * 2;
            elysionBuff.luk = parseInt(result.luk * 0.2); // LUK上昇値
            elysionBuff.luk = Math.max(1, elysionBuff.luk); // LUK上昇値が 0 以下だったら、上昇値は 1 とする
            result.luk += elysionBuff.luk;

            elysionBuff.atk = parseInt((total.atk + makimonoBuff.atk - (total.pow * 3) + (result.pow * 2)) * 0.2); // エル羽のATK上昇量
            result.atk += elysionBuff.atk;
            elysionBuff.def = parseInt((total.def + makimonoBuff.def - (total.vit * 2) + (result.vit * 2)) * 0.2); // エル羽のDEF上昇量
            result.def += elysionBuff.def;
            elysionBuff.mat = parseInt((total.mat + makimonoBuff.mat - (total.int * 2) + (result.int * 2)) * 0.2); // エル羽のMAT上昇量
            result.mat += elysionBuff.mat;
            let maxIntOrVit = Math.max(result.int, result.vit); // INT or VIT の大きい値を取る
            elysionBuff.mdf = parseInt((total.mdf + makimonoBuff.mdf - (total.int * 15) + (maxIntOrVit * 2)) * 0.2); // エル羽のMDF上昇量
            result.mdf += elysionBuff.mdf;
        }
        if (taskName == "apophis") {
            resetPISVLBuff(apophisBuff, result);
            apophisBuff.luk = parseInt(result.luk * 0.3); // LUK上昇値
            result.luk += apophisBuff.luk;
        }

        // 着替え処理
        if (taskName == "changeClothes") {
            // 着替え後のステータスを保持
            let change = new PISVLHpSpADMaMd(
                Number(safeEval(safeReplace(task.find("input[name=powTotal]").val()))), // 着替え後のPOW合計
                Number(safeEval(safeReplace(task.find("input[name=intTotal]").val()))), // 着替え後のINT合計
                Number(safeEval(safeReplace(task.find("input[name=spdTotal]").val()))), // 着替え後のSPD合計
                Number(safeEval(safeReplace(task.find("input[name=vitTotal]").val()))), // 着替え後のVIT合計
                Number(safeEval(safeReplace(task.find("input[name=lukTotal]").val()))), // 着替え後のLUK合計
                Number(task.find("input[name=hpTotal]").val()), // 着替え後のHP合計
                Number(task.find("input[name=spTotal]").val()), // 着替え後のSP合計
                Number(task.find("input[name=atkTotal]").val()), // 着替え後のATK合計
                Number(task.find("input[name=defTotal]").val()), // 着替え後のMAT合計
                Number(task.find("input[name=matTotal]").val()), // 着替え後のMAT合計
                Number(task.find("input[name=mdfTotal]").val()), // 着替え後のMDF合計
            );
            result.pow += change.pow - total.pow; // POW表示の変更
            total.pow = change.pow; // POW合計の変更
            result.int += change.int - total.int; // INT表示の変更
            total.int = change.int; // INT合計の変更
            result.spd += change.spd - total.spd; // SPD表示の変更
            total.spd = change.spd; // SPD合計の変更
            result.vit += change.vit - total.vit; // VIT表示の変更
            total.vit = change.vit; // VIT合計の変更
            result.luk += change.luk - total.luk; // LUK表示の変更
            total.luk = change.luk; // LUK合計の変更
            result.hp += change.hp - total.hp; // HP表示の変更
            total.hp = change.hp; // HP合計の変更
            result.sp += change.sp - total.sp; // SP表示の変更
            total.sp = change.sp; // SP合計の変更
            result.atk += change.atk - total.atk; // ATK表示の変更
            total.atk = change.atk; // ATK合計の変更
            result.def += change.def - total.def; // DEF表示の変更
            total.def = change.def; // DEF合計の変更
            result.mat += change.mat - total.mat; // MAT表示の変更
            total.mat = change.mat; // MAT合計の変更
            result.mdf += change.mdf - total.mdf; // MDF表示の変更
            total.mdf = change.mdf; // MDF合計の変更
        }
    });

    // 結果の表示
    $('#powResult').text(result.pow);
    $('#intResult').text(result.int);
    $('#spdResult').text(result.spd);
    $('#vitResult').text(result.vit);
    $('#lukResult').text(result.luk);
    $('#hpResult').text(result.hp);
    $('#spResult').text(result.sp);
    $('#atkResult').text(result.atk + "(上昇値：" + liquidBuff.atk + ")");
    $('#defResult').text(result.def + "(上昇値：" + liquidBuff.def + ")");
    $('#matResult').text(result.mat + "(上昇値：" + liquidBuff.mat + ")");
    $('#mdfResult').text(result.mdf + "(上昇値：" + liquidBuff.mdf + ")");
}

/**
 * POW/INT/SPD/VIT/LUKの上昇値をリセットする
 * 魔獣缶・シールや、ビタ、スクレイパー、フィス羽などのリセットに使用する
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
 * POW/INT/SPD/VIT/LUK/ATK/DEF/MAT/MDFの上昇値をリセットする
 * 巻物や、エル羽などのリセットに使用する
 */
function resetPISVLADMaMdBuff(PISVLADMaMdBuff, result) {
    // POW上昇による効果のリセット
    result.pow -= PISVLADMaMdBuff.pow;
    result.atk -= PISVLADMaMdBuff.pow * 3;
    // INT上昇による効果のリセット
    result.int -= PISVLADMaMdBuff.int;
    result.mat -= PISVLADMaMdBuff.int * 2;
    result.mdf -= PISVLADMaMdBuff.int * 15;
    // SPD上昇による効果のリセット
    result.spd -= PISVLADMaMdBuff.spd;
    // VIT上昇による効果のリセット
    result.vit -= PISVLADMaMdBuff.vit;
    result.def -= PISVLADMaMdBuff.vit * 2;
    // LUK上昇による効果のリセット
    result.luk -= PISVLADMaMdBuff.luk;

    // ATK上昇による効果のリセット
    result.atk -= PISVLADMaMdBuff.atk;
    // DEF上昇による効果のリセット
    result.def -= PISVLADMaMdBuff.def;
    // MAT上昇による効果のリセット
    result.mat -= PISVLADMaMdBuff.mat;
    // MDf上昇による効果のリセット
    result.mdf -= PISVLADMaMdBuff.mdf;

    // 上昇値のリセット
    PISVLADMaMdBuff.reset();
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