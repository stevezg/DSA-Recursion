
function countSheep(number){
    //base case
    if(number===0){
        return ;
    }
else{
    console.log(number, "Another sheep jump over the fence");
    countSheep(number -1);
}}

// countSheep(5);


let CSI = (number) => {
  for(let i=0;i<=number;i++){
  console.log(`${i} Another sheep jumps over the fence`)
  }

}
CSI(5)
