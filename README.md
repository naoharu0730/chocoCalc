chocoCalc
===

## Description  
チョコットランドのドピ計算したい

## Usage
demo に適当な値を入れれば使えます
## Demo
https://naoharu0730.github.io/chocoCalc/

## Note

- 表示ステータス計算
  - 表示ATK：純ATK + POW × 3
  - 表示DEF：純DEF + VIT × 2
  - 表示MAT：純MAT + INT × 2
  - 表示MDF：純MDF + INT × 15

- ビタ上昇量
  - POW/INT/SPD/VIT/LUK：キャラのステ振り × 0.2
  - ALL：キャラのステ振り × 0.1
  - 上昇量は小数切り捨て
  - 切り捨てて0になる場合は1上昇
- リキッド上昇量
  - ATK：(表示ATK - POW) × ((キャラレベル + POW - 100) / 100)
  - DEF：(表示DEF) × ((キャラレベル + VIT - 100) / 100)
  - MAT：(表示MAT) × ((キャラレベル + INT - 100) / 100)
  - MDF：(表示MDF - INT×15 + INTorVIT×2) × ((キャラレベル + INTorVIT - 100) / 100) ※INTとVITのうち、大きい方を参照
  - 上昇倍率の最低保障は0.1倍

- 魔獣缶
  - 魔獣缶A：POW上昇10、INT減少10、で固定
  - 魔獣缶B：INT上昇10、VIT減少10、で固定
  - 他の魔獣缶・シールと重複しない（後から使用した方で上書き）
- シール
  - POWシール：POW上昇15、INT減少15、で固定
  - INTシール：INT上昇15、POW減少15、で固定
  - SPDシール：SPD上昇15、LUK減少15、で固定
  - VITシール：VIT上昇15、SPD減少15、で固定
  - LUKシール：LUK上昇15、VIT減少15、で固定
  - 他のシール・魔獣缶と重複しない（後から使用した方で上書き）

- ブラッドスクレイパー
  - POW上昇9、で固定（サブ装備8点着用を想定）

- 大天使の加護
  - POW/INT/SPD/VIT/LUK：合計ステ × 0.2 ※上昇量は少数切り捨て
  - ATK：(表示ATK + 表示POW + エル羽上昇POW×2) × 0.2
  - DEF：(表示DEF + エル羽VIT×2) × 0.2
  - MAT：(表示MAT + エル羽上INT×2) × 0.2
  - MDF：(表示MDF - 表示INT×15 + 表示INTorVIT×2 + エル羽上昇INTorVIT×2) × 0.2 ※INTとVITのうち、大きい方を参照
- 邪神の呪詛
  - LUK：合計LUK × 0.3

## Author
[naoharu0730](https://github.com/naoharu0730)