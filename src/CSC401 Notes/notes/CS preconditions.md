```python

def max_length(strings: set) -> int:
    """Return the maximum length of a string in the set of strings.

    Preconditions:
      - strings != set()
    """
    return max({len(s) for s in strings})

```
- They also act as assumptions and restrictions when working with functions. 
- You also need to makes sure you specify the input for the [[collection data type]] 
- You can specify the type that will be inputted in the function. 
```python 
def func(dict[str:int]):
...
```

___
- You want these to be as weak as possible so that they work for most inputs. 
	- You get valid inputs and assume the algorithms will always work if it gets those inputs

