---
tags: 
aliases: []
---
# conditional entropy
##
- since we know that two variables share some information between each other, we can take advantage of this shared information to calculate how *much* information you need about one variable given you know the other
	- because knowing the other already gives you access to some info you need 
- $$H(Y|X) = \sum_{x \in X} p(x) H(Y|X = x)$$
- #csc401/todo this can def be an exam question 
- ![[Pasted image 20260420121635.png]]
- ![[Pasted image 20260420121644.png]]
- 