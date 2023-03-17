for(var i=1; i<101; i++) {  //They didn't use '=' and instead 1 highter then 100 at 101 so it will count 100.
  if(i % 15 == 0) { // instead of 2 conditions only % '15' to compare divisible of 3 and 5.
      console.log("FizzBuzz");
  } else if(i % 5 == 0) {
      console.log("Buzz");
  } else if(i % 3 == 0) {
      console.log("Fizz");
  } else {
      console.log(i);
  }
}