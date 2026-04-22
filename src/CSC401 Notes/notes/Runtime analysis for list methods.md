---
tags:
  - csc110
Main Topic: "[[]]"
---
# Runtime analysis for list mutations
## [[9.6, 9.7, 9.8, 9.9]]
```python
def squares_reversed(numbers: list[int]) -> list[int]:
    """Return a list containing the squares of the given numbers, in reverse order."""
    squares_so_far = []

    for number in numbers:
        # Now, insert number ** 2 at the START of squares_so_far
        list.insert(squares_so_far, 0, number ** 2)

    return squares_so_far
```
- In the loop, the loop would iterate n times and the [[list.insert()]] is almost like another [[loop]]. 
- The .insert method would have a variable time since the [[basic operations]] differ according to the current length of the list. We can take this as $k$
- So you would have to use [[Summation Notation]] and [[Summation Formula]] to get the output of the loop. 

 
