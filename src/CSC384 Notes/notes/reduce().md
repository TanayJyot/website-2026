---
tags:
  - cs50m
aliases:
---
# reduce()
##
```js
function addTwo(num1, num2){  
    return num1 + num2;  
}  
x = [1, 2, 3, 4]  
addedX = x.reduce(addTwo)  
console.log(addedX)

// Outputs 10 
```

- The idea is that reduce would take the first 2 values and make them 1 value by exexuting, then make that value the `num1` value and the next value as `num2`keeps doing so until it reached 4 as the `num2` value. 

```js 
function max(num1, num2){  
    if (num1 > num2){  
        return num1  
    }  
    else {  
        return num2  
    }  
}  
x = [5, 2, 10, 7]  
max_of_x = x.reduce(max)  
console.log(max_of_x)
```
- I feel like this makes a better example because we are comparing the output of the first 2 values to the next value and so on.
