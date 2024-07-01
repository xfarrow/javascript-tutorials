// https://javascript.info/promise-basics

/*
    The function passed to Promise is called "executor"
    and gets executed synchronously the moment the Promise is created.
    When the Promise ends, the callback function should 
    either call the "resolve" or "reject" callbacks:
    resolve(value) — if the job is finished successfully, with result value.
    reject(error) — if an error has occurred, error is the error object.

    A Promise can be in one of these three states:
    - Pending (the operation is being processed)
    - Fullfilled (the operation has completed successfully)
    - Rejected 
*/
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 500);
  });
  
  /*
      The first argument of .then is a function that runs when the promise is resolved and receives the result.
      The second argument of .then is a function that runs when the promise is rejected and receives the error.
      The function passed to "then()" is put in the event loop queue!
  */
  promise.then(
    result => console.log('The operation was successful. It returned ' + result),
    error => console.log('The operation was not successful: ' + error)
  );
  
  /*
      Or we can pass only one argument if we're interested only in a positive result
  */
  promise.then(
    result => console.log('The operation was successful. It returned ' + result)
  );
  
  /*
      Or we can pass only one argument to the method "catch" if we're interested
      in negative results only.
  
      promise.catch internally just calls promise.then(null, f)
  */
  promise.catch(
    error => console.log(error)
  );
  
  /*
      finally gets always called
  */
  promise.finally(
    () => console.log('The execution has terminated. Bye')
  );