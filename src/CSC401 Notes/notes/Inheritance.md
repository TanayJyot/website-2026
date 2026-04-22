---
tags:
  - csc110
Main Topic: "[[]]"
---
# Inheritance
- It is like the [[attribute]] of a function but instead of an [[abstract data type]]
```python 
def push_and_pop(stack: Stack, item: Any) -> None:  
	stack.push(item)  
	stack.pop()
s1 = stack1()
push_and_pop(s1, 10)
```
- You can assign any stack that is part of the [[stack]] [[Method in CS]]. It would inherit which ever stack you call out. 
- Think of it like a [[parent child relationship]]. The idea is that there are basic rules that all stacks have to follow as kids but they have their own unique abilities. Parents give the [[value]]s. Children have their own [[character]]. 
- [[Method in CS]] are also inherited from its upper class. 
- Also allows us to specify the [[public interface]] we are dealing with.
- Create multiple implementations of doing the same thing without complicating it for the user. 

___
- [[object superclass]]
- If something is a part of the `Child` class then it can be replaced by the `Parent` so the Child can substitute for the parent like when we say
	- Using the same Parent Child analogy, the child can go to an event instead of the parent but the parent cannot go to the child’s friend’s birthday party. 
```java
List<String> arrayList = ArrayList<String>
```
- Here ArrayList can do its job because it is a `Child` of the list of arrays
