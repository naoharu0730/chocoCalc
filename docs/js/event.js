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

    // ブレイク処理の追加
    $('#appendBreak').on('click', function () {
        $('.process').append(`<div name=break>ブレイク
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
        <button class="delete">削除</button> </div>`)
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