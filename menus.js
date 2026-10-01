const menus = [
  // ===== 和食・メイン =====
  {
    id: "buta-kakuni",
    name: "豚の角煮",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "大根とたっぷりしょうが"
  },
  {
    id: "nikujaga",
    name: "牛肉の肉じゃが",
    genre: "和食",
    category: "メイン",
    taste: "あっさり",
    description: "お汁はおそばにかけても◎"
  },
  {
    id: "saba-miso",
    name: "サバ味噌",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "しょうがづくし"
  },
  {
    id: "ume-shiso-tsukune",
    name: "梅しそつくね",
    genre: "和食",
    category: "メイン",
    taste: "あっさり",
    description: "あっさり甘辛たれ"
  },
  {
    id: "salmon-chan-chan",
    name: "鮭のちゃんちゃん焼き",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "お味噌で野菜との相性も◎"
  },
  {
    id: "buri-teriyaki-ni",
    name: "ブリの照り煮",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "甘辛でごはんに◎"
  },
  {
    id: "salmon-miso-mayo",
    name: "鮭の味噌マヨ焼き",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "味噌マヨで香ばしく"
  },
  {
    id: "buta-hakusai",
    name: "豚肉と白菜のうま煮",
    genre: "和食",
    category: "メイン",
    taste: "あっさり",
    description: "とろっと白菜"
  },
  {
    id: "tori-teriyaki",
    name: "鶏の照り焼き",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "甘辛でごはんに◎"
  },
  {
    id: "buta-shogayaki",
    name: "豚の生姜焼き",
    genre: "和食",
    category: "メイン",
    taste: "こってり",
    description: "しょうがづくし"
  },

  // ===== 和食・副菜 =====

  {
    id: "ninjin-shirishiri",
    name: "にんじんしりしり",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "卵とツナを足してタンパク質！"
  },
  {
    id: "chikuwa-isobeyaki",
    name: "ちくわの磯辺焼き",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "おかずにもアテにも"
  },
  {
    id: "komatsuna-hijiki",
    name: "小松菜とにんじんのひじき煮",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "野菜とひじきたっぷり"
  },
  {
    id: "kinpira-gobo",
    name: "きんぴらごぼう",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "腸活にぴったり"
  },
  {
    id: "kiriboshi-daikon",
    name: "切り干し大根の煮物",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "味しみしみ"
  },
  {
    id: "kabocha-soboro",
    name: "かぼちゃのそぼろ煮",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "ほくほく甘辛"
  },
  {
    id: "renkon-kinpira",
    name: "れんこんのきんぴら",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "しゃきしゃき食感"
  },
  {
    id: "piman-jako",
    name: "ピーマンとじゃこの炒め煮",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "ごはんがすすむ"
  },
  {
    id: "kinoko-amakarani",
    name: "きのこの甘辛煮",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "きのこたっぷり"
  },
  {
    id: "tamagoyaki",
    name: "卵焼き",
    genre: "和食",
    category: "副菜",
    taste: "あっさり",
    description: "ちょこっと足しに"
  },
  {
    id: "atsuage-amakarani",
    name: "厚揚げの甘辛煮",
    genre: "和食",
    category: "副菜",
    taste: "こってり",
    description: "じゅわっと味しみ"
  },

  // ===== 和食・ごはん =====
  {
    id: "kinoko-takikomi",
    name: "きのこの炊き込みご飯",
    genre: "和食",
    category: "ごはん・麺",
    taste: "あっさり",
    description: "おにぎりにするよ"
  },
  {
    id: "yaki-onigiri",
    name: "焼きおにぎり",
    genre: "和食",
    category: "ごはん・麺",
    taste: "あっさり",
    description: "香ばしく焼いてあるよ"
  },
  {
    id: "gomoku-okowa",
    name: "五目おこわ",
    genre: "和食",
    category: "ごはん・麺",
    taste: "あっさり",
    description: "もちもち五目ごはん"
  },

  // ===== 中華・メイン =====
  {
    id: "mabo-nasu",
    name: "麻婆茄子",
    genre: "中華",
    category: "メイン",
    taste: "こってり",
    description: "ピリ辛だよ"
  },
  {
    id: "ebi-chili",
    name: "エビチリ",
    genre: "中華",
    category: "メイン",
    taste: "こってり",
    description: "ピリ辛チリソース"
  },
  {
    id: "chinjao-rousu",
    name: "青椒肉絲",
    genre: "中華",
    category: "メイン",
    taste: "こってり",
    description: "ピーマンとたけのこたっぷり"
  },
  {
    id: "subuta",
    name: "酢豚",
    genre: "中華",
    category: "メイン",
    taste: "こってり",
    description: "甘酸っぱいたれ"
  },
  {
    id: "hoikoro",
    name: "回鍋肉",
    genre: "中華",
    category: "メイン",
    taste: "こってり",
    description: "ごはんがすすむ濃いめ味"
  },

  // ===== 韓国料理 =====
  {
    id: "yangnyeom-chicken",
    name: "ヤンニョムチキン",
    genre: "韓国料理",
    category: "メイン",
    taste: "こってり",
    description: "チーズは後がけで"
  },
  {
    id: "chapchae",
    name: "チャプチェ",
    genre: "韓国料理",
    category: "メイン",
    taste: "こってり",
    description: "春雨とお野菜たっぷり"
  },
  {
    id: "tattori-tan",
    name: "韓国風肉じゃが（タットリタン）",
    genre: "韓国料理",
    category: "メイン",
    taste: "こってり",
    description: "ピリ辛ほくほく"
  },
  {
    id: "bulgogi",
    name: "プルコギ",
    genre: "韓国料理",
    category: "メイン",
    taste: "こってり",
    description: "甘辛だれでごはんに◎"
  },
  {
    id: "butakimchi",
    name: "豚キムチ",
    genre: "韓国料理",
    category: "メイン",
    taste: "こってり",
    description: "ごはんにもおつまみにも"
  },
  {
    id: "chijimi",
    name: "チヂミ",
    genre: "韓国料理",
    category: "副菜",
    taste: "こってり",
    description: "もちもち香ばしく"
  },

  // ===== 洋食・メイン =====
  {
    id: "cheese-hamburg",
    name: "チーズインきのこ煮込みハンバーグ",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "たまねぎときのこたちのソース"
  },
  {
    id: "beef-stroganoff",
    name: "ビーフストロガノフ",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "寒い日にあったまろう"
  },
  {
    id: "salmon-cream-stew",
    name: "鮭のクリーム煮",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "鮭で目の疲れ予防！"
  },
  {
    id: "meatball-tomato",
    name: "ミートボールのトマト煮",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "トマトソースたっぷり"
  },
  {
    id: "tori-tomato",
    name: "鶏肉のトマト煮",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "リコピンの吸収率アップ！"
  },
  {
    id: "pork-chap",
    name: "ポークチャップ",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "ケチャップベースの甘辛味"
  },
  {
    id: "cream-stew",
    name: "クリームシチュー",
    genre: "洋食",
    category: "スープ・汁物",
    taste: "こってり",
    description: "あったかクリーム系"
  },
  {
    id: "meat-sauce",
    name: "ミートソース",
    genre: "洋食",
    category: "メイン",
    taste: "こってり",
    description: "パスタにもドリアにも◎"
  },

  // ===== 洋食・副菜 =====
  {
    id: "ratatouille",
    name: "ラタトゥイユ",
    genre: "洋食",
    category: "副菜",
    taste: "あっさり",
    description: "お野菜いっぱいとろう"
  },
  {
    id: "spinach-bacon-butter",
    name: "ほうれん草とベーコンのバター炒め",
    genre: "洋食",
    category: "副菜",
    taste: "こってり",
    description: "ビタミンと鉄分！"
  },
  {
    id: "kinoko-garlic-butter",
    name: "きのこのガーリックバター",
    genre: "洋食",
    category: "副菜",
    taste: "こってり",
    description: "おかずにもアテにも"
  },

  // ===== デザート =====
  {
    id: "sweet-potato",
    name: "スイートポテト",
    genre: "その他",
    category: "デザート",
    taste: "こってり",
    description: "半解凍でも◎"
  },
  {
    id: "brownie",
    name: "ブラウニー",
    genre: "その他",
    category: "デザート",
    taste: "こってり",
    description: "チョコでひとやすみ"
  },
  {
    id: "muffin",
    name: "マフィン",
    genre: "その他",
    category: "デザート",
    taste: "こってり",
    description: "プレーン・チョコ・バナナ・紅茶 メモで教えて！"
  },
  {
    id: "pound-cake",
    name: "パウンドケーキ",
    genre: "その他",
    category: "デザート",
    taste: "こってり",
    description: "マフィンと同じフレーバーのリクエスト可◎"
  }
];

const siteInfo = {
  lastDelivery: "2026.09.28",
  updated: "2026.10.02"
};