---
tags: 
aliases: []
---
# struct
##
- ![[Pasted image 20250202204338.png]]
-  When you are running struct in functions you would have to use the address of the struct to actually be able to change values. 
- Then you can use arrow notation on the pointer of the struct.

```c
struct s;
struct *p;

struct student s;
struct *student p; 

// Assume you have added values for student here

...

p = &s;
p->gpa = 3.8;

```
