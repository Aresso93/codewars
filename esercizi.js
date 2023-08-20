// console.log ('hadoken');

// //ESERCIZIO 1 di CodeWars

// //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// //The output should be two capital letters with a dot separating them.
// //It should look like this:

// //Sam Harris => S.H
// //
// //patrick feeney => P.F

// function abbrevName(name){

//     let nameArray = name.split(' ');
//     let firstName = nameArray[0];
//     let lastName = nameArray[1];

//     let abbrFirstName = firstName.charAt(0)+'.';
//     let abbrLastName = lastName.charAt(0)+'.'; 

//     let abbrFullName = abbrFirstName + abbrLastName; 
//     let abbrFullNameUpperCase = abbrFullName.toUpperCase();

//     if (!name.includes(' ')) {
//         return name; 
//     } else {
//         return abbrFullNameUpperCase;
//     }
// }

// let name = 'S.H.'

// //così funziona finché faccio un nome con quel numero di caratteri, con il cognome che inizia in posizione 8

// console.log(abbrevName(name))


function noSpace(x) {

    const noSpaceX = x.replace(/ /g, '');
    return noSpaceX;

}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));



//questo qui sotto è un altro metodo che ci ha fatto vedere Andrea

function noSpace(x) {
    const wordArray = x.split(' ')
    const noSpace = wordArray.join('');
    return noSpace;
}


//"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
//"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
//"8aaaaa dddd r     " -> "8aaaaaddddr"

//this kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    let result;
    if (number % 2 === 0) {
        result = number * 8;
    } else {
        result = number * 9;
    }
    return result;
}

console.log(simpleMultiplication(7));


//Convert number to reversed array of digits
//
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//Example(Input => Output):
//
//35231 => [1,3,2,5,3]
//0 => [0]
//

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {

    let cost = 40;

    let totalCost = d * cost;

    if (d >= 3 && d < 7) {
        discountedCost = totalCost - 20;
        return discountedCost;
    } else if (d >= 7) {

        superDiscountedCost = totalCost - 50
        return superDiscountedCost;
    } else {
        return totalCost;
    }





}

console.log(rentalCarCost(7));


//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//Use conditionals to return the proper message:

function greet(name, owner) {

    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

console.log(greet('Steve', 'Alex'));

// Write a function which converts the input string to uppercase

function makeUpperCase(str) {

    strUpperCase = str.toUpperCase();
    return strUpperCase;
}

//If you can't sleep, just count sheep!!
//Task:
//
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
//  


//your code here
//     let numCount = num + ' sheep...';
//     return numCount;
//   }

// console.log((countSheep(50)));

// {

//     for (let i = num; i > 0; i++)
//         document.write(i + " sheep...");

// }
// return document;
//   }

//soluzione qui sopra che ammazza il browser  

var countSheep = function (num) {

    for (let i = 1; i <= num; i++) {
        let loopedSheep = (i + ' sheep...');
        return loopedSheep;
    }


}

console.log(countSheep(30));


function numberToString(num) {
    stringedNum = num.toString();
    return stringedNum;
}



console.log(numberToString(777));

//soluzione alternativa sotto:

function numberToString(num) {
    return '' + num;
}


//Your task is to find the first element of an array that is not consecutive.

//By not consecutive we mean not exactly 1 larger than the previous element of the array.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
//The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
//The numbers could be positive or negative and the first non-consecutive could be either too!


//  function firstNonConsecutive(arr) {
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] !== arr[i + 1]) {
//            return arr[i + 1];
//        }
//    }
//    return null*2;
//}
//
//console.log(firstNonConsecutive([35, 36, 37, 40, 42, 43, 43]));

function otherAngle(a, b) {
    let c = 180 - (a + b);
    return c;
}

console.log(otherAngle(130, 10));

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {

    let bigString = '';

    while (n > 0) {

        bigString += s;
        n--;

    }
    return bigString;
}

console.log(repeatStr(10, 'abc'));

function doTheThing(a, b) {

    let blabla = '';

    while (b > 0) {
        blabla = blabla + a;
        b--
    }
    return blabla
}

console.log(doTheThing('abc', 10));


function updateLight(current) {

    if (current === 'green') {
        return 'yellow'
    } else if (current === 'yellow') {
        return 'red';
    } else {
        return 'green';
    }

}

console.log(updateLight('red'));

function feast(beast, dish) {

    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true;
    } else {
        return false;
    }

}

console.log(feast('chickadee students', 'chocolate cakes'));


function twiceAsOld(dadYearsOld, sonYearsOld) {

    if (dadYearsOld === 2 * sonYearsOld) {
        return 2 * sonYearsOld - dadYearsOld;
    } else if (dadYearsOld !== 2 * sonYearsOld && dadYearsOld - 2 * sonYearsOld > 0) {
        return dadYearsOld - 2 * sonYearsOld;
    } else {
        return 2 * sonYearsOld - dadYearsOld;
    }


}

console.log(twiceAsOld(30, 15));

//In this kata you will create a function that takes a 
//list of non-negative integers and strings and returns a new list with the strings filtered out.



function filter_list(l) {
    return l.filter(element => typeof (element) === 'number');
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    if (s.includes('!')) {
        const newString = s.replace('!', '');
        return newString;
    } else {
        return s;
    }
}


//  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//  To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//  Input

//  Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//  Output

//  Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category. 


function openOrSenior(data) {

    const result = [];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element[0] >= 55 && element[1] > 7) {

            result.push('Senior')
        } else {
            result.push('Open')
        }


    }

    return result;

}


// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
    
    let nextN = Math.sqrt(sq) + 1;

    let nextSq = nextN * nextN

    if (Number.isInteger(Math.sqrt(sq))) {
        
        return nextSq;
    } else {

    return -1;
    }
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
 
    const even = integers.filter(number => {
        return number % 2 === 0;
    })

    const odd = integers.filter(number =>{
        return number % 2 !== 0;
    })

    if (even.length <= 1) {
        return even;
    } else if (odd.length <= 1){
        return odd;
    } else {
        return 'undefined'
    }
 
  }

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// function order(words){
//     let newArray = []
//     const stringsArray = words.split(' ');
//     for (let i = 0; i < stringsArray.length; i++) {
//         const string = stringsArray[i];
        
//         if (string.includes('1')) {
//             newArray.push(string)
//         } 
//         if (string.includes('2')) {
//             newArray.push(string)
//         } if (string.includes('3')){
//             newArray.push(string)
//         } if (string.includes('4')){
//             newArray.push(string)
//         } if (string.includes('5')){
//             newArray.push(string)
//         } if (string.includes('6')){
//             newArray.push(string)
//         } if (string.includes('7')){
//             newArray.push(string)
//         } if (string.includes('8')){
//             newArray.push(string)
//         } if (string.includes('9')){
//             newArray.push(string)
//         } if (string === '') {
//             return '';
//         }
//         return newArray;
        
//     } 
//     console.log(newArray);
//   }


// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.


// function solution(number){
   
//   }

//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {

 const result = string.split(/(?=[A-Z])/)
 
    return result.join(' ');
}


// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
   
    let smileyArray = []

    for (let i = 0; i < arr.length; i++) {
        const face = arr[i];
        
        if (face.includes(':)') || face.includes(':D') || face.includes(';)') || face.includes(';D') || face.includes(':-)') || face.includes(':-D') || face.includes(';-)') || face.includes(';-D') || face.includes(':~)') || face.includes(';~)') || face.includes(':~D') || face.includes(';~D')) {
            
            smileyArray.push(face);

        }

        return smileyArray.length
    }

    return 0;
  }


//   The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    if (str.trim() === '') {
        return false;
    }

    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return capitalized;
    });

    const hashtag = '#' + capitalizedWords.join('');

    if (hashtag.length <= 140) {
        return hashtag;
    } else {
        return false;
    }
}


// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
//The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(string){
    const words = string.split(' ')

    const resultWords = words.map(word => {
        let transformedWord = '';
        for(let i = 0; i < word.length; i++){
            if (i % 2 !== 0) {
                transformedWord += word[i].toLowerCase();
            }
            else {
                transformedWord += word[i].toUpperCase();
             }   
        }
        return transformedWord
    })

    return resultWords.join(' ')
   
}

  console.log(toWeirdCase('faraoni gialli maledetti bastardi'));

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    
    let oddArray = [];
    let evenArray = [];

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        
        if(number % 2 === 0){

            evenArray.push(number);

        } else {
            oddArray.push(number)
        }

    }

    let orderedOddArray = oddArray.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 !== 0) {
            array[i] = orderedOddArray[0];
            orderedOddArray.shift()
        }
        
    }
    return array;
  }

//   In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

//   The string has the following conditions to be alphanumeric:
  
//       At least one character ("" is not valid)
//       Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//       No whitespaces / underscore
  
function alphanumeric(string){
    const specialChars = /[^a-zA-Z0-9]/;
    if (string.match(specialChars) || string === '') {
        return false;
    } else {
        return true;
    }
  }

  //Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

  function domainName(url){

    if (url.includes('www')) {
        
        let splitUrl = url.split('www.')
        console.log(splitUrl);
        let moreSplitUrl = splitUrl[1].split('.')
        return moreSplitUrl[0];
    } else if(url.includes('http')){

        let splitUrl = url.split('//')
        let moreSplitUrl = splitUrl[1].split('.')
        return moreSplitUrl[0];

    } else {
        let splitUrl = url.split('.')
        return splitUrl[0];
    }
    
  }
  console.log(domainName('https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript'));
  console.log(domainName('http://github.com/carbonfive/raygun'));
  
  function scramble(str1, str2) {
    
    if (str2.match(str1)) {
        return true;
    } else {

    return false;
    }
  }
  
//   Complete the function that

//     accepts two integer arrays of equal length
//     compares the value each member in one array to the corresponding member in the other
//     squares the absolute value difference between those two values
//     and returns the average of those squared absolute value difference between each member pair.


function exercise(firstArray, secondArray) {
  firstArray.length = secondArray.length;
    let resultArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    const number = firstArray[i];
    const secondNumber = secondArray[i]
    let firstResult = number - secondNumber
    
    console.log(firstResult);
    let secondResult = Math.abs(firstResult)
    console.log(secondResult);
    let thirdResult = Math.pow(secondResult, 2)
    console.log(thirdResult);
    resultArray.push(thirdResult)
    console.log(resultArray);

  }

  let sum = resultArray.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0)

  let avg = sum / resultArray.length;
  return avg;

}

console.log(exercise([1, 2, 3], [4, 5, 6]));


// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html 


function zeros (n) {
    
  }