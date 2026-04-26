---
tags: 
aliases:
  - Backward Induction
---
# Recursion
##
- Technique where a function calls itself. 
> where something refers back to itself
- Recursion is usable as long as it isn’t infinite. 
- The input value changes due to which the recursion stops occurring. 

___
```python
def f(n: int) -> int:
    """Return the sum of the numbers between 0 and n, inclusive.

    Preconditions:
        - n >= 0

    >>> f(4)
    10
    """
    if n == 0:
        return 0
    else:
        return f(n - 1) + n
```
- The reasoning is basically a [[domino effect]]
- opposite of [[Mathematical Induction]].
- If a term that is the definition also comes within the definition then it sits well with recursion.
- 