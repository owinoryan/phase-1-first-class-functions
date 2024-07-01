



function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      // Some implementation
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Some implementation
    };
  }
  