const username = document.getElementById('username')
const saveScoreButton = document.getElementById('saveScoreButton')
// const lastScore = localStorage.getItem('lastScore');
const score = localStorage.getItem('score');
score.innerText = score;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
})

saveHighScore = click => {
    click.preventDefault();
    
}