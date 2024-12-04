
let totalSeconds = 120; // 5 minutes = 300 seconds
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

function updateDisplay() {
    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Update the display with zero-padded values
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    // Start interval to decrement totalSeconds every second
    const timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--; // Decrement the total seconds
            updateDisplay(); // Update the timer display
        } else {
            clearInterval(timerInterval); // Stop the timer when reaching 00:00
            alert("Time's up!"); // Notify the user
            showResult()
        }
    }, 1000);


    updateDisplay();
}
function showResult() {
  
    quizContainer.style.display = 'none';
    timer.style.display = 'none';

   
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
        <h1>Correct Answers: ${correctAns}</h1>
        <h1>Wrong Answers: ${wrongAns}</h1>
        <h1>Percentage: ${(correctAns / quizQuestions.length) * 100}%</h1>
    `;
}



const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    {
        id: 6,
        question: "Which of these is not a programming language?",
        options: {
            a: "Python",
            b: "HTML",
            c: "Java",
            d: "C++"
        },
        answer: "HTML"
    },
    {
        id: 7,
        question: "What does CSS stand for?",
        options: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Script Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 8,
        question: "Which HTML tag is used to display an image?",
        options: {
            a: "img",
            b: "image",
            c: "picture",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 9,
        question: "Which HTML tag is used to define a table?",
        options: {
            a: "table",
            b: "thead",
            c: "tr",
            d: "tb"
        },
        answer: "table"
    },
    {
        id: 10,
        question: "Which one is not a JavaScript data type?",
        options: {
            a: "String",
            b: "Boolean",
            c: "Object",
            d: "Function"
        },
        answer: "Function"
    }
];
// console.log("quizQuestions", quizQuestions[0].question)
// console.log("quizQuestions", quizQuestions[0].options)

var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")
var nextBtn=document.getElementById("nextBtn");
var indexnumber = 0;

var currentQuesCount = document.getElementById("currentQuesCount")
var totalCount = document.getElementById("totalCount")
var resultContainer=document.getElementById("resultContainer");
totalCount.innerHTML = quizQuestions.length
var correctAns = 0
var wrongAns = 0

const instructions = document.getElementById('instructionsSection');
const timer = document.getElementById('timerSection');
const quizContainer = document.getElementById('quizContainer');

function startQuiz() {
    instructions.style.display = 'none';
    timer.style.display = 'block';
    quizContainer.style.display = 'block';
    startTimer();
}


function handleQuestion() {
    questionElement.innerHTML = quizQuestions[indexnumber].question
    var optionObject = quizQuestions[indexnumber].options

    optionElement.innerHTML = " ";
    for (var key in optionObject) {
        optionElement.innerHTML += `<li onclick="checkAnswer(this)">${optionObject[key]}</li>`
    }
}

function nextQuestion() {
    if (indexnumber < quizQuestions.length - 1) {
        indexnumber++
        currentQuesCount.innerHTML = indexnumber +1;
        nextBtn.disabled = true
        handleQuestion()
    }
    else {
        // console.log("form SUBMIT")
        // console.log("correctAns", correctAns)
        // console.log("wrongAns", wrongAns)
        // console.log((correctAns / quizQuestions.length) * 100)

        // quizContainer.style.display = 'none';
        // timer.style.display = 'none';

        // var resultContainer = document.getElementById("resultContainer")
        // resultContainer.style.display ='block';
        //  resultContainer.innerHTML = `
        //     <h1>Correct Ans: ${correctAns}</h1>
        //     <h1>Wrong Ans: ${wrongAns}</h1>
        //     <h1>Percentage: ${(correctAns / quizQuestions.length) * 100}%</h1>`;
        showResult()

    }

}
function checkAnswer(element) {
    var allLiElement = optionElement.children;
    // console.log(element);
    var userSelection = element.innerHTML.toLowerCase()
    var correctAnswer = quizQuestions[indexnumber].answer.toLowerCase();
    if (userSelection === correctAnswer) {
        // console.log("correct");
        element.style.backgroundColor = "green"
        correctAns++
    }
    else {
        element.style.backgroundColor = "RED"
        wrongAns++
        for (var i = 0; i < allLiElement.length; i++) {
            if (allLiElement[i].innerHTML.toLowerCase() == correctAnswer) {
                allLiElement[i].style.backgroundColor = "green"
                break
            }
        }

    }

    for (var i = 0; i < allLiElement.length; i++) {
        console.log(allLiElement[i])
        allLiElement[i].style.pointerEvents = "none"
    }
    nextBtn.disabled = false

}














