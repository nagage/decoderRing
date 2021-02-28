// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(shift >25 || shift <-25 || shift === 0 || !shift){
      return false
    }
     result=[]
     result2=[]
     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",'r','s','t','u','v','w','x','y','z',"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",'r','s','t','u','v','w','x','y','z']
      let lowercase = input.toLowerCase()
      let split = lowercase.split("")
  for (let i=0; i<split.length; i++){
    let letter = split[i]
  if(encode === true){
  if(shift>0){
    if(letter==="a"){
      result.push(0)
    }
    if(letter==='b'){
      result.push(1)
    }
    if(letter==="c"){
      result.push(2)
    }
    if(letter==="d"){
      result.push(3)
    }
    if(letter==="e"){
      result.push(4)
    }
    if(letter==="f"){
      result.push(5)
    }
    if(letter==="g"){
      result.push(6)
    }
    if(letter==="h"){
      result.push(7)
    }
    if(letter==="i"){
      result.push(8)
    }
    if(letter==="j"){
      result.push(9)
    }
    if(letter==="k"){
      result.push(10)
    }
    if(letter==="l"){
      result.push(11)
    }
    if(letter==="m"){
      result.push(12)
    }
    if(letter==="n"){
      result.push(13)
    }
    if(letter==="0"){
      result.push(14)
    }
    if(letter==="p"){
      result.push(15)
    }
    if(letter==="q"){
      result.push(16)
    }
    if(letter==="r"){
      result.push(17)
    }
    if(letter==="s"){
      result.push(18)
    }
    if(letter==="t"){
      result.push(19)
    }
    if(letter==="u"){
      result.push(20)
    }
    if(letter==="v"){
      result.push(21)
    }
    if(letter==="w"){
      result.push(22)
    }
    if(letter==="x"){
      result.push(23)
    }
    if(letter==="y"){
      result.push(24)
    }
    if(letter==="z"){
      result.push(25)
    }
    if(letter===" "){
      result.push(' ')
    }
    if(letter==="."){
      result.push('.')
    }
    if(letter==="?"){
      result.push('?')
    }
    if(letter==="/"){
      result.push('/')
    }
    if(letter==="!"){
      result.push('!')
    }
    }
  
    if(shift<0){
      if(letter==="a"){
        result.push(26)
      }
      if(letter==='b'){
        result.push(27)
      }
      if(letter==="c"){
        result.push(28)
      }
      if(letter==="d"){
        result.push(29)
      }
      if(letter==="e"){
        result.push(30)
      }
      if(letter==="f"){
        result.push(31)
      }
      if(letter==="g"){
        result.push(32)
      }
      if(letter==="h"){
        result.push(33)
      }
      if(letter==="i"){
        result.push(34)
      }
      if(letter==="j"){
        result.push(35)
      }
      if(letter==="k"){
        result.push(36)
      }
      if(letter==="l"){
        result.push(37)
      }
      if(letter==="m"){
        result.push(38)
      }
      if(letter==="n"){
        result.push(39)
      }
      if(letter==="0"){
        result.push(40)
      }
      if(letter==="p"){
        result.push(41)
      }
      if(letter==="q"){
        result.push(42)
      }
      if(letter==="r"){
        result.push(43)
      }
      if(letter==="s"){
        result.push(44)
      }
      if(letter==="t"){
        result.push(45)
      }
      if(letter==="u"){
        result.push(46)
      }
      if(letter==="v"){
        result.push(47)
      }
      if(letter==="w"){
        result.push(48)
      }
      if(letter==="x"){
        result.push(49)
      }
      if(letter==="y"){
        result.push(50)
      }
      if(letter==="z"){
        result.push(51)
      }
      if(letter===" "){
        result.push(' ')
      }
      if(letter==="."){
        result.push('.')
      }
      if(letter==="?"){
        result.push('?')
      }
      if(letter==="/"){
        result.push('/')
      }
      if(letter==="!"){
        result.push('!')
      }
      }
  
  
    }
  if(encode === false){
      if(shift<0){
        if(letter==="a"){
          console.log("here")
          result.push(0)
        }
        if(letter==='b'){
          result.push(1)
        }
        if(letter==="c"){
          result.push(2)
        }
        if(letter==="d"){
          result.push(3)
        }
        if(letter==="e"){
          result.push(4)
        }
        if(letter==="f"){
          result.push(5)
        }
        if(letter==="g"){
          result.push(6)
        }
        if(letter==="h"){
          result.push(7)
        }
        if(letter==="i"){
          result.push(8)
        }
        if(letter==="j"){
          result.push(9)
        }
        if(letter==="k"){
          result.push(10)
        }
        if(letter==="l"){
          result.push(11)
        }
        if(letter==="m"){
          result.push(12)
        }
        if(letter==="n"){
          result.push(13)
        }
        if(letter==="o"){
          result.push(14)
        }
        if(letter==="p"){
          result.push(15)
        }
        if(letter==="q"){
          result.push(16)
        }
        if(letter==="r"){
          result.push(17)
        }
        if(letter==="s"){
          result.push(18)
        }
        if(letter==="t"){
          result.push(19)
        }
        if(letter==="u"){
          result.push(20)
        }
        if(letter==="v"){
          result.push(21)
        }
        if(letter==="w"){
          result.push(22)
        }
        if(letter==="x"){
          result.push(23)
        }
        if(letter==="y"){
          result.push(24)
        }
        if(letter==="z"){
          result.push(25)
        }
        if(letter===" "){
          result.push(' ')
        }
        if(letter==="."){
          result.push('.')
        }
        if(letter==="?"){
          result.push('?')
        }
        if(letter==="/"){
          result.push('/')
        }
        if(letter==="!"){
          result.push('!')
        }
        }
      
        if(shift>0){
          if(letter==="a"){
            result.push(26)
          }
          if(letter==='b'){
            result.push(27)
          }
          if(letter==="c"){
            result.push(28)
          }
          if(letter==="d"){
            result.push(29)
          }
          if(letter==="e"){
            result.push(30)
          }
          if(letter==="f"){
            result.push(31)
          }
          if(letter==="g"){
            result.push(32)
          }
          if(letter==="h"){
            result.push(33)
          }
          if(letter==="i"){
            result.push(34)
          }
          if(letter==="j"){
            result.push(35)
          }
          if(letter==="k"){
            result.push(36)
          }
          if(letter==="l"){
            result.push(37)
          }
          if(letter==="m"){
            result.push(38)
          }
          if(letter==="n"){
            result.push(39)
          }
          if(letter==="o"){
            result.push(40)
          }
          if(letter==="p"){
            result.push(41)
          }
          if(letter==="q"){
            result.push(42)
          }
          if(letter==="r"){
            result.push(43)
          }
          if(letter==="s"){
            result.push(44)
          }
          if(letter==="t"){
            result.push(45)
          }
          if(letter==="u"){
            result.push(46)
          }
          if(letter==="v"){
            result.push(47)
          }
          if(letter==="w"){
            result.push(48)
          }
          if(letter==="x"){
            result.push(49)
          }
          if(letter==="y"){
            result.push(50)
          }
          if(letter==="z"){
            result.push(51)
          }
          if(letter===" "){
            result.push(' ')
          }
          if(letter==="."){
            result.push('.')
          }
          if(letter==="?"){
            result.push('?')
          }
          if(letter==="/"){
            result.push('/')
          }
          if(letter==="!"){
            result.push('!')
          }
          }
      
      
        }
  }
  if(encode === true){
  for (let i=0; i<result.length; i++){
    if(typeof result[i] == "number"){
      result2.push(alphabet[result[i]+shift])}
  else result2.push(result[i])

  }
  return result2.join('')
    }
  if(encode === false){
      for (let i=0; i<result.length; i++){
        if(typeof result[i] == "number"){
          result2.push(alphabet[result[i]-shift])}
      else result2.push(result[i])
      }
        }
        return result2.join('')
  }

  return {
    caesar,
  };
})();



module.exports = caesarModule.caesar;
