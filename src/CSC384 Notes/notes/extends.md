---
tags:
  - cs50m
aliases:
---
# extends
##
- This is the way we extend an existing class 

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
