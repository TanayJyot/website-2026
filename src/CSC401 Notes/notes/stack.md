---
tags:
  - csc110
Main Topic: "[[]]"
---
# stack
## [[10.4, 10.5]]
- Follow [[Last In First Out Behaviour]]
- Seems to follow something similar to [[list.append]] and [[list.pop()]] and `stack ==[]`(stack is empty)
- This is basically[^1] how the [[function call stack]] and [[stack frame]] thus it also seems that it facilitates [[Recursion]].
- [[undo button]] would be based on stacks.
### Stacks using lists
- Refer to [10.5 Stacks](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/10-abstraction/05-stacks.html#:~:text=Implementing%20the%20Stack%20ADT%20using%20lists)

### Attributes and the class interface
- If you use a [[List]] to create a stack, you would also have to see whether you want the user to use the rest of the [[list methods]] on the stack.
- If you don’t want them to use these different functionalities you would have to make sure that the [[List]] is not available to the user but only the [[stack]] is.
- To do so you will create a [[private instance attribute]]

### [[Runtime analysis]] on stack
- We prefer to not add and remove elements in the front rather than the back since:
	- We prefer to use [[list.append]] over [[list.insert()]] as it has a lower runtime.
	- Same applies for [[list.pop()]] as if we do it from the front it will be slower as there will be [[Indexing]] required.




[^1]: Is this true? #csc110/questions 
