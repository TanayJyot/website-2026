---
tags:
  - cs50m
aliases:
---
# filter()
##
- Takes in a boolean function and gives out all the values in the list that return `True` for that boolean function. 
```js 
function isGreaterthanOne(num){  
    return num > 1  
}  
x = [-1, 0, 1, 10, 2, 4]  
xFiltered = x.filter(isGreaterthanOne)  
console.log(xFiltered)

// Outputs [10, 2, 4]
```

