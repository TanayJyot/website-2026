---
tags:
  - csc110
Main Topic: "[[Mutability]]"
---
# Aliasing

## From [[CSC110/Lectures/Week 6 Lecture 2]]

- Happens with [[Functions]] too. (As well as [[List]]s) 
- [[Object Mutation]]  changes aliases while [[Variable Reassignment]] does not do so.
- [[Variable Reassignment]] does not allow for [[Aliasing]] to occur.

## 
This is similar to [[a.k.a]]
- Does not occur with [[primitive]] types.
- If an object is [[immutable]] like a string then aliasing does not work either.
```java
String name = new String("Justin Trudeau");String primeMinister = name;primeMinister = primeMinister.replace('u', 'U');System.out.println(name);System.out.println(primeMinister);
```
- when you use the replace method here then it returns another object which then gets stored in primeMinister
- 