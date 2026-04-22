---
tags:
  - csc110
  - cs50m
Main Topic: 
aliases:
  - console.log()
---
# print()
##

Used to output stuff 

In python, if we use ‘+‘ there will be no spaces but if we use ‘,’ there will be spaces placed automatically:

```python
print("Tanay" + "Jyot")
```
Outputs "TanayJyot”
This is just the usual [[Concatenation]]

```python
print("Tanay","Jyot")
```
Outputs “Tanay Jyot”

##
```python
class Print(Statement):
    """A statement representing a call to the `print` function.

    Instance Attributes:
        - argument: The argument expression to the `print` function.
    """
    argument: Expr

    def __init__(self, argument: Expr) -> None:
        """Initialize a new Print node."""
        self.argument = argument

    def evaluate(self, env: dict[str, Any]) -> None:
        """Evaluate this statement.

        This evaluates the argument of the print call, and then actually
        prints it. Note that it doesn't return anything, since `print` doesn't
        return anything.
        """
        print(self.argument.evaluate(env))
```
- 