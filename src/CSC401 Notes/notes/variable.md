---
tags:
  - csc110
  - csc111
Main Topic: "[[]]"
---
# variable
##

- Used to store information. 
- Have a name and a value 
- Certain words that are used to run the program cannot be used as variables such as ‘int’.
## From [[Week 1 Computer Science]]
> A name that *refers* to a value
- that is why this would be represented as a `Name` class.
## [[16.1, 16.2, 16.3, 16.4]]
- we use the [[variable environment]]
- To evaluate variables in existing environments, we add the variable environment clause to existing functions, like `env: dict[str, Any]` instead of the having two integer classes. 

```python
class Name:
    """A variable expression.

    Instance Attributes:
        - id: The variable name.
    """
    id: str

    def __init__(self, id_: str) -> None:
        """Initialize a new variable expression."""
        self.id = id_


    def evaluate(self, env: dict[str, Any]) -> Any:
        """Return the *value* of this expression.

        The returned value should the result of how this expression would be
        evaluated by the Python interpreter.

        The name should be looked up in the `env` argument to this method.
        Raise a NameError if the name is not found.
        """
        if self.id in env:
            return env[self.id]
        else:
            raise NameError(f"name '{self.id}' is not defined")
```

