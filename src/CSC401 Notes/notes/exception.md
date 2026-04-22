---
tags:
  - csc207
Main Topic: "[[]]"
---
# exception
## [[Week 10 Lecture 2]]
- There is a [[dataclass]] called exception.
- [[raise]]
```python
class EmptyStackError(Exception):  
"""Exception raised when calling pop on an
```

This class would be outside the main class and would be called out within the python class. 

---
## CSC369

- allows us to interrupt a running process because it might be doing something it is not supposed to and then transfer control back to the OS so that we can take the appropriate action (like telling the user yo this is not allowed)

##

- [[throwable hierarchy]]
- ![[Pasted image 20241023124132.png]]
	- Exceptions work in a hierarchy so because of that it will be very weird if the Use Case interactor in the application business rules layer is handling something from SQL which is in Frameworks and drivers and is not even in the same layer. [[dependency inversion principle]].
	- All it should know is that there is “some” DataAccessException but it does not need to know that it is coming from SQL.

##
- Exceptions is stuff thrown by the program when something goes wrong. 
- Exceptions can be thrown by the program]
- Or we can use [[try catch]] blocks to implement certain actions in case of an exception. 
- ![[Pasted image 20241210163554.png]]
- ![[Pasted image 20241210163705.png]]
	- We are literally the ones throwing the exception and the ones catching the exception which makes the fact that we are using exceptions pretty pointless. 
-   ![[Pasted image 20241210163822.png]]
- We can also [[try catch]] with multiple catches for different exceptions and then have a [[finally]] in the end for default actions that must happen anyways after the exceptions and other stuff is done throwing.[^1] 

### Things to note
- Leave only for exceptional stuff
- Throwing and catching should not be in the same method
	- Throw low and catch high

###
- [[checked exception]]
- [[unchecked exception]]
- [[runtime exception]]

### What to throw
- throw specific exceptions of classes like `UnSupportedOperationException`

### When to Throw
![[Pasted image 20241210165855.png]]

### Extending Exception
- ![[Pasted image 20241210164956.png]]
	- You can either have it as a static class in `MyClass` or have it as a part of a different class.

###
![[Pasted image 20241210170322.png]]
- You can wrap a low level exception with data to help the high level exceptions.
- 