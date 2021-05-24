// イベント発生の処理系群
// イベント：入力値の更新、処理の追加、処理項目の削除、処理項目の入れ替え、CSVインポート

$(document).ready(function () {
    // ステータス入力の更新
    $('input[type="number"], input[type="text"]').change(function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // 処理の更新
    $('.process').on('change', 'select, input[type="number"], input[type="text"]', function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // ビタ処理の追加
    $('#appendPowBita').on('click', function () {
        $('.process').append('<div name=powBita class="ui fitted segment"><i class="wine bottle icon"></i>POWビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntBita').on('click', function () {
        $('.process').append('<div name=intBita class="ui fitted segment"><i class="wine bottle icon"></i>INTビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdBita').on('click', function () {
        $('.process').append('<div name=spdBita class="ui fitted segment"><i class="wine bottle icon"></i>SPDビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitBita').on('click', function () {
        $('.process').append('<div name=vitBita class="ui fitted segment"><i class="wine bottle icon"></i>VITビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukBita').on('click', function () {
        $('.process').append('<div name=lukBita class="ui fitted segment"><i class="wine bottle icon"></i>LUKビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendAllBita').on('click', function () {
        $('.process').append('<div name=allBita class="ui fitted segment"><i class="wine bottle icon"></i>ALLビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetBita').on('click', function () {
        $('.process').append('<div name=resetBita class="ui fitted segment"><i class="wine bottle icon"></i>リセット：ビタ <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 魔獣缶処理の追加
    $('#appendPowCan').on('click', function () {
        $('.process').append('<div name=powCan class="ui fitted segment"><i class="gift icon"></i>魔獣缶A <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntCan').on('click', function () {
        $('.process').append('<div name=intCan class="ui fitted segment"><i class="gift icon"></i>魔獣缶B <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetCan').on('click', function () {
        $('.process').append('<div name=resetCanSeal class="ui fitted segment"><i class="gift icon"></i><i class="sticky note icon"></i>リセット：缶・シール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // シール処理の追加
    $('#appendPowSeal').on('click', function () {
        $('.process').append('<div name=powSeal class="ui fitted segment"><i class="sticky note icon"></i>POWシール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntSeal').on('click', function () {
        $('.process').append('<div name=intSeal class="ui fitted segment"><i class="sticky note icon"></i>INTシール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdSeal').on('click', function () {
        $('.process').append('<div name=spdSeal class="ui fitted segment"><i class="sticky note icon"></i>SPDシール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitSeal').on('click', function () {
        $('.process').append('<div name=vitSeal class="ui fitted segment"><i class="sticky note icon"></i>VITシール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukSeal').on('click', function () {
        $('.process').append('<div name=lukSeal class="ui fitted segment"><i class="sticky note icon"></i>LUKシール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetSeal').on('click', function () {
        $('.process').append('<div name=resetCanSeal class="ui fitted segment"><i class="gift icon"></i><i class="sticky note icon"></i>リセット：缶・シール <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // 巻物処理の追加
    $('#appendPowMakimono').on('click', function () {
        $('.process').append(`<div name=powMakimono class="ui fitted segment"><i class="scroll icon"></i>POW巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendIntMakimono').on('click', function () {
        $('.process').append(`<div name=intMakimono class="ui fitted segment"><i class="scroll icon"></i>INT巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpdMakimono').on('click', function () {
        $('.process').append(`<div name=spdMakimono class="ui fitted segment"><i class="scroll icon"></i>SPD巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendVitMakimono').on('click', function () {
        $('.process').append(`<div name=vitMakimono class="ui fitted segment"><i class="scroll icon"></i>VIT巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendLukMakimono').on('click', function () {
        $('.process').append(`<div name=lukMakimono class="ui fitted segment"><i class="scroll icon"></i>LUK巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendHpMakimono').on('click', function () {
        $('.process').append(`<div name=hpMakimono class="ui fitted segment"><i class="scroll icon"></i>HP巻物
        <select name="selectHpMakimono">
        <option value="0" selected>0</option>
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="600">600</option>
        <option value="800">800</option>
        <option value="1000">1000</option>
        <option value="1200">1200</option>
        <option value="1400">1400</option>
        <option value="1600">1600</option>
        <option value="1800">1800</option>
        <option value="2000">2000</option>
        </select>
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendSpMakimono').on('click', function () {
        $('.process').append(`<div name=spMakimono class="ui fitted segment"><i class="scroll icon"></i>SP巻物
        <select name="selectSpMakimono">
        <option value="0" selected>0</option>
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="600">600</option>
        <option value="800">800</option>
        <option value="1000">1000</option>
        <option value="1200">1200</option>
        <option value="1400">1400</option>
        <option value="1600">1600</option>
        <option value="1800">1800</option>
        <option value="2000">2000</option>
        </select>
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendAtkMakimono').on('click', function () {
        $('.process').append(`<div name=atkMakimono class="ui fitted segment"><i class="scroll icon"></i>ATK巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendDefMakimono').on('click', function () {
        $('.process').append(`<div name=defMakimono class="ui fitted segment"><i class="scroll icon"></i>DEF巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMatMakimono').on('click', function () {
        $('.process').append(`<div name=matMakimono class="ui fitted segment"><i class="scroll icon"></i>MAT巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMdfMakimono').on('click', function () {
        $('.process').append(`<div name=mdfMakimono class="ui fitted segment"><i class="scroll icon"></i>MDF巻物
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
        <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetMakimono').on('click', function () {
        $('.process').append(`<div name=resetMakimono class="ui fitted segment"><i class="scroll icon"></i>リセット：巻物 <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`)
        calculation() // 処理の追加タイミングで更新
    });

    // リキッド処理の追加
    $('#appendAtkLiquid').on('click', function () {
        $('.process').append('<div name=atkLiquid class="ui fitted segment"><i class="flask icon"></i>アタークリキッド <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendDefLiquid').on('click', function () {
        $('.process').append('<div name=defLiquid class="ui fitted segment"><i class="flask icon"></i>マモールリキッド <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMatLiquid').on('click', function () {
        $('.process').append('<div name=matLiquid class="ui fitted segment"><i class="flask icon"></i>マホアタリキッド <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendMdfLiquid').on('click', function () {
        $('.process').append('<div name=mdfLiquid class="ui fitted segment"><i class="flask icon"></i>マホマモリキッド <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetLiquid').on('click', function () {
        $('.process').append('<div name=resetLiquid class="ui fitted segment"><i class="flask icon"></i>リセット：リキッド <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // スキル処理の追加
    $('#appendBloodScraper').on('click', function () {
        $('.process').append('<div name=bloodScraper class="ui fitted segment"><i class="tint icon"></i>ブラッドスクレイパー <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetBloodScraper').on('click', function () {
        $('.process').append('<div name=resetBloodScraper class="ui fitted segment"><i class="tint icon"></i>リセット：ブラッドスクレイパー <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    $('#appendElysion').on('click', function () {
        $('.process').append('<div name=elysion class="ui fitted segment"><i class="feather alternate icon"></i>大天使の加護 <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendApophis').on('click', function () {
        $('.process').append('<div name=apophis class="ui fitted segment"><i class="feather alternate icon"></i>邪神の呪詛 <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetSpecial').on('click', function () {
        $('.process').append('<div name=resetSpecial class="ui fitted segment"><i class="feather alternate icon"></i>リセット：スペシャル（羽） <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>');
        calculation() // 処理の追加タイミングで更新
    });

    // ブレイク処理の追加
    $('#appendBreak').on('click', function () {
        $('.process').append(`<div name=break class="ui fitted segment"><i class="ring icon"></i>ブレイク <button class="delete compact mini ui button"><i class="times icon"></i>削除</button>
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
        </div>`);
        calculation() // 処理の追加タイミングで更新
    });
    $('#appendResetBreak').on('click', function () {
        $('.process').append(`<div name=resetBreak class="ui fitted segment"><i class="ring icon"></i>リセット：ブレイク <button class="delete compact mini ui button"><i class="times icon"></i>削除</button> </div>`);
        calculation() // 処理の追加タイミングで更新
    });

    // 着替え処理の追加
    $('#appendChangeClothes').on('click', function () {
        $('.process').append(`<div name=changeClothes class="ui fitted segment"><i class="tshirt icon"></i>着替え <button class="delete compact mini ui button"><i class="times icon"></i>削除</button>
        <table class="status-table">
            <tr>
                <th></th>
                <th>ステ振り</th>
                <th>合計</th>
            </tr>
            <tr>
                <th class="pow-item">POW</th>
                <td> <input type="number" value="" name="powStatus" disabled="disabled" /> </td>
                <td> <input type="text" value="1" name="powTotal" required /> </td>
            </tr>
            <tr>
                <th class="int-item">INT</th>
                <td> <input type="number" value="" name="intStatus" disabled="disabled" /> </td>
                <td> <input type="text" value="1" name="intTotal" required /> </td>
            </tr>
            <tr>
                <th class="spd-item">SPD</th>
                <td> <input type="number" value="" name="spdStatus" disabled="disabled" /> </td>
                <td> <input type="text" value="1" name="spdTotal" required /> </td>
            </tr>
            <tr>
                <th class="vit-item">VIT</th>
                <td> <input type="number" value="" name="vitStatus" disabled="disabled" /> </td>
                <td> <input type="text" value="1" name="vitTotal" required /> </td>
            </tr>
            <tr>
                <th class="luk-item">LUK</th>
                <td> <input type="number" value="" name="lukStatus" disabled="disabled" /> </td>
                <td> <input type="text" value="1" name="lukTotal" required /> </td>
            </tr>
        </table>
        <table class="status-table">
            <tr>
                <th class="hp-item">HP</th>
                <td> <input type="number" value="1" name="hpTotal" required /> </td>
                <th class="sp-item">SP</th>
                <td> <input type="number" value="1" name="spTotal" required /> </td>
            </tr>
            <tr>
                <th class="atk-item">ATK</th>
                <td> <input type="number" value="1" name="atkTotal" required /> </td>
                <th class="def-item">DEF</th>
                <td> <input type="number" value="1" name="defTotal" required /> </td>
            </tr>
            <tr>
                <th class="mat-item">MAT</th>
                <td> <input type="number" value="1" name="matTotal" required /> </td>
                <th class="mdf-item">MDF</th>
                <td> <input type="number" value="1" name="mdfTotal" required /> </td>
            </tr>
        </table>
        <a name="statusExport" href="#" download="status.csv"><i class="download icon"></i>ステータスエクスポート</a>
        <div class="fileButton">
            <i class="upload icon"></i>
            ステータスインポート
            <input type="file" name="statusImport">
        </div>

        </div>`);
        calculation() // 処理の追加タイミングで更新
    });

    // 処理項目を削除する
    $('.process').on('click', '.delete', function () {
        $(this).parent()[0].remove();
        calculation() // 処理項目の削除タイミングで更新
    });
    $('#allDelete').on('click', function () {
        $('.process').find("div").remove();
        calculation() // 処理項目の削除タイミングで更新
    });

    // 処理項目を入れ替え可能にする
    $(function(){
        $('.process').sortable({
            axis: "y", // ドラッグの方向を縦に固定
            "opacity": 0.5, // ドラッグ中の透明度
            "update": function(){ // ドラッグ完了後のコールバック
                calculation() // 処理項目の入れ替えタイミングで更新
            }
        });
    });

    // ステータスインポート
    $('input[name="statusImport"]').on('click', function (e) {
        e.target.value = "" // CSV ファイルの初期化
        statusImport(this);
    });
    $('.process').on('click', 'input[name="statusImport"]', function (e) {
        e.target.value = "" // CSV ファイルの初期化
        statusImport(this);
    });

    // ステータスエクスポート
    $('a[name="statusExport"]').on('click', function () {
        statusExport(this);
    });
    $('.process').on('click', 'a[name="statusExport"]', function (e) {
        statusExport(this);
    });

    // 処理インポート
    $('input[name="processImport"]').on('click', function (e) {
        e.target.value = "" // CSV ファイルの初期化
        processImport(this);
    });
    // 処理エクスポート
    $('a[name="processExport"]').on('click', function () {
        processExport(this);
    });

    // 使い方の表示
    $('#description').on('click', function () {
        $('.description-top.ui.modal').modal('show');
    });;
})