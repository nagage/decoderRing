// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false
    let alphabet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",'r','s','t','u','v','w','x','y','z']
    let alphabet2 =[...alphabet]
    if(alphabet2.length !== 26){ //testing for false statements
      console.log(false)
      return false
    }
  isUnique = null
  for (let i=0; i<alphabet2.length; i++){
    for(let j=0; j<alphabet2.length; j++){
      if(i == j)
        continue;
      if(alphabet2[i] == alphabet2[j]){
        isUnique = false
      }
    }
  }
  
  if(isUnique === false){
    console.log(false)
    return false
  }
  
  if (encode=== true){ //encoding function
  input = input.toLowerCase()
  inputArr = [...input]
  console.log(inputArr)
  let arrIndex = []
  for (let i = 0; i<inputArr.length; i++){
    if(inputArr[i] === " "){
      arrIndex.push(" ")
    }
   if(inputArr[i] !== " ")
   {for(let j=0; j<alphabet1.length; j++)
     if(alphabet1[j]===inputArr[i]){
       arrIndex.push(alphabet1.indexOf(alphabet1[j]))
     }
   }
    }
  console.log(arrIndex)
  let result = []
  for (let i=0; i<arrIndex.length; i++){
    if(arrIndex[i] === " "){
      result.push(" ")
    }
   if(arrIndex[i] !== " "){
     for (let j=0; j<alphabet2.length; j++){
     if (arrIndex[i] === " "){
       console.log("Iam here")
       result.push(" ")
     }
     if(arrIndex[i] === alphabet2.indexOf(alphabet2[j])){
       result.push(alphabet2[j])
     }
   }
  
    }
    }
    console.log(result.join(''))
    return result.join('')
  }
  if (encode=== false){ //decoding function
  let inputArr = [...input]
  let inputIndex = []
  let result =[]
  console.log(inputArr)
  for (let i = 0; i<inputArr.length; i++){
    if(inputArr[i] === " "){
      inputIndex.push(" ")
    }
    if (inputArr[i] !== " "){
      for (let j=0; j<alphabet2.length; j++){
        if(inputArr[i] === alphabet2[j]){
          inputIndex.push(alphabet2.indexOf(alphabet2[j]))
        }
      }
    }
  }
  for (let i=0; i<inputIndex.length; i++){
    if(inputIndex[i]=== " "){
      result.push(" ")
    }
    if(inputIndex[i] !== " "){
      for(let j=0; j<alphabet1.length; j++){
        if(alphabet1.indexOf(alphabet1[j]) === inputIndex[i]){
          result.push(alphabet1[j])
        }
      }
    }
  }
  console.log(result.join(""))
  return result.join("")
  }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
