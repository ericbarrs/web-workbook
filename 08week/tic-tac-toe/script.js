'use strict';

$(document).ready(function() {
  // Put app logic in here

  var turn = 'X';
  var counter = 0;
  console.log(counter);
  $('[data-cell]').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(turn);
      wins();
      if (turn === 'X'? turn = 'O': turn = 'X') {}

    }
  })

  function wins() {
    if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "6"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "7"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "2"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "6"]').text() === turn &&
      $('[data-cell = "7"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn){
        alert('Win')
      }

    else if ($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn){
        alert('Win')
      }
    function{
      $('[data-cell]').each() = ""
    }
  }
})
