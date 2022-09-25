const username = document.getElementById('username')
const saveScoreButton = document.getElementById('saveScoreButton')
const lastScore = localStorage.getItem('lastScore');
const finalScore = document.getElementById('finalScore');
finalScore.innerText = lastScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.ariaValueMax;
})

saveHighScore = click => {
    click.preventDefault();
}