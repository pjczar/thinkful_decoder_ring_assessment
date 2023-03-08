// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //create alphabet array
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  
  function caesar(input, shift, encode = true) {
  //check the shift value, if not present, zero or <25 or >25 both are (all the way around) rtn false
  if (shift < -25 || shift > 25 || !shift || shift === 0) return false;
  //if decoding set shift value to negative
  if (!encode) shift = shift * -1;
  //put all inputted to lower case into an array
  const doLower = input.toLowerCase();
  const doArray = [...doLower];
  //correlate the inputted array item with alphabet index number
  const inputIndexArray = doArray.map(input => {
    if (alphabet.includes(input)){
      return alphabet.indexOf(input);
  //if character is not a letter return that
  } else {
    return input;}
  });
  //adjust index to fit shift value
  const shiftIndexArray = inputIndexArray.map(inputIndex => {
  //is array item an integer
   if (Number.isInteger(inputIndex)){
  //if yes, add to shift amount
  if (inputIndex + shift > 25) {
  //if the result of input index is over 25 subtract 26 -> reloop from start
  return (inputIndex + shift) - 26;
    }
      if (inputIndex + shift < 0) {
  //if the result of input index is negative integer add 26 -> reloop from start
 return (inputIndex + shift) + 26; 
        }
        return inputIndex + shift;
      }else{
  //if not a number make no change
    return inputIndex;
      }
});
    // make new array using map with shifted array
     const shifted = shiftIndexArray.map(shiftIndex => {
    //make sure array data is a number(int)
     if(Number.isInteger(shiftIndex)){
    //if yes return alphabet array item but shifted index
    return alphabet[shiftIndex];
      } else {
    //if not a number return the item
    return shiftIndex;
      }
    });
    // return the shifted as .join('')
    return shifted.join('');
      }
    // return caesar 
return {caesar,
  };
})();

    // double check the SYNTAX YOU LAZY BASTARD

module.exports = { caesar: caesarModule.caesar };
