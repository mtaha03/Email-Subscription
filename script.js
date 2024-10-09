const scriptURL = 'https://script.google.com/macros/s/AKfycbzV8w3V3zMeZS0bSb9VXrE4v_WFl2acn0sDK4qU12mF1qoCJmuT7Ze2_Ze41vi40EeL/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
