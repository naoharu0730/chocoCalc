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
 * @param {*} element CSVインポートのinputタグ
 */
function csvImport(element) {
    let fileInput = $(element)[0];
    let fileReader = new FileReader();
    fileInput.onchange = () => {
        let file = fileInput.files[0];
        fileReader.readAsText(file);
    };

    fileReader.onload = () => {
        csv = parseCSV(fileReader.result);
        console.log(csv);
        input_name = []
        input_name.push([])
        input_name.push(['', 'input[name=powStatus]', 'input[name=powTotal]'])
        input_name.push(['', 'input[name=intStatus]', 'input[name=intTotal]'])
        input_name.push(['', 'input[name=spdStatus]', 'input[name=spdTotal]'])
        input_name.push(['', 'input[name=vitStatus]', 'input[name=vitTotal]'])
        input_name.push(['', 'input[name=lukStatus]', 'input[name=lukTotal]'])
        input_name.push(['', '', 'input[name=atkTotal]'])
        input_name.push(['', '', 'input[name=defTotal]'])
        input_name.push(['', '', 'input[name=matTotal]'])
        input_name.push(['', '', 'input[name=mdfTotal]'])
        $.each(input_name, function (i, f) {
            $.each(f, function (j, filter) {
                if (i > 5) {
                    $(element).parent().parent().find(filter).val(csv[i][j]);
                } else {
                    $(element).parent().parent().find(filter).val(csv[i][j]);
                }
            })
        })
        
        calculation() // CSVインポート後のタイミングで更新
    }
}

/**
 * 画面の入力をもとに、CSVをエクスポートする
 * @param {*} element CSVエクスポートのリンクがあるaタグ
 */
function csvExport(element) {
    // table からデータを取得
    let d = [];
    $(element).parent().find("table tr").each(function (i) {
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
            m1.push(this[2])
            m.push(m1)
            let m2 = [];
            m2.push(this[1])
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
    $(element)[0].href = window.URL.createObjectURL(blob);

    delete csv_data; // オブジェクトを削除してメモリを開放
}