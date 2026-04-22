---
tags: 
aliases:
  - strncpy
---
# strcpy
##
```c
char *strcpy(char *s1, const char *s2);
char *strncpy(char *s1, const char *s2, int n);
```
- problem with `strncpy` is that it isn’t guaranteed to add a null terminating character. 
- So add this yourself. 
- 