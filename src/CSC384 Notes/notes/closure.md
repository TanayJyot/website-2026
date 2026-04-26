---
tags: 
Main Topic: "[[]]"
---
# closure
##
- Complete figures that have gaps. 
- ![[Pasted image 20240220182133.png]]

## [[CS50m/Lecture 1]]

- Elements of [[scopes]] don’t exist outside the scope. 

```js
function makeFunctionArray(){  
    const arr =[]  
for (var i = 0; i < 5; i++){  
arr.push(function() {console.log(i)}) // because you are putting in functions that do console.log on i and  
// since i has the value 5 at the end that is what is executed in the function  
    // arr would be an array that would store all the values at i}   return arr  
}  
  
const functionArr = makeFunctionArray()  
functionArr[0]() // in this line the 0th function is executed which executes i // and since i has the value 5 that is what happens 'var' does not define the '0' // to be on that position, it defines i to be there


// Outputs 5 
// expected 0 
```

- Since [[let]] exists till the end of the code block and not for the entire function, it does not cause this problem, whereas because [[var]] exists in the function, that makes the function think that i the variable is to be called upon on the 0th position, but since i = 5 that is what ends up executing. 
- 
