export interface Question {
  name: string;
  src: string;
  isTora: boolean;
}

export const QUESTIONS: Question[] = [
  // true
  {
    name: "トラウマ",
    src: require("../assets/questions/trauma.png"),
    isTora: true,
  },
  {
    name: "トラック",
    src: require("../assets/questions/car_truck.png"),
    isTora: true,
  },
  {
    name: "カトラス",
    src: require("../assets/questions/kaizoku_woman.png"),
    isTora: true,
  },
  {
    name: "トランプタワー",
    src: require("../assets/questions/card_trump_tower_pyramid_man.png"),
    isTora: true,
  },
  {
    name: "シトラス",
    src: require("../assets/questions/fruit_ao_mikan.png"),
    isTora: true,
  },
  {
    name: "リストラ",
    src: require("../assets/questions/business_kubi.png"),
    isTora: true,
  },
  {
    name: "アトラスライオン",
    src: require("../assets/questions/animal_barbary_lion.png"),
    isTora: true,
  },
  {
    name: "テトラポッド",
    src: require("../assets/questions/syouha_block_tetrapod2.png"),
    isTora: true,
  },
  {
    name: "トランジスタ",
    src: require("../assets/questions/denshi_transistor.png"),
    isTora: true,
  },
  {
    name: "トラフィックジャム",
    src: require("../assets/questions/car_jutai.png"),
    isTora: true,
  },
  {
    name: "タリモンストラム",
    src: require("../assets/questions/kodai_tullimonstrum.png"),
    isTora: true,
  },
  {
    name: "ウルトラマン",
    src: require("../assets/questions/taiiku_boushi_tate.png"),
    isTora: true,
  },
  {
    name: "コントラバス",
    src: require("../assets/questions/music_woodbase.png"),
    isTora: true,
  },
  {
    name: "トライブ",
    src: require("../assets/questions/world_genjumin.png"),
    isTora: true,
  },
  {
    name: "トラウム",
    src: require("../assets/questions/sleep_yume_meisekimu.png"),
    isTora: true,
  },
  {
    name: "トラップ",
    src: require("../assets/questions/wana_money_man_boroboro.png"),
    isTora: true,
  },
  {
    name: "トランク",
    src: require("../assets/questions/travel_nimotsu_omoi.png"),
    isTora: true,
  },
  {
    name: "トラベル",
    src: require("../assets/questions/travel_happy_young_set.png"),
    isTora: true,
  },
  {
    name: "バトラー",
    src: require("../assets/questions/job_shitsuji.png"),
    isTora: true,
  },
  {
    name: "アストラル",
    src: require("../assets/questions/youkai_hitodama.png"),
    isTora: true,
  },
  {
    name: "アトラス",
    src: require("../assets/questions/map_book_chizuchou.png"),
    isTora: true,
  },
  {
    name: "ストラップ",
    src: require("../assets/questions/strap.png"),
    isTora: true,
  },
  {
    name: "カトラリー",
    src: require("../assets/questions/syokki_fork.png"),
    isTora: true,
  },
  {
    name: "ストライプ",
    src: require("../assets/questions/maku_kouhaku.png"),
    isTora: true,
  },
  {
    name: "ハンガーストライキ",
    src: require("../assets/questions/hunger_strike.png"),
    isTora: true,
  },
  {
    name: "トライアングル",
    src: require("../assets/questions/zukei_sankakukei.png"),
    isTora: true,
  },
  {
    name: "トラクター",
    src: require("../assets/questions/tractor_tachioujou.png"),
    isTora: true,
  },
  {
    name: "アルカトラズ",
    src: require("../assets/questions/landmark_alcatraz_island.png"),
    isTora: true,
  },
  {
    name: "エントランス",
    src: require("../assets/questions/room_genkan.png"),
    isTora: true,
  },
  {
    name: "オーケストラ",
    src: require("../assets/questions/music_orchestra.png"),
    isTora: true,
  },
  {
    name: "クレオパトラ",
    src: require("../assets/questions/cleopatra.png"),
    isTora: true,
  },
  {
    name: "サモトラケのニケ",
    src: require("../assets/questions/bijutsu_nike.png"),
    isTora: true,
  },
  {
    name: "ストライカー",
    src: require("../assets/questions/olympic3_21.png"),
    isTora: true,
  },
  {
    name: "テトラパック",
    src: require("../assets/questions/drink_character_milk_pack.png"),
    isTora: true,
  },
  {
    name: "トランポリン",
    src: require("../assets/questions/sports_trampoline_woman.png"),
    isTora: true,
  },
  {
    name: "ストラディバリウス",
    src: require("../assets/questions/music_violin.png"),
    isTora: true,
  },
  {
    name: "スポットライト",
    src: require("../assets/questions/light_spot.png"),
    isTora: true,
  },
  {
    name: "トライアスロン",
    src: require("../assets/questions/olympic34_triathlon2.png"),
    isTora: true,
  },
  {
    name: "トラックボール",
    src: require("../assets/questions/computer_mouse_trackball_hitosashiyubi.png"),
    isTora: true,
  },
  {
    name: "ノストラダムス",
    src: require("../assets/questions/nigaoe_nostradamus.png"),
    isTora: true,
  },
  {
    name: "トランペット",
    src: require("../assets/questions/suisougaku_trumpet_man.png"),
    isTora: true,
  },
  {
    name: "バードストライク",
    src: require("../assets/questions/airplane_bird_strike.png"),
    isTora: true,
  },
  {
    name: "オーストラリア",
    src: require("../assets/questions/Australia.png"),
    isTora: true,
  },
  {
    name: "スコットランド",
    src: require("../assets/questions/Scotland.png"),
    isTora: true,
  },
  // false
  {
    name: "ケトル",
    src: require("../assets/questions/kettle.png"),
    isTora: false,
  },
  {
    name: "ボトル",
    src: require("../assets/questions/drink_petbottle_tsumetai.png"),
    isTora: false,
  },
  {
    name: "ピストル",
    src: require("../assets/questions/starter_starting_pistol.png"),
    isTora: false,
  },
  {
    name: "シャトル",
    src: require("../assets/questions/sports_badminton_shuttle.png"),
    isTora: false,
  },
  {
    name: "タートル",
    src: require("../assets/questions/pan_kame.png"),
    isTora: false,
  },
  {
    name: "エレキテル",
    src: require("../assets/questions/machine_erekiteru.png"),
    isTora: false,
  },
  {
    name: "スキットル",
    src: require("../assets/questions/skittle_hipflask.png"),
    isTora: false,
  },
  {
    name: "トルネード",
    src: require("../assets/questions/saigai_tatsumaki.png"),
    isTora: false,
  },
  {
    name: "ザッハトルテ",
    src: require("../assets/questions/sweets_chocolate_cake_sachertorte.png"),
    isTora: false,
  },
  {
    name: "インストルメント",
    src: require("../assets/questions/energy_denryoku_smartmeter.png"),
    isTora: false,
  },
  {
    name: "へびつかい",
    src: require("../assets/questions/seiza13_hebitsukai.png"),
    isTora: false,
  },
  {
    name: "スペースシャトル",
    src: require("../assets/questions/space_spaceshuttle.png"),
    isTora: false,
  },
  {
    name: "かとりせんこう",
    src: require("../assets/questions/katorisenkou.png"),
    isTora: false,
  },
  {
    name: "取っ手",
    src: require("../assets/questions/door_knob_lever.png"),
    isTora: false,
  },
  {
    name: "ウイングナット",
    src: require("../assets/questions/neji_wingnut.png"),
    isTora: false,
  },
  {
    name: "かずのこ",
    src: require("../assets/questions/sushi_kazunoko.png"),
    isTora: false,
  },
  {
    name: "どんぐり",
    src: require("../assets/questions/donguri.png"),
    isTora: false,
  },
  {
    name: "ボクシング",
    src: require("../assets/questions/sports_boxing_corner_man_second.png"),
    isTora: false,
  },
  {
    name: "ピアニスト",
    src: require("../assets/questions/pianist_man.png"),
    isTora: false,
  },
  {
    name: "ずがこうさく",
    src: require("../assets/questions/kousaku_family_father.png"),
    isTora: false,
  },
  {
    name: "じびか",
    src: require("../assets/questions/kenkoushindan_hana_girl.png"),
    isTora: false,
  },
  {
    name: "ハングリー",
    src: require("../assets/questions/kodomosyokudou_hungry_girl.png"),
    isTora: false,
  },
  {
    name: "よもぎもち",
    src: require("../assets/questions/daifuku_yomogi.png"),
    isTora: false,
  },
  {
    name: "ふじさん",
    src: require("../assets/questions/fujisan.png"),
    isTora: false,
  },
  {
    name: "ぜんこうじ",
    src: require("../assets/questions/landmark_zenkouji.png"),
    isTora: false,
  },
  {
    name: "シーチキンおにぎり",
    src: require("../assets/questions/onigiri_character_seachicken.png"),
    isTora: false,
  },
  {
    name: "くうかい",
    src: require("../assets/questions/nigaoe_kuukai.png"),
    isTora: false,
  },
  {
    name: "重いコンダラ",
    src: require("../assets/questions/kondara_baseballer.png"),
    isTora: false,
  },
  {
    name: "マリアッチ",
    src: require("../assets/questions/music_mexico_mariachi_violin.png"),
    isTora: false,
  },
  {
    name: "進路相談",
    src: require("../assets/questions/school_soudan_man_boy.png"),
    isTora: false,
  },
  {
    name: "マネー",
    src: require("../assets/questions/money_yen_bill3.png"),
    isTora: false,
  },
  {
    name: "ハンドル",
    src: require("../assets/questions/jitensya_brake.png"),
    isTora: false,
  },
  {
    name: "ふしんじんぶつ",
    src: require("../assets/questions/bouhan_camera_ojiisan.png"),
    isTora: false,
  },
  {
    name: "エンジン",
    src: require("../assets/questions/engine_hatsudenki_small.png"),
    isTora: false,
  },
  {
    name: "からまったつりいと",
    src: require("../assets/questions/fishing_tsurizao_nagezao_karamaru.png"),
    isTora: false,
  },
  {
    name: "レジャーシート",
    src: require("../assets/questions/basyotori_sheet2_green.png"),
    isTora: false,
  },
  {
    name: "ケッテンクラート",
    src: require("../assets/questions/war_kettenkrad.png"),
    isTora: false,
  },
  {
    name: "いご",
    src: require("../assets/questions/igo_kids.png"),
    isTora: false,
  },
];

export const pick = (): Question =>
  QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
