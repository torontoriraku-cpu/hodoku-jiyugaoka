# hodoku-jiyugaoka

自由が丘のプライベートサロン「HODOKU」の公式サイト。

- トップページの構成は [atelier Rêve](https://atelier-reve.jp/) を参考にしています
  (FV → お知らせ → CONCEPT → MENU → FEATURE → THERAPIST → SALON TICKET → CONTACT → ACCESS → フッター)。
- 各メニューページの構成は [JCS Finance](https://www.jcs-finance.co.jp/) のLPを参考にしています
  (FV → お悩み → 選ばれる理由 → 施術について → お客様の声 → 料金 → 流れ → FAQ → 予約 → 他メニュー → アクセス)。

## ページ

| ファイル | 内容 |
|---|---|
| `index.html` | トップ(サロン全体・4メニューの入口) |
| `shinkai-headspa.html` | 深海のヘッドスパ |
| `ikumou-headspa.html` | 育毛ヘッドスパ |
| `ashibumi.html` | 足ふみ整体 |
| `lymph.html` | 毒出しリンパ |

```
css/style.css   スタイル(全ページ共通。メニューごとの色は .theme-xxx で切り替え)
js/main.js      ハンバーガーメニュー、固定予約バー、フェードイン、動画の自動再生
images/         写真(WebP)
videos/         店内動画(WebM + MP4)
```

ビルド不要の静的サイトです。各 HTML をブラウザで開けば確認できます。

## 未確定の内容

赤い点線の「【要確認】」と、斜線の「写真準備中」の箇所は、内容が決まっていない部分です。
公開前に差し替えてください。`grep -n 要確認 *.html` で一覧できます。

## 公開

GitHub Pages(`main` ブランチ / root)で公開します。
https://torontoriraku-cpu.github.io/hodoku-jiyugaoka/

URL を変える場合は、各 HTML の `og:url`・`og:image`・`canonical` も合わせて変更してください。

## CSS・JS を更新したとき

ブラウザに古いファイルが残らないよう、各 HTML の `css/style.css?v=…` と `js/main.js?v=…` の
`v=` の値を新しいもの(日付など)に変えてください。5ページすべて同じ値にします。
