---
tags: 
aliases:
  - strncat
---
# strcat
##

```c
char *strncat(char *s1, const char *s2, int n);
```
- always adds a [[null terminating character]].
- adds at most `n` characters from `s2` to `s1`.
