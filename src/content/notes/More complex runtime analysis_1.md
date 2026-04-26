---
tags:
  - csc110
Main Topic: "[[Runtime analysis]]"
---
# More complex runtime analysis
## [[9.4, 9.5]]
[9.6 Analyzing Comprehensions and While Loops](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/09-runtime/06-analyzing-comprehensions-and-while-loops.html#:~:text=in%20Theta%20bounds.-,A%20trickier%20example,-It%20turns%20out)

```python
def twisty(n: int) -> int:
    """Return the number of iterations it takes for this special loop to stop
    for the given n.
    """
    iterations_so_far = 0
    x = n
    while x > 1:
        if x % 2 == 0:
            x = x / 2
        else:
            x = 2 * x - 2
        iterations_so_far = iterations_so_far + 1

    return iterations_so_far
```
- You take cases where x is even and x is odd and see what happens for them. 
	- In case of even:
		- If x is even you simply get a smaller number since if $4|x$ we can say that x = 4k and $x_1$ will be equal to $2k$ and $x_2$ will be equal to k which is equal to $\frac{x_0}{4}$. 
		- For 4 to divide $x_0$ it must be ≥ 4. So $x_0/4$ is certainly less than $x_0 -1$. 
	- In case of odd:
		- if $x_0$ is odd then $x_1$ will be even since $x_0$ = 4k. $x_1$ will be 8k by applying the formula for odd on both sides. 
		- Dividing this by 2 we would get 4k which is equal to $x_0$ 
- [^3] 
### Runtime Analysis
- Since we know that `twisty` decreases in every 2 iterations, we know it decreases $2(n-1)$ times so we can say that it takes at most 2(n-1) steps. So it is $\mathcal{O}(n)$  
### Improved Claim[^4]
- Will allows you to prove $\Theta(n)$ 

### Twisty example

- You can branch more complicated problems in to different formulas. Since you cannot find a stricter bound you would attempt to find a wider bound by seeing what happens in every 2 iterations. [^2]
- Find more information and use that to find a more precise $\Theta$










___
[^3]: Since there seem to be only 2 branches we have already [[path complete]], so I am not sure what I else I am supposed to take? #csc110/questions  
	Maybe 2≤ x < 4 and x =4 or similar. 
[^4]: prove the improved claim and read twisty again in notes #csc110/todo 