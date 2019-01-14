const reverseString = (string) => {
  if(string.length === 0) {
    return ""
  }
  else{
    return string[string.length-1] + reverseString(string.slice(0,-1))
  }
}

let string = "sean"
console.log(reverseString(string))
