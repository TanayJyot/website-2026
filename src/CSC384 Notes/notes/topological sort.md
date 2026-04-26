---
tags: 
aliases: []
---
# topological sort
##
- sort items such that certain items occur before others. 
> A topological sort of a directed graph G = ⟨V, E⟩ is a linear ordering of all its vertices such that if G contains an edge (u, v) then u appears before v in the ordering. If the graph contains a cycle, then no linear ordering is possible.

- Intuition: a topological sort of a graph is an ordering of its vertices along a horizontal line so that all directed edges go from left to right.

- Essentially everything can be arranged in a straight line where nothing is going backwards in the line so that it is clear what comes before and after. 
- ![[Pasted image 20250317221219.png]]
- ![[Pasted image 20250317221306.png]]
- #csc263/todo Prove this
	- are we allowed to use the algorithm to do this. 
- 