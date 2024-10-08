/*

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

// The first solution 

function position(letter) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}


// The second solution 

function position(letter) {

    return `Position of alphabet: ${letter.charCodeAt() - 96}`
    
}