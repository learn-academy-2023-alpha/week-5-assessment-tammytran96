// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { kStringMaxLength } = require("buffer")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("codedMessage", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
//  ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called codedMessage
// Input is a string
// Declare a variable of the string using the .replace() method to replace "a" with 4, "e" with 3, "i" with 1, and "o" with 0
// Return the modified string
// Output is a string with a coded message

const codedMessage = (string) => {
    let messageCoded = string.replace(/a/g, "4")
    messageCoded = messageCoded.replace(/e/g, "3")
    messageCoded = messageCoded.replace(/E/g, "3") // Added this here because it looks like the secretCodeWord3 the capital E is also replaced whereas the other examples the capital letter isn't replaced.
    messageCoded = messageCoded.replace(/i/g, "1")
    messageCoded = messageCoded.replace(/o/g, "0")
    return messageCoded
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("letterArray", () => {
    it("returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
      expect(letterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
         const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(letterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
// ReferenceError: letterArray is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called letterArray
// Input is an array and a single letter
// Iterate over the array of each element using the .filter() method
// Lowercase all of the letters to account for any uppercase letters using .toLowerCase()
// Determine if each element contains that particular letter
// If so, return a new array with all of the words that contains the letter
// Output is an array of the words that contain that particular letter

const letterArray = (array, letter) => {
    return array.filter((value) => {
        let lowercase = value.toLowerCase()
        return lowercase.includes(letter)
    })
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("returns whether or not the array is a full house. A full house is exactly one pair and one three of a kind", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true 
      expect(fullHouse(hand1)).toEqual(true)
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
      expect(fullHouse(hand2)).toEqual(false)
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
      expect(fullHouse(hand3)).toEqual(false)
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
      expect(fullHouse(hand4)).toEqual(true)
    })
  })
// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called fullHouse
// Input is an array of 5 numbers
// Check to see if the array contains the conditions of a full house using conditional statements
    // A full house is exactly one pair and one three of a kind.
    // I wrote out the possible outcomes of a full house on paper first and then wrote out the conditionals. There is probably another less tedious way to do this..
// Output is a Boolean value that determines whether or not the array is a "full house". 

const fullHouse = (array) => {
    if(array[0] == array[1] && array[2] == array[3] && array[3] == array[4] && array[4] !== array[1] || array[1] == array[2] && array[0] == array[3] && array[3] == array[4] && array[4] !== array[1] || array[2] == array[3] && array[0] == array[1] && array[1] == array[4] && array[4] !== array[2] || array[3] == array[4] && array[1] == array[1] && array[1] == array[2] && array[2] !== array[3] || array[0] == array[2] && array[1] == array[3] && array[3] == array[4] && array[4] !== array[0] || array[0] == array[3] && array[1] == array[2] && array[2] == array[4] && array[4] !== array[0] || array[0] == array[4] && array[1] == array[2] && array[2] == array[3] && array[3] !== array[0] || array[1] == array[3] && array[0] == array[2] && array[2] == array[4] && array[4] !== array[1] || array[1] == array[4] && array[0] == array[2] && array[2] == array[3] && array[3] !== array[1] || array[2] == array[4] && array[0] == array[1] && array[1] == array[2] && array[3] !== array[2]){
        return true
    } else {
        return false
    }
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total