// quiz.js

/**
 * quiz() function: Runs the trivia quiz and calculates the score.
 * @returns {number} The total score achieved by the user.
 */
function quiz() {
    // Array of trivia questions
    var questions = ["blue", "sun", "earth"];
    // Array of corresponding answers
    var answers = ["sky", "light", "planet"];
    // Initialize the score to 0
    let score = 0;

    // Loop through each question
    for (let i = 0; i < questions.length; i++) {
        // Initialize the number of guesses allowed for each question
        let guesses = 3;
        // While the user has guesses remaining
        while (guesses > 0) {
            // Prompt the user for an answer
             userAnswer = prompt(`Question ${i + 1}: What is ${questions[i]}?`);
            // Check if the user's answer matches the correct answer (case-insensitive)
            if (userAnswer && userAnswer.toLowerCase() === answers[i]) {
                // If the answer is correct, add the remaining guesses to the score
                score += guesses;
                // Set guesses to 0 to exit the while loop
                guesses = 0;
            } else {
                // If the answer is incorrect, decrement the number of guesses
                guesses--;
                // If there are remaining guesses, display an alert
                if (guesses > 0) {
                    alert(`Incorrect. You have ${guesses} attempts remaining.`);
                }
            }
        }
    }

    // Return the total score
    return score;
}

// Call the quiz function and store the returned score
const finalScore = quiz();
// Display the final score on the page
document.getElementById("score").textContent = `Your final score is: ${finalScore}`;