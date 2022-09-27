const highScoresList = document.getElementById('highScoresList');
const localScores = localStorage.getItem('High Scores').split(',')

console.log(localScores);
//creates list of high scores
localScores.forEach(score => {
    var li = document.createElement('li');
    li.textContent = score;
    highScoresList.append(li);
});