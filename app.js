const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
let result = document.querySelector(
  "body > div.result.py-4.d-none.bg-light.text-center"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //chek answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  result.setAttribute("class", "result py-4x bg-light text-center");
  let procentage = document.querySelector(
    "body > div.result.py-4x.bg-light.text-center > div > p > span"
  );
  let count = 0;
  const timer = setInterval(() => {
    if (count === score) {
      clearInterval(timer);
    }
    procentage.textContent = `${count}%`;
    count++;
  }, 20);
});
