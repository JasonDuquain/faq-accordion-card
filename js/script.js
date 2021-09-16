let questions = document.querySelectorAll('.container__question');
let answers = document.querySelectorAll('.container__answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    answers[index].classList.toggle('container__answer--active');
  });
});

