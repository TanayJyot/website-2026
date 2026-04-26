---
tags:
  - cs50m
aliases:
---
# arrow notation
##
- if you use arrow notation instead of using a function then the arrow notation would bind `this` to be the [[object superclass|global object]]. 
```js 
const greeter = {  
    name: 'Tanayjyot',  
    gm: () => {console.log('Good Morning', this.name)}  
}  
  
greeter.gm()  
const greet = greeter.gm.bind({name: 'Singh Chawla'})  
greet()  
// or  
greeter.gm.call({name: 'Singh Chawla'})  
// or  
greeter.gm.apply({name: 'Singh Chawla'})

/** 
Good Morning undefined
Good Morning undefined
Good Morning undefined
Good Morning undefined
*/
```
