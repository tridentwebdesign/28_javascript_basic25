document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');
});

//ランダムにシャッフルを関数式
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const horoscopetext = [
  '新しい挑戦に最適な時期。直感が冴え、積極的な行動がチャンスを呼びます。周囲の協力を得るために謙虚さも意識して。',
  '落ち着いて物事に向き合える日。小さな努力が大きな成果につながります。金銭面では堅実な判断が吉を呼びます。',
  '好奇心が刺激され、情報運が上昇。学びや交流にツキあり。アイデアが形になりやすいので積極的に発信を。',
  '感情が豊かになり、人との絆が深まる時。素直な気持ちを伝えると良い結果に。家庭運・対人運ともに安定。',
  '存在感が高まり、注目を集めやすい日。自信を持って行動すると道が開けます。派手さより誠実さが鍵に。',
  '細かな作業がはかどり、整理整頓が運気を整えます。健康管理にも良いタイミング。無理をしないペース配分を。',
  '人間関係が良好で、協力が得られる運気。交渉ごとや調整役に向いています。バランス感覚が成功のポイント。',
  '集中力が高まり、困難な課題に挑むほど成果が出る時期。秘密の計画が進展しそう。信念を貫くと吉。',
  '冒険心が高まり、新しい視界が開ける時。旅行や学びにツキあり。前向きな行動が思わぬ幸運を引き寄せます。',
  '努力が認められやすく、責任ある仕事で成果が出る運気。地道な積み重ねが評価につながり、信頼を得られます。',
  '独創的な発想が輝く日。固定観念を捨てるとチャンスが増えます。仲間との協力で大きな成果が期待できます。',
  '感性が冴え、インスピレーションに恵まれる時。芸術や癒やしに関わる活動が吉。流れに身を任せると良い方向へ。',
];
const luckynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const luckyitem = [
  '赤いアクセサリー',
  'レザーの財布',
  'シルバーのペン',
  'ハンドクリーム',
  '小さな鏡',
  'グリーンのノート',
  'アロマオイル',
  'ブレスレット',
  '旅行ガイド本',
  '腕時計',
  'スマホスタンド',
  'キャンドル',
];

shuffleArray(horoscopetext);
shuffleArray(luckynum);
shuffleArray(luckyitem);

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  const text = horoscopetext[i];
  buttons[i].addEventListener('click', () => {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = `<p>${text}</p>`;
  });
}

console.log(luckyitem);
console.log(luckynum);
console.log(horoscopetext);
