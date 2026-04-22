---
tags:
  - csc110
Main Topic: "[[]]"
---
# module
A .py file that contains python code. 

![[Pasted image 20230408190150.png]]


## [[10.1, 10.2, 10.3]]
### [[interface]]
- The interfaces of everything in the module like the [[Functions]] and [[dataclass]]. 

## [[16.1, 16.2, 16.3, 16.4]]
- We use modules to show a bunch of data so we need a different class that shows all the data together

```python
class Module:
    """A class representing a full Python program.

    Instance Attributes:
        - body: A sequence of statements.
    """
    body: list[Statement]

    def __init__(self, body: list[Statement]) -> None:
        """Initialize a new module with the given body."""
        self.body = body
	

    def evaluate(self) -> None:
        """Evaluate this statement with the given environment.
        """
        env = {}
        for statement in self.body:
            statement.evaluate(env)

```

- This is the [[root]] of the [[abstract syntax tree]]
- 

