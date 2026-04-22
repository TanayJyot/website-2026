---
tags:
  - csc110
Main Topic: "[[number theory]]"
---
# Greatest Common Divisor









The greatest common divisor (GCD) of two numbers is the largest number that divides both of them. For example, the GCD of 15 and 10 is 5, since 5 is the largest number that divides both 15 and 10.
![[Numbers and Number Sets 1#^2c4bc0]]
From this definition we can determine:
$$ A = \{n \in \mathbb{N} : n|p \land n|q\}  $$
$$ gcd(p,q) = max\{A\} $$

## [[6.4, 7.1]]

#csc110/todo  create an algorithm for this

- Can be redefined as:
$$\begin{align*}
&\Big(m = 0 \land n = 0 \Rightarrow d = 0 \Big)~\land \\
&\Big(m \neq 0 \lor n \neq 0 \Rightarrow \\
& \qquad d \mid m \land d \mid n \land \big(\forall e \in \mathbb{N},~e \mid
m \land e \mid n \Rightarrow e \leq d\big) \Big)
\end{align*}$$

