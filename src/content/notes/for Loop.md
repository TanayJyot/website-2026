---
tags:
  - csc110
  - csc111
Main Topic: "[[]]"
---
# for Loop
##


```python
for n in range(5):
print n 
```
prints out everything up till 5 except 5. 

Uses [[range()]] and [[‘in’ Operator]]

- Known number of iterations

## [[16.1, 16.2, 16.3, 16.4]]

```python
class ForRange(Statement):
    """A for loop that loops over a range of numbers.

        for <target> in range(<start>, <stop>):
            <body>

    Instance Attributes:
        - target: The loop variable.
        - start: The start for the range (inclusive).
        - stop: The end of the range (this is *exclusive*, so <stop> is not included
                in the loop).
        - body: The statements to execute in the loop body.
    """
    target: str
    start: Expr
    stop: Expr
    body: list[Statement]
```

Complete this #csc111/question 
