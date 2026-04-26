---
tags:
  - csc110
Main Topic: "[[]]"
---
# private instance attribute
## [[10.4, 10.5]]
- Allows you to create an [[instance]] that isn’t part of the [[interface]]. 
- The details related to the [[instance]] that were in the [[docstring]] earlier will now be mentioned as a [[comment]].
- Opposite of [[public instance attribute]]. 
- You use `_` to signify such an [[instance]]. 
### You can just not see them but still access them
- In [[Python]] even if you make a [[private instance attribute]] it can still be accessed it is just for the user to be aware that they are not supposed to do so. 
```python
>>> s = Stack1()
>>> s.push(10)
>>> s.push(20)
>>> s._items
[10, 20]
```







