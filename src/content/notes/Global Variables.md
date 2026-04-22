---
tags: 
Main Topic: "[[]]"
---

# Global Variables:
- These should be used with caution because they can have side effects. 
- You can use variables that exist only within a [[variable scope]] to a [[global scope]]. 
- Use [[global method]].
```python 
def BigNumber(number):
    global Counter
    Counter +=1
    if number>= 100 :
        return number
    else:
        return BigNumber(number+10)

Counter = 0
print(BigNumber(10))
print(Counter)
# Outputs:
#100
# 10

```


## [[CS50m/Lecture 1]]
- You can declare these by doing
```js 
thisIsGlobal = 10
```
- basically anything that can be done without 