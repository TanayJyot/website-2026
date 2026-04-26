---
tags:
  - csc110
Main Topic: "[[]]"
---
# interface
- This is where [[Black Box Testing]] happens. 
## [[10.1, 10.2, 10.3]]
- How much of the data can the user access out of all the data available. 
- [[Functions#Interface]]
- [[dataclass#interface]]
- they are like a [[contract]] similar to how there is a [[Type contract]]. 
- Since there is a contract we need to be careful about making changes to the interface.

## [[On Abstract Class, JCF, Interfaces|On Abstract Class, JCF, Interfaces]]
- A list of methods with no body
```java
public interface Shape{
	
}
```

- A class `implements` a shape. 
- [[Trees(CS)]]
- Stuff that doesn’t need to work with [[__init__|constructor]]s.
- We use the [[default access modifier]]
- We use [[isinstance()|instanceOf]] to check if a class still inputs from another class.
- ![[Pasted image 20241210141710.png]]
- You cannot have an interface on the right side of the object 
	- Because how will you construct an interface lol.
	- 

___
- You should be able to plug something in. (Inject code Inject a type c cable)


