console.log ('hadoken');

//ESERCIZIO 1 di CodeWars

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:

//Sam Harris => S.H
//
//patrick feeney => P.F

function abbrevName(name){
//michael jordan

    abbrFirstName = name[0]+'.';
    abbrFirstNameUpperCase = abbrFirstName.toUpperCase;
    abbrLastName = name[8]+'.' 
    abbrFullName = abbrFirstName+abbrLastName;
    return abbrFullName;
    //indexOf
    //uppercase l'indice di white space + 1 quindi indexof(' ') +1
}

name = 'michael jordan'

//così funziona finché faccio un nome con quel numero di caratteri, con il cognome che inizia in posizione 8

console.log(abbrevName(name))