---
tags: 
aliases:
---
# try catch
##
```js
async function doesSomething(callback){  
    try {  
    const value = await fetch(url)  
    return value  
} catch(err){  
    callback(err)  
}}
```
