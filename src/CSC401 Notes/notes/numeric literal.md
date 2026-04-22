---
tags:
  - csc111
Main Topic: "[[]]"
---
# numeric literal
##
- represents a [[literal]] that is a number
```python
class Num(Expr):
    """A numeric literal.

    Instance Attributes:
        - n: the value of the literal
    """
    n: int | float

    def __init__(self, number: int | float) -> None:
        """Initialize a new numeric literal."""
        self.n = number

    def evaluate(self) -> Any:
        """Return the *value* of this expression.

        The returned value should the result of how this expression would be
        evaluated by the Python interpreter.

        >>> expr = Num(10.5)
        >>> expr.evaluate()
        10.5
        """
        return self.n  # Simply return the value itself!
```
- This is like the [[leaf of a tree|leaf]] of an [[abstract syntax tree]] 
	- Since this is the first function over which things would be layered in order to make operations and more complex stuff to work. 

```python
class Num(Expr):
    def evaluate(self, env: dict[str, Any]) -> Any:
        """..."""
        return self.n[^1]  # Simply return the value itself!
```

[^1]: This does not make a lot of sense because if you want a numeric value then why take in the dictionary or is there another numeric value and we are keeping the dictionary ‘just in case of something’ 🧐 #csc111/question 
