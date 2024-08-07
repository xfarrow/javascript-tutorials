# Asynchronous JavaScript

JavaScript is single-threaded but it can still take advantage of asynchronous
programming.

When we say JavaScript is single-threaded, we mean that we cannot write
multithread/concurrent code without using JavaScript APIs. In fact,
despite for us it appears single-threaded, it takes advantage of the
`libuv` library, allowing the engine to be effectively multithread.

Another way to put it is that we have one and only one Call Stack.

In order to do that, JavaScript uses
* The libuv APIs which allow multithreading
* The Event Loop Queue

## Explaination
JavaScript provides a set of APIs, including `setTimeout` and `fetch`, which
are offloaded to the libuv library when called. The libuv library handles the 
underlying operations, such as timer management and HTTP requests, respectively.

While `libuv` performs these operations, our JavaScript code continues its
execution, without being blocked. That's why we said that the engine is
multithreaded.

Both `setTimeout` and `fetch` have associated functions, known as callbacks, that
are executed once the operation has completed.
Since the engine cannot directly push these callback functions onto the call stack
without disrupting the current flow of execution, it instead places them in a 
queue called the "Event Loop Queue". When the call stack is empty, the engine
checks the queue and, if there are any pending callbacks, proceeds to execute them.

**Example**

```javascript
setTimeout(() => console.log('I will go in the event loop queue first'), 1000);
console.log('I am in the stack');
```

What is happening here? `setTimeout` is a JavaScript API which will be taken care
of by the `libuv` library which will be responsible for checking when 1000ms have passed.
**Concurrently** to the `libuv` library doing what it has to do, the engine executes
`console.log('I am in the stack');`.
When 1000ms have elapsed, the callback function associated with the timer (console.log)
gets enqueued in the Queue.
Since there is nothing to do in the stack, the callback pushes the callback onto the
stack and executes it.

## Useful resources
* https://www.youtube.com/watch?v=lqLSNG_79lI
* https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
* https://www.youtube.com/watch?v=eiC58R16hb8