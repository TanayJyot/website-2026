---
tags:
  - cs50m
aliases:
---
# super
##
- used to access the original class when modifying a certain class
- [[Inheritance]]
- We need this so that we can use all the available methods from something that is higher on the class hierarchy.

```js
class myset extends Set {  
    /**  
     * a data structure that does not have duplicates and elements can be added or removed from this data structure     * @param arr  
     */  
    constructor(arr) {  
        super(arr)  
        this.originalArr = arr  
    }  
    add(val){  
        super.add(val)  
  
        }
```
