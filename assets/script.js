const quizData = [
{
    question: 'What tag is used to define a table or image notation (caption)?',
    a_1: '<embed>',
    a_2: '<code>',
    a_3: '<!DOCTYPE>',
    a_4: '<caption>',
    correct: 'd'
}, {
    question: 'What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?',
    a_1: '<embed>',
    a_2: '<code>',
    a_3: '<!DOCTYPE>',
    a_4: '<caption>',
    correct: 'c'
}, {
    question: 'What group of tags are used to define the text headers in the body of the HTML document?',
    a_1: '<button>',
    a_2: '<td>',
    a_3: '<h1> to <h6>',
    a_4: '<footer>',
    correct: 'c'
}, {
    question: 'What tag can be used to insert a line break or blank line in an HTML document?',
    a_1: '<body?></body?',
    a_2: '<title></title>',
    a_3: '<br></br>',
    a_4: '<head></head>',
    correct: 'c'
}, {
    question: 'What tag is used to define a standard cell inside a table?',
    a_1: '<button>',
    a_2: '<td>',
    a_3: '<h1> to <h6>',
    a_4: '<footer>',
    correct: 'b'
}, {
    question: 'What tag is used to render or transform text into an important (bold) version?',
    a_1: '<a>',
    a_2: '<strong>',
    a_3: '<blockquote>',
    a_4: '<em>',
    correct: 'b'
}
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.
    question;
    
    a_text.innerText = currentQuizData.a_1;
    b_text.innerText = currentQuizData.a_2;
    c_text.innerText = currentQuizData.a_3;
    d_text.innerText = currentQuizData.a_4;
    
    
}

function getSelected (){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;

    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else{
           quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2><a href="./end.html"><button>Submit your score</button></a>`
        }
    }



    
});


function setTimer(num) {
    var counter = setInterval(function()  {
        document.getElementById('countdown').innerHTML = num;
        num-- || clearInterval(counter);

    }, 1000);
}
setTimer(60);