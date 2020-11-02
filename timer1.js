var myArgs = process.argv.slice(2);
const beep = function (myArgs){
  if (myArgs.length === 0) {
    console.log("enter your intervalls please");
    }
    myArgs.sort();
  for (const myArg of myArgs){
    if (myArg > 0 && Number(myArg)) {
      setTimeout(function() {
        process.stdout.write('\x07');//print char
      }, myArg*1000);
    } else {
      console.log("check out your values please, you have input a negative number or a string");

    }
    
  }
}
beep(myArgs);
