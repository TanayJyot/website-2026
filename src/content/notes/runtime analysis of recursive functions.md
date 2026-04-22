---
tags:
  - csc111
Main Topic: "[[]]"
---
# runtime analysis of recursive functions
##
1. First consider how many times recursion will occur
	1. How many times the function in the code itself will execute for a particular list for size n
		1. This would be $n+1$ considering that there would be a base case.
2. Then you would consider the actual code and consider how much time that would be taking
3. Calculate the runtime when these functions would be run together, this would be just multiplying them.

![[Pasted image 20240414180324.png]]
