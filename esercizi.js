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

    let noSpaceX = x.replace(/ /g,'');
    return noSpaceX;

}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

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

function digitize(n) {
    //code here
  }