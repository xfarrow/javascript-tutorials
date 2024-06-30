// https://javascript.info/callbacks

entryPoint();

function entryPoint () {
  
    execute_action('something', function (error, time_of_completion) {
      if (error) {
        console.log('Something happened');
      } else {
        console.log('Time of completion: ' + new Date(time_of_completion).toDateString());
      }
    });
    console.log("I don't need execute_action's value");
  }

  function execute_action (param, callback) {
    if (param == 'something') {
      console.log('Executing action: ' + param);
      callback(null, Date.now());
    } else {
      // We can call callback with one argument even if
      // the signature states two parameters.
      callback(new Error('Invalid parameter'));
    }
  }

  /*
    This is useful when, for example, execute_action performs slow operations
    (such as I/O, HTTP requests etc) and we need its result to continue a
    specific operation (in this case the date of completion), without blocking
    other portions of code that do not need such value, in this case
    "console.log("I don't need execute_action's value");"

    But please note that this is only an example. In this code all
    operations will be executed synchronously, but this allows us
    to understand the basics of this mechanism.

    Output:
        Executing action: something
        Time of completion: Sun Jun 30 2024
        I don't need execute_action's value
    
  */
  