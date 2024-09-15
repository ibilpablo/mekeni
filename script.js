let currentQuestionIndex = 0;  
let score = 0;


const question = [
    {
        question: 'is adrian is good?(yes or no)',
        correctAnswer: 'yes'
    },
    





{
    question: 'kumain kana ba?(oo o hinde)',
    correctAnswer: 'hinde'},
    




{
        question: 'lab moba ako sir gerald?(oo o hinde)',
    correctAnswer: 'oo'
},


{
    question: 'okay kalang ba?(yes or no)',
    correctAnswer: 'no'
},



{
    question: 'anong ulam niyo?(sisig or kare kare)',
    correctAnswer: 'kare kare'
},






{
    question: 'papasok ba bukas?(yes or no)',
    correctAnswer: 'yes'
},



{
    question: 'pogi ba si kuya adrian?(yes or no)',
    correctAnswer: 'yes'
},






{
    question: 'magkano baon mo?(150 or 200)',
    correctAnswer: '200'
},



{
    question: 'sino pumatay sa tabing bahay namen?(ako or ikaw)',
    correctAnswer: 'ikaw'
},








{
    question: 'sinong umutot?(dion or joshua)',
    correctAnswer: 'dion'
},



{
    question: 'toyoin ba ang mga babae?(yes or no)',
    correctAnswer: 'yes'
},



{
    question: 'will you date adrian?(yes or no)',
    correctAnswer: 'yes'
},






{
    question: '?(yes or no)',
    correctAnswer: 'yes'
},







{
    question: 'nagkaon kana love?(yes or no)',
    correctAnswer: 'no'
},



{
    question: '5rd number of the pi?(yes or no)',
    correctAnswer: '5'
},


{
    question: 'bakla kaba?(yes or no)',
    correctAnswer: 'yes'
},







{
    question: 'kung ang aso ay pusa ano ka?(tao or hayop)',
    correctAnswer: 'hayop'
},





];

function showQuestion() {
    if (currentQuestionIndex < question.length) {
        const currentQuestion = question[currentQuestionIndex]; 
        const userAnswer = prompt(currentQuestion.question);

    if (userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
        score++;
        alert('galing naman ng bebe nayan'); 
    } else {
            alert('sayang naman:('); 
    }

        currentQuestionIndex++;
        showQuestion(); 
    } else {
        alert(`Your score is ${score} out of ${question.length}.`);
        if (score === question.length) {

            window.location.href = 'congratulations.html';
        } else {

            window.location.href = 'try-again.html';
    }
    }
}


function quizButton() {
    currentQuestionIndex = 0; 
    score = 0; 
    showQuestion();
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('try-again.html')) {
        const retryButton = document.getElementById('retry-button');
        
        retryButton.addEventListener('click', () => {
        
            window.location.href = 'index.html';
        });
    }
});
