const quizData = [
    {
        question: 'Who is Jim Parsons?',
        a: 'Sheldon',
        b: 'Leonard',
        c: 'Raj',
        d: 'Howard',
        correct: 'd'
    }, {
        question: 'Who is Kaley Cuoco?',
        a: 'Amy',
        b: 'Emily',
        c: 'Penny',
        d: 'Bernadette',
        correct: 'a'
    }, {
        question: 'Who is Johnny Galecki?',
        a: 'Howard',
        b: 'Leonard',
        c: 'Sheldon',
        d: 'Stuart',
        correct: 'c'
    }, {
        question: 'Who is Simon Helberg?',
        a: 'Stuart',
        b: 'Leonard',
        c: 'Sheldon',
        d: 'Kripke',
        correct: 'b'
    }, {
        question: 'Who is Kunal Nayyar?',
        a: 'Rajesh',
        b: 'Stuart',
        c: 'Kripke',
        d: 'Rajs Father',
        correct: 'b'
    },
    {
        question: 'How old is Jim Parsons?',
        a: '35',
        b: '39',
        c: '42',
        d: '48',
        correct: 'd'
    }, {
        question: 'How old is Kaley Cuoco?',
        a: '36',
        b: '39',
        c: '42',
        d: '48',
        correct: 'a'
    }, {
        question: 'How old is Johnny Galecki?',
        a: '36',
        b: '39',
        c: '46',
        d: '49',
        correct: 'c'
    }, {
        question: 'How old is Simon Helberg?',
        a: '36',
        b: '40',
        c: '42',
        d: '45',
        correct: 'b'
    }, {
        question: 'How old is Kunal Nayyar?',
        a: '35',
        b: '40',
        c: '43',
        d: '47',
        correct: 'b'
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
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
    // check to see the answer
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at 
            ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
});