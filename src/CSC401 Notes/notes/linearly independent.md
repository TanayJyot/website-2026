---
tags:
  - mat223
aliases:
---
# linearly independent
## 
### Definition
Let $x, y$ be two vectors
$x$ and $y$ are linearly independent $\iff$ $ax + by = 0$ has a single unique solution only when $a = b = 0$. 

*So basically the linear combination can only come out to be 0 when a and b are both 0 meaning the sum of those two vectors/ the new vector formed can never be 0 on its own.*
**Alternatively** there is no non trivial case(since a = b = 0 is very trivial) where $a\vec{x} + b\vec{y} = \vec0$. 

- They can only add up to 0 if they are on the same line making them linearly dependent in all those cases 
- For them to not add up to 0, they can never be on the same line making them linearly independent.

### Example
Let $x = (2, 1), y = (4, 2)$ 
Prove $x, y$ are linearly dependent.
**Sol:** Since linear dependence is the opposite of linear independence, consider the negation of linear independence.
$$\exists a, b \in \mathbb{R} : ax + by = 0 \land a \neq 0 \land b \neq 0$$ Take $a = 2$ and $b = -1$ then $2(2,1)-1(4,2)=(0,0)$ 
Therefore by proving the negation we have shown that $x, y$ are not linearly independent thus they are linearly dependent.
___
### 
![[Pictures - Pasted image 20240518175839.png]]
