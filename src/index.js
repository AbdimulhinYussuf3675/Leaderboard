import './css/index.css';
import displayLists from './modules/display';

const nameForm = document.querySelector('#name');
const scoreForm = document.querySelector('#score');
const submitBtn = document.querySelector('.btn');
const gameId = 'eU8fUe323J6Z3a6jqAvT';

const fetchScore = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: nameForm.value,
        score: scoreForm.value,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  await response.json();
  nameForm.value = '';
  scoreForm.value = '';
};
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchScore();
  const error = document.querySelector('.error');
  if (!nameForm && !scoreForm) {
    error.innerHTML = 'Please fill all input fields';
  }
});
document.addEventListener('DOMContentLoaded', displayLists);
