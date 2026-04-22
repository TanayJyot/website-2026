- specific examples for the docstring. 

# From [[CSC110 Lecture 4]]
```python
if __name__ == '__main__':  
import doctest # import the doctest library  
doctest.testmod() # run the tests
```

- As it only outputs when something is true. We can use this to get more feedback:
```python
doctest.testmod(verbose=True)
```
