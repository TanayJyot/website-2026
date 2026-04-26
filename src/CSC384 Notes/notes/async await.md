---
tags:
  - cs50m
aliases:
---
# async await
##

```js 
async function doesSomething(){  
    const value = await fetch(url)  
    return value  
}
```

- The big idea is that you use it wherever the function is asynchronous but you want the program to execute the rest of the code while waiting for the function to run.
- 