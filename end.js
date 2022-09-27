const username = document.getElementById('username')
const saveScoreButton = document.getElementById('saveScoreButton')

const score = localStorage.getItem('score');
const scoreEl = document.getElementById('score');
let scores;

scoreEl.innerText = score;


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