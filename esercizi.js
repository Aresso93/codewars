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


function noSpace(x){

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

function greet (name, owner) {

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

var countSheep = function (num){

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
    return ''+num;
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

function repeatStr (n, s) {

let bigString = '';

while (n > 0) {

    bigString += s;
    n--;
    
}
return bigString;
}

console.log(repeatStr(10, 'abc'));

function doTheThing(a, b){

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
 
    if (beast [0] === dish [0] && beast[beast.length-1] === dish [dish.length-1]){
        return true;
    } else {
        return false;
    }

    }

    console.log(feast('chickadee students', 'chocolate cakes'));


    function twiceAsOld(dadYearsOld, sonYearsOld) {
    
      if (dadYearsOld === 2*sonYearsOld){
        return 2*sonYearsOld - dadYearsOld;
      } else if (dadYearsOld !== 2*sonYearsOld && dadYearsOld - 2*sonYearsOld >0){
        return dadYearsOld - 2*sonYearsOld;
      } else {
        return 2*sonYearsOld - dadYearsOld;
      }


      }

      console.log(twiceAsOld(30, 15));

//In this kata you will create a function that takes a 
//list of non-negative integers and strings and returns a new list with the strings filtered out.



function filter_list(l) {
    return l.filter(element => typeof(element) === 'number');
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
 