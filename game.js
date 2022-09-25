var question = document.getElementById('question');
var answers = Array.from(document.getElementsByClassName("answer-text"));

const wrongTime = 10;
let = acceptAnswers = true;
let = score = 0;
let = availableQuestions = [];
let = currentQuestion = {};

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
    }
]



beginGame = () => {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions]
    nextQuestion ();
}

nextQuestion = () => {
    if (availableQuestions.length === 0) {
        return window.location.assign("/totalscore.html");
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
        console.log(selectedAnswer)
        
        
        
        if (selectedAnswer === currentQuestion.answer) {
            // document.getElementById("correct").innerText = "Correct!";
            verdict = "Correct!";
        } else {
            verdict = "Wrong!"
        }



        document.getElementsByClassName("verdict").innerText = verdict;
        
               
        // nextQuestion();
        
        const reload = setTimeout(nextQuestion, 3000);




    })
})

beginGame ();