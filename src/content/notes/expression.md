Combinations of primitives that is more complex than the primitives but are still recognized by the programming language.

- We combine objects and operators to form expressions.
- An expression will output a value and this value will have types just like the way the elements in the expression will have types. So the element will have types.**Edit**: So in a sense the expression will generate a particular type. 

## From [[Week 1 Computer Science]]
- composed of [[literal]]s
- When run an expression gives a value. 
- So the [[interpreter]] evaluates an expression. 
## How we represent one
- contains everything that is an [[expression]]. 
- Used to do anything that an [[expression]] does.
- We can then use [[Inheritance]] to create multiple expression classes. 


```python
class Expr:
    """An abstract class representing a Python expression.
    """
    def evaluate(self) -> Any:
        """Return the *value* of this expression.

        The returned value should be the result of how this expression would be
        evaluated by the Python interpreter.
        """
        raise NotImplementedError
```

- [[literal]]s will be a type of expression so they would ‘inherit’ the attributes from it. 
- 