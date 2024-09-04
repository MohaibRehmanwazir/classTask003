const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Peshawar", "Lahore", "Islamabad", "None"],
        correct: 2
    },
    {
        question: "Who is the Prime Minister of Pakistan?",
        choices: ["Imran Khan", "Shahbaz Sharif", "Nawaz Sharif", "Maulana Fazal-ur-Rehman"],
        correct: 1
    },
    {
        question: "Who is the father of Computers?",
        choices: ["James Gosling", "Charles Babbage", "Dennis Ritchie", "none"],
        correct: 1
    },
    {
        question: "What is the extension of compiled java classes?",
        choices: [".js", ".txt", ".class", ".java"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    document.querySelectorAll('.answer-btn').forEach((button, index) => {
        button.addEventListener('click', () => handleAnswerClick(index));
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#0056b3');
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#007bff');
    });

    document.getElementById('next-question').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    });

    document.getElementById('play-again').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = score;
        document.getElementById('play-again').style.display = 'none';
        loadQuestion();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key >= '1' && event.key <= '4') {
            const index = parseInt(event.key) - 1;
            handleAnswerClick(index);
        }
    });
});

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-area').textContent = question.question;
    document.querySelectorAll('.answer-btn').forEach((button, index) => {
        button.textContent = question.choices[index];
        button.disabled = false; // Enable buttons for the new question
    });
    document.getElementById('message').textContent = '';
    document.getElementById('next-question').style.display = 'none';
}

function handleAnswerClick(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        document.getElementById('message').textContent = 'Correct!';
        score++;
        document.getElementById('score').textContent = score;
    } else {
        document.getElementById('message').textContent = 'Try Again!';
    }
    document.getElementById('next-question').style.display = 'inline';
    document.querySelectorAll('.answer-btn').forEach(button => button.disabled = true);
}

function endGame() {
    document.getElementById('question-area').textContent = 'Quiz Over!';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('play-again').style.display = 'inline';
}
