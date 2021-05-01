// CSVの処理系群

/**
 * CSVのパース処理
 * @param {*} csv 
 * @returns 
 */
const parseCSV = (csv) => {
    return csv.split(/\r\n|\r|\n/).map((row) => row.split(','));
}

/**
 * CSVをインポートして、画面の入力を更新する
 */
function csvImport() {
    let fileInput = $('#import')[0];
    let fileReader = new FileReader();
    fileInput.onchange = () => {
        let file = fileInput.files[0];
        fileReader.readAsText(file);
    };

    fileReader.onload = () => {
        csv = parseCSV(fileReader.result);
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

/**
 * 画面の入力をもとに、CSVをエクスポートする
 */
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