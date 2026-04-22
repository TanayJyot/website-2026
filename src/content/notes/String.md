---
tags: 
aliases:
---
# String
##
- Strings are [[immutable]]
- any **finite** sequence of characters.
- The empty string is represented by $\epsilon$. 
- [[character]]

##
```c
char text[20] = "hello"; // or
char text[20] = {'h', 'e', 'l', 'l', 'o', '\0'};
```

- both of these ways of defining strings ensure that every character after `o` would be a null terminating character. 
- if you don’t put a value in the bracket then the array would be created with +1 space of the string for the [[null terminating character]]. 
- [[string literal]]
- [[strlen]]
- [[strcpy]]
- [[strcat]]
- [[strchr]]
- [[strstr]]
- [[struct]]