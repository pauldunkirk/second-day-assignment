// var zombieOne = 'Luke';
//
// var zombieTwo = 'Paul';
// var zombieThree = 'Fred';
//
// var zombieArray = ['Kris', zombieTwo, 'Catherine', 'Jeremy'];
// var zombieArrayTwo = ['Phil', 'Tom'];
//
// console.log(zombieArray[1]);
// zombieArray.push(zombieOne);
// zombieArray.push(zombieTwo);
// zombieArray.push(zombieThree);
// console.log(zombieArray);
// zombieArray.unshift(zombieThree);
// console.log(zombieArray[0]);
// zombieArray.pop();
// console.log(zombieArray);
//
// console.log(zombieArray.length);
//
// for(var i=0; i < zombieArray.length; i++){
//   console.log(zombieArray[i]);
// }
// zombieArray[2]
//console.log(whoIsAZombie(zombieArray));
// //console.log(whoIsAZombie(zombieArrayTwo));
//
// function whoIsAZombie(zombies){
//   // console.log('zombies', zombies);
//   // console.log('zombies[0]: ', zombies[1]);
//   return zombies[0] + ' and ' + zombies[1];
// }
// // var wayCoolNumArray = [1, 2, 3, 4, 5];
// // var wayCoolNumArray2 = [6, 7, 8, 9, 10, 11, 12];
// //
// // console.log(suchAnAwesomeFunction(wayCoolNumArray));
// // console.log(suchAnAwesomeFunction(wayCoolNumArray2));
// //
// // function suchAnAwesomeFunction(amazingNumericalParameterOfNumbersToBeToBeAdded) {
// //   return amazingNumericalParameterOfNumbersToBeToBeAdded[0] + amazingNumericalParameterOfNumbersToBeToBeAdded[3];
// // }

// var ballOfString = 'yarn';
// // var firstLetter = ballOfString.charAt(0);
// // firstLetter = ballOfString[1];
// var stringLength = ballOfString.length;
// var firstTwoLetters = ballOfString.substring(0,2); //first you want, then first you don't want: inclusive and exclusive
// var lastTwoLetter = ballOfString.substring(stringLength - 2, stringlength)
// // want r, don't want what is past it -----  ballOfString.length-2
// var middleTwoLetters =
// console.log(firstLetter);

//
// var commaSepValues = 'one, two, three, four';
//
// var newArray = commaSepValues.split(','); //split or delimiter at commas - we also did with space or with commas
// console.log(newArray);
//


//decided to put array in a var for clarity
var youCanDoThis = ['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'];
//Example 1: comeOnBrain function with youCanDoThis array and 3 as starting index 'hi'

//Example 2: comeOnBrain function with youCanDoThis array and 2 as starting index: 'oh'

// comeOnBrain funct w/ 2 parameters: youCanDoThis array and second is startingIndexNumber
//I need to return startingIndexNumber name as well as rest of array
function comeOnBrain (anArray, startingIndexNumber){
  if (startingIndexNumber < anArray.length) {
    var answer = '';
    for (var i = startingIndexNumber; i < anArray.length; i++){
    answer = answer + anArray[i];
} return answer;
} else {
  console.warn('Your number is too big!!');
}}
console.log(comeOnBrain(youCanDoThis, 3));
console.log(comeOnBrain(youCanDoThis, 2));
console.log(comeOnBrain(youCanDoThis, 6));

//Example 1
//console.log(yourFunction(['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'], 3));
//should log: Hi There!

//Example 2
//console.log(yourFunction(['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'], 2));
// should log: Oh! Hi There!


//If a user submits an index that is greater than the array,
//you should use console.warn() to let them know that what they did won't work.




//some stuff
