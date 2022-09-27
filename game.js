var question = document.getElementById('question');
var answers = Array.from(document.getElementsByClassName("answer-text"));
var timerEl = document.querySelector('.timer-count')
var timeLeft = 60;
var intervalId

//This initializes a timer, counting down one second at a time.
function startCountdown() {
    clearInterval(intervalId)
    intervalId = setInterval(function() {
    timeLeft--
    timerEl.textContent = timeLeft
//Once the timer reaches zero, the game goes to the "end page"    
    if (timeLeft < 1) {
        clearInterval(intervalId);
        return window.location.assign("end.html");
    }
    }, 1000)
}
//These establish a starting score of 0, a time penalty of 10 seconds, and a point bonus of 10 points.
const wrongTime = 10;
let acceptAnswers = true;
let score = 0;
let availableQuestions = [];
let currentQuestion = {};
let bonus = 10;

//This is the array of questions
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
        question: "What is the tallest mountain in South America?",
        answer1: "1. Ojos del Salado",
        answer2: "2. Monte Pissis",
        answer3: "3. Huascaran",
        answer4: "4. Aconcagua",
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
//When the game begins, the score is 0, questions are taken from the available questions array, and the countdown starts.
beginGame = () => {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions]
    nextQuestion ();
    startCountdown();
}
//The next question is taken from the array.  When the list of available question reaches 0, the end page automatically launches.
nextQuestion = () => {
    if (availableQuestions.length === 0) {
        return window.location.assign("end.html");
    }
    
//The next question is taken randomly from the questions array    
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
//Event listener for selecting an answer
answers.forEach(answer => {
    answer.addEventListener("click", click => {
        var choice = click.target;
        var selectedAnswer = choice.dataset["number"]
//This increases the score with each correct answer.        
        increaseScore = (num) => {
        score +=num;
        localStorage.setItem("score", score);
        }
//If the answer is correct, a bonus is awarded.        
        if (selectedAnswer == currentQuestion.correctAnswer) {
            verdict = "Correct!";
            increaseScore(bonus);
        } else {
        //If the answer is wrong, 10 seconds is removed.    
            verdict = "Wrong!";
            timeLeft -= 10;
        }
//The page loads the next question 0.5 seconds after the current question is answered.
        const reload = setTimeout(nextQuestion, 500);
    })    
})
//The game starts immeadiately after loading the page
beginGame ();