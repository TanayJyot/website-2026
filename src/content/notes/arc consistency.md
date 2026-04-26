---
tags: 
aliases: []
---
# arc consistency
##
- [[constraint propagation]]
< X,c(X,Y) > is arc-consistent if and only if for every value v in Dx, there exists a value w in Dy, such that (v,w) satisfies the constraint c(X,Y).

- if there are any values that do not follow this constraint then you are better off removing that value because it would anyways not be what gives you the solution
- ![[Pasted image 20251012134529.png]]
- 