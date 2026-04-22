---
tags:
  - csc110
Main Topic: "[[]]"
---
# Theta (CS)
## [[CSC110/Lectures/Week 8 Lecture 2]]
- It is the case where you take such values of $c$ so that you can use the same $f(n)$. This can help you to understand where a function lies and when it helps. 
- The way you use it to prove which algorithm is better by manipulating the values. 
- [[tight bound]]
## [[9.3]]
- This is like a combination of [[Big ‘O’ Notation]] and [[lower bound]]
- 
## [[Week 8 Lecture 3]]
- even if you add a constant to $\Theta$ it doesn’t matter, because it would just yield a very negligible change. 

## [[Week 9 Lecture 3]]
- Makes it easier to compare within programs. 
- You can do this as long as the definition of [[Big ‘O’ Notation]] is maintained(eventually dominated by).


## [[9.6, 9.7, 9.8, 9.9]]
### Assuming tight bounds
- For a bound to be tight both $\mathcal{O}$ and $\Omega$ need to be the same. We tend to assume this is true but the palindrome example [9.8 Worst-Case Running Time Analysis](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/09-runtime/08-worst-case-running-time-analysis.html#:~:text=Don%E2%80%99t%20assume%20bounds%20are%20tight) tells us that sometimes it is not.
- You might have to find $\Omega(n)$ to suit your requirements sometimes. 
-   Go through this part once again. 