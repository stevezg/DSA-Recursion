const doubleNumber = (array) => {
//base case: array is empty
  if(array.length === 0){
    return []
  }
  else{
    return [array[0] * 2, ...doubleNumber(array.slice(1))]
  }
}
let ar = [1,2,3]
console.log(doubleNumber(ar))
