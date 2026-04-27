---
tags:
  - csc110
Main Topic: "[[]]"
---
# Runtime analysis of nested loops
## [[CSC110 - CSC110 Lecture Notes - 9.4, 9.5]]
- If two loops depend on `n` then we can say that we can multiply `n` to `n` however if there is a constant like `range(10)` then we would multiply by 10.(`10n`) but since this loop is fixed it is just a [[basic operations]] and we can say that the [[Runtime]] is `n`
### For loops with different variables
- [9.5 Analyzing Algorithm Running Time](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/09-runtime/05-basic-algorithm-analysis.html#:~:text=Loop%20iterations%20with%20changing%20costs)
- Refer to the link and see 
- The basic idea is that you can use the [[Summation Formula]] to devise how bigger loops are going to work.([[Summation Formula for runtime analysis]])

### Writing the analysis
> - For each for loop, determine the _number of iterations_ and the _number of steps per iteration_.
> -When you see statements in sequence (one after the other), determine the number of steps for each statement separately, and then add them all up.
   -When dealing with nested loops, start by analyzing the inner loop first (the total steps of the inner loop will influence the steps per iteration of the outer loop).

## Miscellanaeous

- The reason you use summation is that it is just another representation of adding the number of times the loop occurs just like multiplying the main loop to the inner loops.
- So using either would give the same answer.

> [!caution] Don’t forget to subtract 1 when you are dealing with the length directly in a range




