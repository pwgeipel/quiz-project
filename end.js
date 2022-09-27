const username = document.getElementById('username')
const saveScoreButton = document.getElementById('saveScoreButton')

const score = localStorage.getItem('score');
const scoreEl = document.getElementById('score');
let scores;

scoreEl.innerText = score;

//Retrieves High scores from local storage
if (localStorage.getItem('High Scores')) {
    scores = [localStorage.getItem('High Scores')];
} else {
    scores = [];
}
//Saves high score and initials to local storage
function saveInitials() {
    scores.push(`Initials: ${username.value} || Score: ${score}`);
    localStorage.setItem('High Scores', scores);
}
//Allows submission after something has been entered into input field
username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
})
//Prevents page from reloading
saveHighScore = click => {
    click.preventDefault();
    saveInitials();
    
}