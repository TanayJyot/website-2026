---
tags:
  - cs50m
Main Topic: "[[]]"
aliases:
  - iify
---
# immediately invoked function expression
##
- functions that are not attached to the [[object superclass]]. 
- they are defined with the object being used. 

```js 
const sayHello = (function () {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
})()

// IIFEs can also be used to create variables that are inaccessible from the global
// scope
const counter = (function() {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() { console.log(count) },
  }
})()

counter.get()
counter.inc()
counter.get()
```

- This ensures that the count variable will only exist between the declaration and end of the function. 
- [^1]

[^1]: Now sure how these work exactly #cs50m/question
