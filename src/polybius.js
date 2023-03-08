// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //ALPHABETS
const alphabet = {
  11: "a", 
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "(i/j)",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
  " ": " ",
};
  function polybius(input, encode = true) {
      //placeholder
    let result = "";
    //make all letters lower case
    const doLower = input.toLowerCase();
    //use split on spaces
    const doSplit = doLower.split(" ");
    //set a variable that will be used to set our input as an array
    let doArray = doLower;
    //check to see if decoding
    if (!encode) {
      //if length is uneven make result variable false
    const decodingArray = doSplit.map(split => {
        if (split.length % 2 === 1){
          result = false;
        // but if length is even decode   
      } else {
        //placeholder variable for the number of characters in split
        const origSplitLength = split.length;
          //do a for loop that loops over every 2nd number, starting with first
          for (let i = 0; i < split.length; i += 2){
            //placeholder for the first number and the 2nd number in the currently iterated place
            const numberPair = (split[i] + split[i + 1]);
            //do a for in loop to run through the alphabet object
            for (let key in alphabet){
              //if the alphabet thing and numberPair match add the alphabet things value to split
              if (key === numberPair) split += alphabet[key];
            }
          }
          //give result the value of split removing the initial value of split 
          result = split.substring(origSplitLength);
        }
        //return the result of the inputSplit map
        return result;
      });
      // if result not false join the decodingArray with a space
      if (result) result = decodingArray.join(" ");
      return result;
    } 

    //if encoding make doArray be an array of each character
    if (encode) {
      doArray = [...doLower];
      //do a map and a for in loop to check doArray item and the alphabet values are equal 
      doArray.map(doChar => {
        for (let key in alphabet){
          //use .includes() rather than strict equal to allow for "(i/j)""
          if (alphabet[key].includes(doChar)){
            result += key;
          } 
        }
      });
      return result;
 return result;
    }  
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };