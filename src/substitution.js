// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //placeholder alphabet 
  const standard = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
  //return false if no alphabet arg
  if (!alphabet) return false;
  //return false if alphabet arg is not 26 in length
  if (alphabet.length !== 26) return false;
  //seeif  alphabet argument has any duplicate characters
  //placeholder called dupeFinder
  const duplicateCheck = [];
  //for loop of alphabet argument
  for (let i = 0; i < alphabet.length; i++){
    //push characters at the current location into dupeFinder array
    duplicateCheck.push(alphabet[i])
    //if a character in the next location in dupeFinder array return false
    if (duplicateCheck.includes(alphabet[i + 1])) return false;
  } 
  //make array of inputted data, in lower case
  const doLower = input.toLowerCase();
  const doArray = [...doLower];
  //when decoding
  if (!encode){
      //loop over items in doArray
      const decode = doArray.map(input => {
      //empty placeholder for result 
      let result = "";
      //compair alphabet and inputted values
      if (alphabet.includes(input)){
        //if there is a match, place the character from standard string at same index location as in the alphabet string => to result
        result += standard[alphabet.indexOf(input)];
      } else {
        //if no, add only the input to result
        //with spaces intact
        result += input;
      }
      return result;
    });
    //join results to return a string
    return decode.join("");
  }
    //when encoding
    if (encode){
    //loop over tiems in doArray
    const encode = doArray.map(input => {
    //placeholder empty for results again 
      let result = "";
    //compare alphabeta nd inputted values
      if (standard.includes(input)){
    //if match, add character from alphabet in the same index location as the standard string => to result
        result += alphabet[standard.indexOf(input)];
      } else {
    //if no, add only input to result
    //with spacces---
        result += input;
      }
      return result;
    });
    //join result array to return a string
    return encode.join("");
  }  
}  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };