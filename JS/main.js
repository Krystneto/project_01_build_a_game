console.log('beep boop beep');

// querySelectors for the Buttons
var greenBtn = document.querySelector('#green');
var redBtn = document.querySelector('#red');
var yellowBtn = document.querySelector('#yellow');
var blueBtn = document.querySelector('#blue');
var startBtn = document.querySelector('#start');
var counter = document.querySelector('#counter');
var btnContainer = document.querySelector('#btn-container');
var timerId0 = null;
var timerId1 = null;
var timerId2 = null;
var timerId3 = null;
var timerId4 = null;
var timerId5 = null;
var counterVal = parseInt(counter.textContent);
var sequenceArr = [];
var userInput = [];



// random number generator bet
var randomGen = function() {
  return Math.ceil(Math.random()*4);
}


// test function for all color changes
var fourColorFlash = function () {
  sequence = randomGen();
  if (sequence === 1) {
    greenBtn.style.backgroundColor = 'white';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'green';
    },250);
  } else if (sequence === 2) {
    redBtn.style.backgroundColor = 'white';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'red';
    },250);
  } else if (sequence === 3) {
    yellowBtn.style.backgroundColor = 'white';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'yellow';
    },250);
  } else {
    blueBtn.style.backgroundColor = 'white';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'blue';
    },250);
  }
  sequenceArr.push(sequence);
  timerId5 = setTimeout(checkInput, 2000);
  };



var repeatColorFlash = function () {
  for(var i = 0; i < sequenceArr.length; i++) {
    if (sequenceArr[i] === 1) {
      greenBtn.style.backgroundColor = 'white';
      setTimeout(function() {
      greenBtn.style.backgroundColor = 'green';
      },250);
      console.log('1');
      if (i < sequenceArr.length) {
        setTimeout(repeatColorFlash, 1000);
        }
      } else if (sequenceArr[i] === 2) {
      redBtn.style.backgroundColor = 'white';
      setTimeout(function() {
      redBtn.style.backgroundColor = 'red';
      },250);
      console.log('2');
      if (i < sequenceArr.length) {
        setTimeout(repeatColorFlash, 1000);
        }
      } else if (sequenceArr[i] === 3) {
      yellowBtn.style.backgroundColor = 'white';
      setTimeout(function() {
      yellowBtn.style.backgroundColor = 'yellow';
      },250);
      console.log('3');
      if (i < sequenceArr.length) {
        setTimeout(repeatColorFlash, 1000);
        }
      } else if (sequenceArr[i] === 4) {
      blueBtn.style.backgroundColor = 'white';
      setTimeout(function() {
      blueBtn.style.backgroundColor = 'blue';
      },250);
      console.log('4');
      if (i < sequenceArr.length) {
        setTimeout(repeatColorFlash, 1000);
        }
    }
  }
}
// adds to the counter for each function loop
var addCounter = function() {
  counterVal += 1;
  counter.textContent = counterVal;
};


// resets the Counter back to 0
var resetCounter = function() {
  counterVal = 0;
  counter.textContent = 0;
};

// clears the sequenceArr and userInput
var clearSequence = function() {
  userInput = [];
  sequenceArr = [];
};


// gameOver function when userInput is incorrect
var gameOver = function() {
  // playing gameOver audio file
  resetCounter();
  clearSequence();
  return console.log('Nice try!');
};


// handle start game
var handleStartGame = function() {
  addCounter();
  timerId0 = setTimeout(fourColorFlash,1000);
};


// handle to convert userInput to a number in the sequence
var handleUserInput = function(event) {
  var userInputInt = (event.target.dataset.number);
    if (userInputInt === greenBtn.dataset.number) {
      return userInput.push(1);
    } else if (userInputInt === redBtn.dataset.number) {
      return userInput.push(2);
    } else if (userInputInt === yellowBtn.dataset.number) {
      return userInput.push(3);
    } else {
      return userInput.push(4);
    }
}


// function to check if userInput equals sequence
var checkInput = function() {
  if (_.isEqual(userInput,sequenceArr)) {
        return console.log('true');
      } else {
        gameOver();
        // return console.log("You lose!");
      }
};



// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);

// add EventListener for userInputs
btnContainer.addEventListener('click', handleUserInput);


// var object = {
//   'name': 'kris',
//   'age': 32,
// };

// var newObj = {};






















