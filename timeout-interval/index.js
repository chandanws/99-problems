(function(){
  // waits a specified amout of time and then fires callback once
  setTimeout(function(){
    console.log('Hello from setTimeout');
  }, 5000);

  // will continue to run unless interval is cleared
  setInterval(function(){
    console.log('Hello from setInterval');
  }, 500);

})();