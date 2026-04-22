---
tags: 
aliases:
  - specification analysis
---
# Function Specification
##


## Specification:
- The basic understanding of the user of the function and the developer on the parameters on which the function will operate. 
- Consists of in a sense:
	1. **Assumptions/Preconditions**:What the user must be assuming about the function. Basically the limits of the parameter.(The type of parameter, etc.) **Edit:** We mention the predicates/description that the input of the function follows. These are called the [[CS preconditions]]
	2. **Guarantees**: if the functions is called according to the assumptions, then how the function must behave. This is the [[postcondition]] 

- We use [[docstring]] in python to do this:
```python
def func(x, y = 10):
    """
    This function has been created to print the greaters value. The values in the variables must be integers or floats. 
    Inputs are taken as integer and there is no return. 
    """
    if x > y:
        print("x is greater")
    else:
        print("y is greater")

func(5)
```

___
## 
- We show the initial data that can be seen in the top sense as classes.