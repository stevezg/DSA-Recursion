
function countSheep(number){
    //base case
    if(number===0){
        return ;
    }
else{
    console.log(number, "Another sheep jump over the fence");
    countSheep(number -1);
}}

countSheep(5);
