---
tags:
  - csc110
Main Topic: "[[]]"
---
# Runtime analysis
## [[9.4, 9.5]]
- When analysing the [[Runtime]] for a program you consider the [[size of input]] as an influnce to runtime and ignore all the [[basic operations]] because they have little to no effect on the runtime.[^1]
	- This is how it becomes more helpful to write in [[asymptotic notation]]
- The aim is to find a function such that the [[Runtime]] of our function is $\in \Theta(f)$.([[Theta (CS)]])

### Conducting a runtime analysis
- You try to find elements that are repeating and consider the operations within them.
- Since we are only in search of [[Theta (CS)]] we can ignore the rest.
- For [[for Loop]] iterative over `n` integers, this would be n.
```python
for i in n:
	print(i)
```

___
> The cost of the assignment statements `sum_so_far = 0` and `i = 0` is constant time. We’ll count this as a constant-time block of code, which is just _1_ step.
- I think one way to simplify this while counting it as one is to think of it like `sum_so_far, i = 0, 0`







- The idea of [[constant running time]] doesn’t mean complete consistency, which is what makes it an [[approximation]]. What I am saying is that there are going to be values that go up or down the line. The line is a way for us to simplifying things for our convenience. ^60b748
![[Pasted image 20231213213719.png]]
#idea make a github repository that does this like makes the graph for functions

[^1]: This concept isn’t clear yet. Do basic operations have two definitions or do I not understand the definition of them. #csc110/todo #csc110/questions 