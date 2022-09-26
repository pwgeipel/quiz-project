const highScoresList = document.getElementById('highScoresList');
const localScores = localStorage.getItem('High Scores').split(',')

console.log(localScores);

localScores.forEach(score => {
    var li = document.createElement('li');
    li.textContent = score;
    highScoresList.append(li);
});