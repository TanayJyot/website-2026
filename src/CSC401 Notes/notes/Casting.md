---
tags: 
aliases:
---
Complicated way of saying type conversion

when converting a float to int for example:
```python
int(3.9)
```
Python will simply output 3

- We cast to change the type of an expression and perform functional operations that exist for that type.
- If this does not work then java will give give us a `ClassCastException`. 

___
- this is also true if you cast a subclass to its original class then you can access the variables of that function even if they are not a part of the subclass.
- In 
```java
Object o = new String("hello");
```
- The compiler would only keep track of the ‘Object’ part and will not care about what is on the other side.
	- So you will have to ensure that you cast with 
```java
char charHere = (String) o.charAt(1);
```
to get the effect of the casting.


