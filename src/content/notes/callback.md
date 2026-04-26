---
tags:
  - cs50m
aliases:
---
# callback
##
- You execute the rest of the program till the asynchronous value is received. 
- We basically make a function that handles the value that is returned by an asynchronous function and call this function a callback.

```js
function doSomethingAsyc(callback){  
setTimeout(function() {callback(1)}, 1000)  
}  
  
doSomethingAsyc(console.log)
```

- This is like the [[key()]] function, but in [[javascript|js]] this is kinda more common ig. 
- 