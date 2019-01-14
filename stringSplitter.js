function stringSplitter(str, splitter) {

  if(str.indexOf(splitter) === -1){
      return [str];
  }
  else {
      let temp = str.indexOf(splitter);
      let tempString = str.slice(0,temp);
      return [tempString, ...stringSplitter(str.slice(temp+1),splitter) ]
  }
}

console.log(stringSplitter('Steve Is sdsfsd', ' '));
