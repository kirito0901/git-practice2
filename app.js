
const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },

    {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    },

    {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

//ボタン情報定義
//「$」のマークでHTMLのオブジェクトが入っていることが理解しやすい。
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文,選択肢を定義
const setupQuiz = () => {

    //問題テキスト・定数の文字列をHTMLに反映させる
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    //選択肢ボタンテキスト
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

//正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    }
    else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数がまたあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
    }
}

//ボタン判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}



