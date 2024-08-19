// https://javascript.info/async-await

// An async function always returns a promise. Other values are wrapped in a resolved promise automatically.
// Async and await are merely syntactic sugar in order to make Promise usage easier

async function f1 () {
  return 1
}

f1().then(console.log) // 1

// The keyword await makes JavaScript wait until that promise settles and returns its result.
// It can be used in async functions only.
// Let’s emphasize: await literally suspends the function execution until the promise settles,
// and then resumes it with the promise result.
async function f2 () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000)
  })
  const result = await promise // wait until the promise resolves (*)
  console.log(result) // "done!"
}
f2()

// The code in the same function after "await"
// is to be intended in the "then()" of the primise. This means
// that after await (but before the completion of the Promise),
// the flow of execution goes out that code block. For example
// consider the following example:
async function exampleAsyncFunction () {
  console.log('Before await')
  await new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 500)
  }) // Pauses execution here until the promise resolves.
  console.log('After await')
}
console.log('Start')
exampleAsyncFunction()
console.log('End')

// The result will be:
//  Start, Before Await, End, After await
// "End" comes before "After Await" because the
// flow of execution goes to the caller
// when await is invoked.

// Questions
//
// Why await only works in async function in javascript?
// https://stackoverflow.com/questions/49640647/why-await-only-works-in-async-function-in-javascript
//
// Why using async-await
// https://stackoverflow.com/questions/42624647/why-use-async-when-i-have-to-use-await
//
// Be mindful: it is not possible to create an async function from scratch (such as
// setInterval o fetch)
// https://stackoverflow.com/questions/61857274/how-to-create-custom-asynchronous-function-in-javascript
//
// Another question that may be interesting
// https://stackoverflow.com/questions/42624647/why-use-async-when-i-have-to-use-await
