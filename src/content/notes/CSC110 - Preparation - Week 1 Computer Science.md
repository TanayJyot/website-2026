---
annotation-target:
---
**Class code:** #csc110 
**Subjects/topics:** #cs 
**Date:** 2023-09-10
**Prof/TA:**[[Sadia Sharmin]]
___

# What do you already know/what can you relate?
[[boolean type]]
[[String]]
[[console]]
[[Python]]
[[Arrive Ready To Computer Science - Knowledge Base - formal language]]
[[programming language]]
[[MITx course - Structured Types - Tuples and Lists]]
[[MITx course - Structured Types - Dictionaries]]
[[PUMP 2 - Knowledge Base - Set Builder Notation]]
[[MITx course - Simple Programs - Functions]]
# Go through headings and enter questions
- What makes python different from every other programming language?
- What is the role of the prompt?
- Are literals actually used anywhere?
- Why do we start from 1 in Computer Science for Natural Numbers?
- What does ^ do in Python or is it just useless?
- How do we convert a Boolean to a string?
- 



# Notes 
## 1.1 Introducing the python language
- [[Computers are stupid]] so you need to learn how to speak to one. 
- [[MITx course - Knowledge Base - program]] is a set of [[code]]
- [[MITx course - Knowledge Base - syntax]]
- [[MITx course - Knowledge Base - Semantics]]
- [[MITx course - Knowledge Base - interpreter]] to interpret the python code. 
- ![[py file format]]
- ![[python interpreter]]
## 1.2 Using the Python Console
- [[MITx course - Knowledge Base - expression]]
- ![[literal]]
- ![[MITx course - Knowledge Base - Operators#From Week 1 Computer Science]]
- ![[MITx course - Knowledge Base - expression#From Week 1 Computer Science]]
![[CSC110 Lecture 1]]

## 1.3 Representing Data 1: Numbers 
![[PUMP 2 - Knowledge Base - Natural Numbers#From Week 1 Computer Science]]
- [[integer division operator]]
- [[PUMP 2 - Knowledge Base - Division]]
- [[float]] and how numbers stored are [[approximation]] so we need [[MITx course - Knowledge Base - epsilon]]. 
- [[PUMP 2 - Knowledge Base - Integers]] and [[float]] still evaluate to be true. 
```python
3.0 == 3 
# Outputs True
```
[[bool data type]]
[[logical operators]] are used by boolean. 
[[string operators]]
![[MITx course - Knowledge Base - ‘in’ Operator#From Week 1 Computer Science]]
## Representing Data III : Collections 
- ![[Subsets in CS]]
-  [[List Operations]]
- [[Mapping operations]]
![[MITx course - Knowledge Base - ‘in’ Operator]]
## Storing data in variables
### A variable 
![[MITx course - Knowledge Base - variable#From Week 1 Computer Science]]
[[value based memory model]]

## Reading 2 for lecture 2 
### Building Up Data with Comprehensions
#### Set Builder Notation
![[PUMP 2 - Knowledge Base - Set Builder Notation#From Week 1 Computer Science]]

### Set comprehension
![[Set Comprehension]]
### List Comprehension
![[List Comprehension]]
### Dictionary Comprehension
![[Dictionary Comprehension]]
[[MITx course - Knowledge Base - range()]]
What [[Comprehension of data types]] you use determines the output of the program you create. 
[[cartesian product]] 
- You can also take multiple variables to do this.[^1]  [^2]
```python
[[x,y] for x in [1,2,3] for y in  [4,5,6]]
# (x,y) is the more common form used. 
```


- [[MITx course - Structured Types - Tuples and Lists]] are both considered to be forms of [[sequences]] which is why they are put together here. 
		![[CSC110 Lecture 2]]
## Python’s built in functions:
- [[PUMP 2 - Functions(Math)]]
- ![[Binary functions]]
- [[arguments]]
### How functions work:
![[How functions work]]

- [[round function]]
- [[MITx course - Knowledge Base - len()]]
- [[sum()]]
- [[MITx course - Knowledge Base - sorted()]]
- [[max()]]
- [[min()]]
- [[type()]]
- [[help()]]
- [Built-in Functions — Python 3.11.5 documentation](https://docs.python.org/3/library/functions.html)
___
- Too much nesting can be bad.[^3]


### Defining a python function
- A more comprehensive version than that I know of is mentioned. 
![[MITx course - Knowledge Base - parameter]]

We use a syntax like this:
```python
def meafunction(x: float) -> float: 
	return x**2 # This is also a float 
```


![[Type contract]]

![[doctest examples]]

## 1.8 Computer Science

- You can use the RGB colour palette with python.
- 
[2.4 Methods: Functions Belonging to a Data Type](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/02-functions/04-methods.html)
- You use a colour model to represent colour
- You start from black because there is no light as opposed 





# Respond to your questions
- ^ is part of a bigger [[MITx course - Knowledge Base - Operator Precedence]] that I am unaware of. 



# Your explanation(in voice)




# Summary 


## What can you link to this topic?


___
# Questions:

[^1]: When is it better to use sets over lists. 
	Sets help with [[Efficiency]] in a large enough program. 
[^2]: How is this used as well **Edit**: Answered above 
[^3]: Even variable occupy space so isn’t having too many variables making the program inefficient. #csc110/questions 