// イベント発生の処理系群
// イベント：入力値の更新、処理の追加、処理項目の削除、CSVインポート/エクスポート

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
    $('.process').on('change', 'input[type="number"]', function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // ビタ処理の追加
    $('#appendPowBita').on('click', function () {
        $('.process').append('<div name=powBita><i class="wine bottle icon"></i>POWビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntBita').on('click', function () {
        $('.process').append('<div name=intBita><i class="wine bottle icon"></i>INTビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdBita').on('click', function () {
        $('.process').append('<div name=spdBita><i class="wine bottle icon"></i>SPDビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitBita').on('click', function () {
        $('.process').append('<div name=vitBita><i class="wine bottle icon"></i>VITビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukBita').on('click', function () {
        $('.process').append('<div name=lukBita><i class="wine bottle icon"></i>LUKビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendAllBita').on('click', function () {
        $('.process').append('<div name=allBita><i class="wine bottle icon"></i>ALLビタ <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 魔獣缶処理の追加
    $('#appendPowCan').on('click', function () {
        $('.process').append('<div name=powCan><i class="gift icon"></i>魔獣缶A <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntCan').on('click', function () {
        $('.process').append('<div name=intCan><i class="gift icon"></i>魔獣缶B <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // シール処理の追加
    $('#appendPowSeal').on('click', function () {
        $('.process').append('<div name=powSeal><i class="sticky note icon icon"></i>POWシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntSeal').on('click', function () {
        $('.process').append('<div name=intSeal><i class="sticky note icon icon"></i>INTシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdSeal').on('click', function () {
        $('.process').append('<div name=spdSeal><i class="sticky note icon icon"></i>SPDシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitSeal').on('click', function () {
        $('.process').append('<div name=vitSeal><i class="sticky note icon icon"></i>VITシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukSeal').on('click', function () {
        $('.process').append('<div name=lukSeal><i class="sticky note icon icon"></i>LUKシール <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // ブレイク処理の追加
    $('#appendBreak').on('click', function () {
        $('.process').append(`<div name=break><i class="ring icon"></i>ブレイク
        <table class="card-table">
        <tr>
            <th class="pow-item">POW</th>
            <th class="int-item">INT</th>
            <th class="spd-item">SPD</th>
            <th class="vit-item">VIT</th>
            <th class="luk-item">LUK</th>
        </tr>
        <tr>
            <th><input type="number" value="0" name="powCard"/></th>
            <th><input type="number" value="0" name="intCard"/></th>
            <th><input type="number" value="0" name="spdCard"/></th>
            <th><input type="number" value="0" name="vitCard"/></th>
            <th><input type="number" value="0" name="lukCard"/></th>
        </tr>
        </table>
        <button class="delete">削除</button> </div>`);
        calculation() // 処理の追加タイミングで更新
    });

    // 巻物処理の追加
    $('#appendPowMakimono').on('click', function () {
        $('.process').append(`<div name=powMakimono><i class="scroll icon"></i>POW巻物
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
        $('.process').append(`<div name=intMakimono><i class="scroll icon"></i>INT巻物
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
        $('.process').append(`<div name=spdMakimono><i class="scroll icon"></i>SPD巻物
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
        $('.process').append(`<div name=vitMakimono><i class="scroll icon"></i>VIT巻物
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
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukMakimono').on('click', function () {
        $('.process').append(`<div name=lukMakimono><i class="scroll icon"></i>LUK巻物
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
        $('.process').append(`<div name=atkMakimono><i class="scroll icon"></i>ATK巻物
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
        $('.process').append(`<div name=defMakimono><i class="scroll icon"></i>DEF巻物
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
        $('.process').append(`<div name=matMakimono><i class="scroll icon"></i>MAT巻物
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
        $('.process').append(`<div name=mdfMakimono><i class="scroll icon"></i>MDF巻物
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
        $('.process').append('<div name=powLiquid><i class="flask icon"></i>アタークリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendDefLiquid').on('click', function () {
        $('.process').append('<div name=defLiquid><i class="flask icon"></i>マモールリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMatLiquid').on('click', function () {
        $('.process').append('<div name=matLiquid><i class="flask icon"></i>マホアタリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMdfLiquid').on('click', function () {
        $('.process').append('<div name=mdfLiquid><i class="flask icon"></i>マホマモリキッド  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // スキル処理の追加
    $('#appendBloodScraper').on('click', function () {
        $('.process').append('<div name=bloodScraper><i class="tint icon"></i>ブラッドスクレイパー  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendElysion').on('click', function () {
        $('.process').append('<div name=elysion><i class="feather alternate icon"></i>大天使の加護  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendApophis').on('click', function () {
        $('.process').append('<div name=apophis><i class="feather alternate icon"></i>邪神の呪詛  <button class="delete">削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 処理項目を削除する
    $('.process').on('click', '.delete', function () {
        $(this).parent()[0].remove();
        calculation() // 処理の追加タイミングで更新
    });
    $('.process').on('click', '.all-delete', function () {
        $(this).parent().find("div").remove();
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