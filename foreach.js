let a = ["ant", "bat", "cat", 42];
a.forEach(element => console.log(element));

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character)
});

let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let myArrOfNums = [8, 17, 42, 99];
myArrOfNums.forEach(num => console.log(num));
