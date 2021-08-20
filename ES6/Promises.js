// JavaScript Promises
// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

// "Producing Code" can take some time and "Consuming Code" must wait for the result.

const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  },
  function(error) {
    console.log(error);
  }
  
  );