var question = document.getElementById('question');
var answers = Array.from(document.getElementsByClassName("answer-text"));
var timerEl = document.querySelector('.timer-count')
var timeLeft = 60;
var intervalId

function startCountdown() {
    clearInterval(intervalId)
    intervalId = setInterval(function() {
    timeLeft--
    timerEl.textContent = timeLeft
    
    if (timeLeft === 0) {
        clearInterval(intervalId);
        return window.location.assign("end.html");
    }
    }, 1000)
}

const wrongTime = 10;
let acceptAnswers = true;
let score = 0;
let availableQuestions = [];
let currentQuestion = {};
let bonus = 10;

let questions = [
    {
        question: "Which of the following was NOT directed by Charlie Chaplin?",
        answer1: "1. The Gold Rush",
        answer2: "2. Modern Times",
        answer3: "3. The General",
        answer4: "4. City Lights",
        correctAnswer: 3
    },
    {
        question: "In what year was Apple founded?",
        answer1: "1. 1975",
        answer2: "2. 1976",
        answer3: "3. 1977",
        answer4: "4. 1978",
        correctAnswer: 2
    },
    {
        question: "Who was the first host of The Tonight Show?",
        answer1: "1. Steve Allen",
        answer2: "2. Jack Paar",
        answer3: "3. Johnny Carson",
        answer4: "4. Jay Leno",
        correctAnswer: 1
    },
    {
        question: "Which small country is located between the borders of France and Spain?",
        answer1: "1. Vatican City",
        answer2: "2. Luxembourg",
        answer3: "3. Liechtenstein",
        answer4: "4. Andorra",
        correctAnswer: 4
    },
    {
        question: "Which small country is located between the borders of France and Spain?",
        answer1: "1. Vatican City",
        answer2: "2. Luxembourg",
        answer3: "3. Liechtenstein",
        answer4: "4. Andorra",
        correctAnswer: 4
    },{
        question: "Who Was The 1st Wife of Henry VIII?",
        answer1: "1. Catherine of Aragon",
        answer2: "2. Anne Boleyn",
        answer3: "3. Jane Seymour",
        answer4: "4. Anne of Cleves",
        correctAnswer: 1
    },{
        question: "Who was the teacher of Alexander the Great?",
        answer1: "1. Socrates",
        answer2: "2. Plato",
        answer3: "3. Aristotle",
        answer4: "4. Archimedes",
        correctAnswer: 3
    },
]



beginGame = () => {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions]
    nextQuestion ();
    startCountdown();
}

nextQuestion = () => {
    if (availableQuestions.length === 0) {
        return window.location.assign("end.html");
    }
    
    
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(answer => {
        var number = answer.dataset["number"];
        answer.innerText = currentQuestion["answer" + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptAnswers = true;
}
answers.forEach(answer => {
    answer.addEventListener("click", click => {
        var choice = click.target;
        var selectedAnswer = choice.dataset["number"]
        
        


        increaseScore = (num) => {
        score +=num;
        // score.innerText = score;
        localStorage.setItem("score", score);
        }
        
        
        
        if (selectedAnswer == currentQuestion.correctAnswer) {
            verdict = "Correct!";
            increaseScore(bonus);
        } else {
            verdict = "Wrong!";
            timeLeft -= 10;
        }



        document.getElementsByClassName("verdict").innerText = verdict;
        
               
        // nextQuestion();
        
        const reload = setTimeout(nextQuestion, 500);




    })

    
})

beginGame ();
