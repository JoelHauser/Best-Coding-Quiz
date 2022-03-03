const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


function calculateScores() {
    localStorage.removeItem("currentUser");
    var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;
    var highScoreNum = [];

    for (; key = keys[i]; i++) {
        var currScore = {user : key, score : localStorage.getItem(key)};
        highScoreNum.push(currScore);
    }
    highScoreNum.sort((a,b) => b.score-a.score);
    console.log(highScoreNum);
    return highScoreNum;
}

function storeUser(){
    var user = document.getElementById("username").value;
    localStorage.setItem(user, 0);
    localStorage.setItem("currentUser", user);
}


function getHighScores() {
    var scoreList = calculateScores();
    var highScoresList = document.getElementById('highScoresList')
    for(var i=0; i < 5; i++) {
        let highScoresListItem = document.createElement('li');
        highScoresListItem.innerHTML = i+1 + ".  " + scoreList[i].user + " = " + scoreList[i].score + " " ;
        highScoresListItem.setAttribute("style", "font-size: 30px; font-family: inherit; display: flex; justify-content: left; margin: .4rem; ")
        highScoresList.appendChild(highScoresListItem);
    }
    
    // var usernameBtn = {score, 0},
}
