chocoCalc
===

## Description  
チョコットランドのドピ計算したい

## Usage
demo に適当な値を入れれば使えます
## Demo
https://naoharu0730.github.io/chocoCalc/

## Note

- 計算の順番
  - 1. ビタ、魔獣缶/シール、ブラッドスクレイパー
  - 2. 大天使の加護
  - 3. リキッド

- ビタ上昇量
  - POW/INT/SPD/VIT/LUK：キャラのステ振り * 0.2
  - ALL：キャラのステ振り * 0.1
  - 上昇量は小数点切り捨て
- リキッド上昇量
  - ATK：(表示ATK - POW) * ((キャラレベル + POW - 100) / 100)
  - DEF：(表示DEF - VIT) * ((キャラレベル + POW - 100) / 100)
  - MAT：(表示MAT - INT) * ((キャラレベル + POW - 100) / 100)
  - MDF：(表示MDF - INT or VIT) * ((キャラレベル + POW - 100) / 100) ※INTとVITのうち、大きい方を参照

- 魔獣缶
  - 魔獣缶A：POW上昇10、INT減少10、で固定
  - 魔獣缶B：INT上昇10、VIT減少10、で固定

- シール
  - POWシール：POW上昇15、INT減少15、で固定
  - INTシール：INT上昇15、POW減少15、で固定
  - SPDシール：SPD上昇15、LUK減少15、で固定
  - VITシール：VIT上昇15、SPD減少15、で固定
  - LUKシール：LUK上昇15、VIT減少15、で固定

- ブラッドスクレイパー
  - POW上昇9、で固定（サブ装備8点着用を想定）

- 大天使の加護
  - POW/INT/SPD/VIT/LUK：合計ステ * 0.2
  - ATK：(素ATK - ステ振りPOW + 巻物上昇値 + ((合計VIT - ステ振りVIT + エル羽上昇値) * 2)) * 0.2
  - DEF：(素DEF + 巻物上昇値 + ((合計VIT - ステ振りVIT + エル羽上昇値) * 2)) * 0.2
  - MAT：(素MAT + 巻物上昇値 + ((合計INT - ステ振りINT + エル羽上昇値) * 2)) * 0.2
  - MDF：(素MDF - ステ振りINT*15 + 巻物上昇値 + ((合計INT + エル羽上昇値) * 2)) * 0.2
  表示ステ * 0.2 ※INTとVITのうち、大きい方を参照
- 邪神の呪詛
  - LUK：合計LUK * 0.3

## Author
[naoharu0730](https://github.com/naoharu0730)