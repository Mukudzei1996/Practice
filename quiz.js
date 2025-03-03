const questions = ["Apple", "Banana", "Cherry"];
const answers = ["red", "yellow", "red"];

function startQuiz() {
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
        totalScore += quiz(i);
    }
    document.getElementById("score").innerText = `Your total score is: ${totalScore}`;
}

function quiz(index) {
    let points = 0;
    let guesses = 3;
    let userAnswer = "";

    while (guesses > 0) {
        userAnswer = prompt(`What color is a ${questions[index]}? You have ${guesses} attempts left.`);
        if (userAnswer.toLowerCase() === answers[index]) {
            points = 4 - guesses; // 3 points for first try, 2 for second, 1 for third
            break;
        } else {
            guesses--;
            alert("Incorrect! Try again.");
        }
    }
    return points;
}
