---
tags:
  - csc110
Main Topic: "[[]]"
---
# worst-case running time
## [[Week 9 Lecture 3]]
- In a graph of [[basic operations]] this would be the one that is the highest. 
## [[9.6, 9.7, 9.8, 9.9]]
- You cannot necessarily predict the [[Runtime]] of every function.  
```python
def has_even(numbers: list[int]) -> bool:
    """Return whether numbers contains an even element."""
    for number in numbers:
        if number % 2 == 0:
            return True
    return False
```
- This function depends on the [[value]] of the runtime rather than the number of [[basic operations]] performed.
- However, we can still use basic operations to figure out the maximum [[Runtime]] a function can have. 
- Since it is difficult to find the [[Runtime]] of each and every scenario you would focus on finding the [[Big ‘O’ Notation]] and [[lower bound]] and then if both of them are the same then that would be our [[Theta (CS)]]. 

### Runtime analysis
#### Upper Bound

- [[absolute dominance]]
- What will absolutelly dominate will also be the [[Big ‘O’ Notation]] for the function.

#### Lower Bound
- What we are saying is that for the big value that f contains (for example 50). the biggest value would at least be this number.
- The main difference between upper and lower bound is that the lower bound uses an [[existential quantifier]].  

$$\exists c, n_0 \in \R^+,~ \forall n \in \N,~ n \geq n_0 \Rightarrow
\big(\exists x \in \c I_{func, n},~ \text{running time of executing
$func(x)$} \geq c \cdot f(n) \big)$$
> Or really, our goal is to find an **input family**—a _set_ of inputs, one per input size �—whose runtime is asymptotically larger than our target lower bound.

- If you pick the entire list n to be containing only 1s then you can directly declare that $\Omega(n)$ will work. 
- Then you can just use the same [[Runtime analysis]] to get your answer. 
- #csc110/todo  go through it again. 





