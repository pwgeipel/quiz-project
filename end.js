const username = document.getElementById('username')
const saveScoreButton = document.getElementById('saveScoreButton')
// const lastScore = localStorage.getItem('lastScore');
const score = localStorage.getItem('score');
const scoreEl = document.getElementById('score');
let scores;

scoreEl.innerText = score;

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

if (localStorage.getItem('High Scores')) {
    scores = [localStorage.getItem('High Scores')];
} else {
    scores = [];
}
function saveInitials() {
    scores.push('Initials: ${username.value) || Score: $(score)');
    localStorage.setItem('High Scores', scores);
}



username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
})

saveHighScore = click => {
    click.preventDefault();
    saveInitials();
    
}