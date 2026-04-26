---
tags:
  - csc110
Main Topic: "[[]]"
---
# Runtime analysis for while loops

```python
def my_sum_powers_of_two(numbers: list[int]) -> int:
    """Return the sum of the given numbers whose indexes are powers of 2.

    That is, return numbers[1] + numbers[2] + numbers[4] + numbers[8] + ...
    """
    sum_so_far = 0
    i = 1

    while i < len(numbers):
        sum_so_far = sum_so_far + numbers[i]
        i = i * 2

    return sum_so_far
```
- Here, you need to consider how the variable within the loop is changing and based on that determine the run time.
	1. Find a pattern of how i changes
	2. Devise a formula($i_k = 2^k$, $i_k \ge n$) 
	3. You break down i using the formula you found in the first step. $k \ge \log_2(n)$ 
	4. $\Theta(\log n)$ is the runtime. 
___
## [[CSC110/Lectures/Week 9 Lecture 1]]
- the reason this works is that usually the number of iterations becomes the number of operations so $k$ tells us directly what is happening. 

___
## Miscellanaeous 
> [!caution] Always take the initial value for iteration 0 of the [[while Loop]] in the iteration table. 




