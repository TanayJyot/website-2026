---
tags:
  - csc110
  - csc111
Main Topic: "[[]]"
---
# assignment statement
##
[[parallel assignment statement]]
[[Augmented assignment statements]]
## [[16.1, 16.2, 16.3, 16.4]]


```python
class Assign(Statement):
    """An assignment statement (with a single target).

    Instance Attributes:
        - target: the variable name on the left-hand side of the equals sign
        - value: the expression on the right-hand side of the equals sign
    """
    target: str
    value: Expr

    def __init__(self, target: str, value: Expr) -> None:
        """Initialize a new Assign node."""
        self.target = target
        self.value = value

    def evaluate(self, env: dict[str, Any]) -> ...:
        """Evaluate this statement with the given environment.
        """
        
		env[self.target] = self.value.evaluate(env)
```

- 