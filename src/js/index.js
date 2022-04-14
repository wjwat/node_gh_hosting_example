import '../css/site.css';
import '../favicon.ico';

import sieve from './sieve.js';

const resetPage = () => {
  $('#output-fieldset').hide();
  $('#output').html('');
};

const displayMessage = (message) => {
  $('#output-fieldset').show();
  $('#output').append(message);
}

$(() => {
  $('#clear-button').on('click', resetPage);  

  $('#input-button').on('click', () => {
    resetPage();
    const input = $('#max-prime').val();

    if (input > 1000000) {
      displayMessage('<p><b>Number too large, please try again.</b></p>');
      return;
    }

    const primes = sieve(parseInt(input));

    displayMessage('<p>Count of primes: <b>' + primes.length + '</b></p>' +
      primes.join(', '));
  });
});
