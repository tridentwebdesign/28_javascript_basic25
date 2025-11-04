// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //再描写のためのおまじない
  enemyArea.classList.add('hit');
}

function shakeEnemy2() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //再描写のためのおまじない
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP; //100
let hp2 = MAX_HP; //100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

// 効果音を取得
const seHit = document.querySelector('#se-hit');
const seDefeat = document.querySelector('#se-defeat');

// ① ランダムダメージの実装
attackButton.addEventListener('click', function () {
  // console.log('attack');
  const damage =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage; //最初は100-10

  // ②HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // ③撃破時のエフェクト適用（enemy--fly または enemy--squash）
    enemy.classList.add('enemy--fly');
    //断末魔
    seDefeat.play();
    // ④撃破後のボタン無効化処理
    attackButton.disabled = true;
    //変数に入れずに、そのまま.でつなぎ書き方でもOK
    // ⑤撃破メッセージの表示
    document.querySelector('.log').textContent = 'モンスターを倒した！';
  } else {
    hpText.textContent = hp; //テキストを書き換える
    hpBar.value = hp;
    // ⑥攻撃時の効果を追加
    shakeEnemy();
    seHit.currentTime = 0; //current = 現在
    seHit.play();
  }
});

// モンスター②用
// モンスター
const enemy2 = document.querySelector('.enemyImg2');

// HP表示部分
const hpText2 = document.querySelector('.hpText2 span');
const hpBar2 = document.querySelector('.hpBar2');

// 攻撃処理
const attackButton2 = document.querySelector('.attackBtn2');

// ① ランダムダメージの実装
attackButton2.addEventListener('click', function () {
  console.log('attack');
  const damage =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp2 = hp2 - damage; //最初は100-10

  // ②HP表示の更新ロジック修正（マイナス値の防止）
  if (hp2 <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    // ③撃破時のエフェクト適用（enemy--fly または enemy--squash）
    enemy2.classList.add('enemy--squash');
    //断末魔
    seDefeat.play();
    // ④撃破後のボタン無効化処理
    attackButton2.disabled = true;
    //変数に入れずに、そのまま.でつなぎ書き方でもOK
    // ⑤撃破メッセージの表示
    document.querySelector('.log2').textContent = 'モンスターを倒した！';
  } else {
    hpText2.textContent = hp2; //テキストを書き換える
    hpBar2.value = hp2;
    // ⑥攻撃時の効果を追加
    shakeEnemy2();
    seHit.currentTime = 0; //current = 現在
    seHit.play();
  }
});
