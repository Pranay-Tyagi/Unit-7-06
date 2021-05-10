document.querySelector('button').addEventListener('click', function () {
  const age = 15
  let guess = prompt('Guess my age')
  while (guess != age) {
    guess = prompt('Try again')
  }
  alert('you are correct')
})
