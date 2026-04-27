---
tags: 
aliases:
---
# linear basis
##
![[Pictures/Pasted image 20240518171742.png]]
$$x, y \text{ is a basis } \iff x, y \neq \vec{0} \land y \neq ax \quad \forall a \in \mathbb{R}   $$

We say $\{x_1, …, x_n\}$ form a basis for $\mathbb{R}^n \iff$ every vector in $\mathbb{R}^n$ can be written uniquely as a [[Linear combination]] of  ${x_1, …, x_n}$ $\iff \{x_1, ..., x_n\}$ are [[linearly independent]] and [[linear span]] = $\mathbb{R}^n$.   

-  [[standard basis]]
- ![[Pasted image 20240930215042.png]]
-  #mat223/question  How do you do these accurately
- ![[Pasted image 20240930222328.png]] What is the relation between these?

___
- We can rewrite vectors w.r.t. a different basis and write the coordinate for that.
- Every vector has a unique solution and one solution to any basis,
	- This is because it is a [[linear basis]] it generates(spans), so it must have a solution. So no pivot in the last column.
	- Since the basis also has [[linearly independent]] vectors it must also be true that the vectors cannot be dependent on each other. 
		- So all other columns will have pivot columns.
- 