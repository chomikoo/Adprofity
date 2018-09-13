(function () {
	'use strict'


	const quiz = document.getElementById('quiz');
	const questions = quiz.querySelectorAll('.quiz__question');
	const questionsBtn = quiz.querySelectorAll('input[type="radio"]');
	const questionsLen = questions.length;
	let currentQuestion = document.getElementById('quizCurrent');
	let correctAnswers = 0;

	document.getElementById('quizTotal').innerHTML = questionsLen;

	// Add click event to every radio input
	questionsBtn.forEach(element => {
		element.addEventListener('click', function (e) {
			checkingCorrectAnswers(e.target.value);
		});
	})

	function nextQuestion() {
		questions.forEach(elem => elem.classList.remove('quiz__question--current'));
		if (currentQuestion.innerHTML != questionsLen) {
			questions[currentQuestion.innerHTML].classList.add('quiz__question--current');
		}
		currentQuestion.innerHTML++;
	}

	function showCv() {
		quiz.parentElement.classList.add('quiz--hide');
		cv.classList.add('cv--show');
	}

	function showError() {
		document.getElementById('error').classList.add('error--show');
		document.getElementById('btn-reload').addEventListener('click', () => {
			window.location.href = window.location.href;
		});
		quiz.style.display = 'none';
	}

	function checkingCorrectAnswers(val) {
		if (val === "correct") {
			correctAnswers++;
		}

		nextQuestion();

		if (currentQuestion.innerHTML == questionsLen + 1) {
			if (correctAnswers == questionsLen) {
				showCv();
			} else {
				showError();
			}
		}


	}



})()