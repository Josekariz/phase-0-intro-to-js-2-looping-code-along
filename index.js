const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event) {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful ${event} gift!`
  );
}

writeCards(names, "birthday");






// countdown function
function countDown() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}
countDown();

