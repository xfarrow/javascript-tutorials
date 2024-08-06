# The Event Loop

JavaScript is single-threaded but it can still take advantage of asynchronous
programming.

In order to do that, the runtime keeps a structure called The Event Loop which 
is responsible for holding operations to be executed asynchronously with 
respect to the main flow of execution. Whenever we meet a portion of code that
may not be possible to execute now, it is put in the Event Loop. Let's look at
some examples:

1.

```javascript
setTimeout(() => console.log('test'), 1000);
```
`console.log('test')` will be put in the Event Loop.

2.
```javascript
const promise = new Promise(function (resolve, reject) {
console.log('test');
resolve();
}).then(() => {
console.log('test2');
});

```
`console.log('test2')` will be put in the Event Loop.