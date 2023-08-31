//Build a function that returns an array of integers from n to 1 where n>0.


const reverseSeq = n => {
    let array = [n]
    for (let i = 0; i < n - 1; i++) {
        let element = array[i];
      
        element = element - 1 
        array.push(element)
     
        
    }
     console.log(array);
     return array
  };

  //Complete the solution so that it reverses the string passed into it.   
  function solution(str){
  
    let characterArray = str.split('')
    let backwardsArray = [];

   for (let i = characterArray.length-1; i >= 0; i--) {
    const element = characterArray[i];
    
    backwardsArray.push(element)
    
   }

   return backwardsArray.join('')

  }

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

let mystring = "how can mirrors be real if our eyes aren't real";


// String.prototype.toJadenCase = function (str) {
//       let strArray = str.split(' ')
//       for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
        
//         let firstChar = element.charAt(0).toUpperCase()
//         let restOfTheWord = element.slice(1)
//         let wholeWord = firstChar + restOfTheWord
//         return wholeWord
//       }

//       return strArray.join(' ')
//   };


  String.prototype.toJadenCase = function () {
    let strArray = this.split(' ')
       let acc=[];
       console.log(strArray);
       for (let i = 0; i < strArray.length; i++) {
         const element = strArray[i];
         
         let firstChar = element.charAt(0).toUpperCase()
         let restOfTheWord = element.slice(1)
         let wholeWord = firstChar + restOfTheWord
         console.log(firstChar);
         console.log(wholeWord);
         acc.push(wholeWord);
       }
   
       return acc.join(' ')
   };

//console.log("------------------------------------",toJadenCase(mystring))

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at pos

function findNeedle(haystack) {
    
    for (let i = 0; i < haystack.length; i++) {
       let element = haystack[i];
     
       if ((element + '')=== 'needle') {
        return 'found the needle at position ' + i
        }
       
    }
  }
  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// Assumptions

//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

// What We're Testing

// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

console.log(typeof 1);

function sum (numbers) {
    "use strict";
    let pippo=0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(typeof element !== 'number'){
            return 0
        }
        pippo = pippo + element;


        
    }
    return pippo
};

console.log("----------------------",sum(["pippo"]));

// TM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

function validatePIN (pin) {

  if (/^\d+$/.test(pin) && pin.length === 4) {
    return true;
  } else if (/^\d+$/.test(pin) && pin.length === 6 ) {
    return true
  } else {
  return false
  }
}

console.log(validatePIN('12345'));

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// function towerBuilder(nFloors) {
//   const asterisk = '*'
//   const firstString = ' '.repeat(nFloors) + asterisk + ' '.repeat(nFloors)
//   let pyramid = [];
//   pyramid.push(firstString)
  
//   for (let i = 0; i <= nFloors; i++) {
//      const string = array[i];
    


//   console.log(pyramid);

//   }

// }

// console.log(towerBuilder(5));

//ESERCIZIO INCOMPIUTO


//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
  if(bool.toString() === 'true'){
    return 'Yes'
  } else {
    return 'No'
  }
  }
  

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  
  if (name.charAt(0) === 'R'|| name.charAt(0) === 'r'){
    return name + " plays banjo"
  }

  else return name + " does not play banjo"
  
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

function friend(friends){
  let realFriends = [];
  for (let index = 0; index < friends.length; index++) {
    const friend = friends[index];
    
    if(friend.length === 4){
      realFriends.push(friend)
    }

  }
  return realFriends
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let positive = [];
  let negative = []; 
  let output = [];
  for (let i = 0; i < input.length; i++) {
   const element = input[i];
 
   if (element > 0) {
     positive.push(element);
     console.log(positive);
   }
   
   if (element < 0){
     negative.push(element);
     console.log(negative);
   }
 
 }
 let negativeSum = negative.reduce(function (a, b){
   return a + b;
 })
 
 output.push(positive.length)
 output.push(negativeSum);
 return output
 }
 
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//function countPositivesSumNegatives(input) 

//DA SISTEMARE 

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  
  let finalArray = a.filter(function(el){
    return !b.includes(el)
  })

  return finalArray;
}

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  var chari,
      arr = [],
      alphabet = "abcdefghijklmnopqrstuvwxyz",
      i;

  for (var i = 0; i < text.length; i++){
      chari = text[i].toLowerCase();
      if (alphabet.indexOf(chari) !== -1){
          arr.push(alphabet.indexOf(chari)+1);
      }
  }
  return arr.join(' ');
}
console.log(alphabetPosition("Hello World!!1"));

console.log(alphabetPosition('The sunset sets at twelve o\' clock.'));

//preso da StackOverflow e modificato da me

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let presentSheep = [];
  for (let i = 0; i < arrayOfSheep.length; i++) {
    const element = arrayOfSheep[i];
    
    if (element === true) {
      presentSheep.push(element)
    }

  }
  return presentSheep.length
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
 
  let classAverage = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

  if (yourPoints > classAverage) {
    return true;
  } else {
    return false;
  }

}


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  
let strArray = str.split('')
let endingArray = ending.split('')
let tempArray = []

  for (let i = strArray.length - endingArray.length; i < strArray.length ; i++) {
    const element = strArray[i];
    tempArray.push(element)
  }

  return tempArray.join('') === ending;
}

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr)
{
for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
    const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);
    
    if (leftSum === rightSum) {
      return i;
    }
  }
  
  return -1;
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  
  let keepArray = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (i % 2 === 0) {
      keepArray.push(element)
    }
    console.log(element);
    console.log(keepArray);
  }

return keepArray  

}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!


function squareDigits(num){
  let str = num.toString()
  let strArray = str.split('')
  let squareArray = []

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];
    
    squareArray.push(element * element)
  }

  const digitString = squareArray.join('')

  return parseInt(digitString)
}

console.log(squareDigits(679));

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  
  let strArray = str.toLowerCase().split('')
  let countX = []
  let countO = []

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];
    
    if(element === 'x'){
      countX.push(element)
    } else if(element === 'o'){
      countO.push(element)
    }

  } 

  if (countX.length === countO.length) {
    return true;
  } else {
    return false
  }

}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  let negaArray = []
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    const negElement = element * (-1)
    negaArray.push(negElement)
  }
  return negaArray
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b){
  let array = []
  
  if (a >= b) {
    array.push(b)
    array.push(a)
  } else {
    array.push(a)
    array.push(b)
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (element < array[1] && element !== array[1]) {
      array.push(element +1)
    }
    
  }
array.pop(-1)

return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  
}