---
tags:
  - csc111
Main Topic: "[[]]"
---
# statement
##

- It is simply a manner of combining expressions. 
- It may not give away an immediate value unlike an expression which will do so. This is what differentiates it
[[literal]] $\subseteq$ [[expression]]  $\subseteq$ statements 
- since we know that [[statement]] would contain [[expression]] we can use this to create a parent class for [[expression]]s:
## [[16.1, 16.2, 16.3, 16.4]]
- We need statements because for things like [[binary arithmetic operator|BinOp]] you can only use stuff from the [[expression]] class.
	- So we need another data type which will not always give a value.
	- You cannot add two [[assignment statement]]s!!!

```python
class Statement:
    """An abstract class representing a Python statement.

    We think of a Python statement as being a more general piece of code than a
    single expression, and that can have some kind of "effect".
    """
    def evaluate(self, env: dict[str, Any]) -> Optional[Any]:
        """Evaluate this statement with the given environment.

        This should have the same effect as evaluating the statement by the
        real Python interpreter.

        Note that the return type here is Optional[Any]: evaluating a statement
        could produce a value (this is true for all expressions), but it might
        only have a *side effect* like mutating `env` or printing something.
        """
        raise NotImplementedError


class Expr(Statement):
    """An abstract class representing a Python expression.

    We've now modified this class to be a subclass of Statement.
    """
```

- Each of the instances of the statement class use expressions to get the value they would work with because they do need a value to work with and an expression is guaranteed to give them that value.
- 






___
## Summary

[^1]: Since statements would any cover something like a `raise NotImplementedError` do we still need those functions in the expression class.