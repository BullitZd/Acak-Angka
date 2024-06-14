$(document).ready(function() {
  // Event listener untuk tombol Generate
  $('#generate-button').click(function(e) {
    e.preventDefault();
    var inputValue = $('#input-number').val();
    var inputLength = inputValue.length;

    if (inputLength < 2 || inputLength > 4) {
      $('#input-number').addClass('shake');
      setTimeout(function() {
        $('#input-number').removeClass('shake');
      }, 1000);
    } else {
      var randomNumbers = generateRandomNumber(inputLength);
      displayRandomNumber(randomNumbers);
    }
  });

  // Event listener untuk input number
  $('#input-number').on('input', function() {
    var inputValue = $(this).val();
    if (inputValue.length > 4) {
      $(this).val(inputValue.slice(0, 4));
    }
  });

  // Fungsi untuk menghasilkan angka acak sesuai jumlah digit input
  function generateRandomNumber(length) {
    var max = Math.pow(10, length) - 1;
    var randomNumber = Math.floor(Math.random() * (max + 1));
    randomNumber = randomNumber.toString().padStart(length, '0');
    return randomNumber;
  }

  // Fungsi untuk menampilkan angka acak
  function displayRandomNumber(randomNumbers) {
    var resultElement = $('#result');
    resultElement.text(randomNumbers);
  }
});
