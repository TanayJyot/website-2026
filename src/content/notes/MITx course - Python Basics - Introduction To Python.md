# Introduction:
[[Computational Thinking]]

All computers do is 
- perform calculations
	- Arithmetic 
	- Logic(comparing true and false values)
- remember things.

We need good algorithmic design to have our jobs occur faster.

Some #problems in computing are simply too complex to solve which we can use to out benefit for something like [[encryption]]. Our little [[Unfair Advantage]].

# Knowledge

[[Declarative Knowledge]]
[[Imperative Knowledge]]

You use [[Imperative Knowledge]] to create an [[algorithm]].

[[Computer Science]]

#  Machines

[[MITx course - Knowledge Base - fixed program computer]]
[[MITx course - Knowledge Base - stored program computer]]

Now we need to think about the way we can write what we want so that the computer can do it for us.

![[Basic Machine Architecture]]


[[Basic Primitives]]





# Languages

We use [[MITx course - Knowledge Base - expression]] in a programming language.

**Values** give us the meaning of these expressions.

- Every programming language can be said to be setup of: ^6c7608
	1. Set of primitives ^700b63
	2. A way of combining those primitives
	3. A way of taking a complex expression and treating it like it got more value.

A language has a 
- [[MITx course - Knowledge Base - syntax]]
- [[MITx course - Knowledge Base - Semantics]]

___
- In real life a phrase in language can have multiple meanings such as “Flying planes can be dangerous” but in programming there is only one meaning.
- However this meaning may not be what the programmer wanted it to be.

#### Where things go wrong?

- An error in [[MITx course - Knowledge Base - syntax]]
	- There are very common and the programming language can catch them easily
- An error in static [[MITx course - Knowledge Base - Semantics]]
	- Some language check these before running programme. 
	- Can lead to tedious behaviour. 
- None of these errors and program executes but with a different meaning than intended. Program:
	- Crashes 
	- Runs forever
	- gives an answer but different than expected. 

![[MITx course - Pictures - Pasted image 20230304163734.png]]

# Types:

[[MITx course - Knowledge Base - program]]

- [[MITx course - Knowledge Base - program]]s manipulate **objects**
- Objects have a **type** that tell us what kind of thing they do and we can write code according to what they do.
-  The **type** determines how the program uses the object.
- Objects can be of two forms:
	- [[MITx course - Knowledge Base - Scalar Objects]]: Cannot be subdivided
	- Non-Scalar: Can be subdivided. 

Program to check if number is even(extension):
```python
a = int(input("Enter a number"))

if a%2==0: 
    print("the number is eeven party party party")
else:
    print("aww")    
    


```

[[MITx course - Knowledge Base - Casting]]

If you return a value by simply typing
```python
3+2
```
into the console, the console **returns** the value of 5
However if we type:
```python
print(3+2)
```
the output given is 5 but the value returned is of **NoneType**.

___
[[MITx course - Knowledge Base - expression]]

[[MITx course - Knowledge Base - Operators]]


[[MITx course - Knowledge Base - Operator Precedence]]

# Variables:

Values are stored in name tables. 

# Operators and Branching:
![[MITx course - Pictures - Pasted image 20230305224615.png]]

![[MITx course - Pictures - Pasted image 20230305224831.png]]
[[Branching Programs]]
# Summary:
- Programs are made to make algorithms. 
- These programs are represented by [[MITx course - Knowledge Base - syntax]] and [[MITx course - Knowledge Base - Semantics]]. 
- Everything can be done in the basic 6 **primitives** but we need more to make our job easier. 
- The type is gone when you [[MITx course - Knowledge Base - print()]] something. 
>[!Remember] Integer Divide “//”

- When a condition occurs, the program *branches* into True or False. 
- Time to run program is linear to the length of it. 















