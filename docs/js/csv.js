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
 * ステータスのCSVをインポートして、画面の入力を更新する
 * @param {*} element ステータスインポートのinputタグ
 */
function statusImport(element) {
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
        input_name.push(['', '', 'input[name=hpTotal]'])
        input_name.push(['', '', 'input[name=spTotal]'])
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
 * 画面の入力をもとに、ステータスをCSVでエクスポートする
 * @param {*} element ステータスエクスポートのリンクがあるaタグ
 */
function statusExport(element) {
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

/**
 * 処理をCSVでインポートして、画面の入力を更新する
 * @param {*} element 処理インポートのinputタグ
 */
function processImport(element) {
    let fileInput = $(element)[0];
    let fileReader = new FileReader();
    fileInput.onchange = () => {
        let file = fileInput.files[0];
        fileReader.readAsText(file);
    };

    fileReader.onload = () => {
        csv = parseCSV(fileReader.result);
        console.log(csv);
        $('#allDelete').click();
        csv.forEach(process => {
            switch (process[0]) {
                case 'resetCanSeal':
                    $('#appendResetCan').click();
                    break;
                default:
                    let text = process[0];
                    $('#append' + text.charAt(0).toUpperCase() + text.slice(1)).click();

                    if (text.includes("Makimono")) {
                        $('.process').find('div select').last().val(process[1])
                    }
                    if (text == "break") {
                        $('.process').find('div').last().find('input').each(function(i) {
                            $(this).val(process[i+1]);
                        })
                    }

                    break;
            }
        });

        calculation() // 処理インポート後のタイミングで更新
    }
}

/**
 * 画面の入力をもとに、処理をCSVでエクスポートする
 * @param {*} element 処理エクスポートのリンクがあるaタグ
 */
function processExport(element) {
    // process からデータを取得

    let d = [];
    $(element).parent().children(".process").children("div").each(function (i) {
        let dd = [];
        dd.push($(this).attr('name')); // 処理の名前
        if ($(this).find('select').length) {
            dd.push($(this).find('select').val()); // 巻物の入力値
        }
        if ($(this).attr('name') == "break") {
            $(this).find('input').each(function() {
                dd.push($(this).val()); // ブレイクの入力値 
            });
        }
        d.push(dd);
    });
    console.log(d);

    // CSV 出力
    let csv_data = d.map(function (l) { return l.join(',') }).join('\r\n');
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // BOM を用意（文字コードを BOM 付き UTF-8 にする）
    let blob = new Blob([bom, csv_data], { type: "text/csv" }); // データを CSV の BLOB に変換
    $(element)[0].href = window.URL.createObjectURL(blob);

    delete csv_data; // オブジェクトを削除してメモリを開放
}