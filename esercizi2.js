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