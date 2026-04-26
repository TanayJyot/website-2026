- If an integer n is true
	- then it must be true for its smallest value 
	- n must be true for any value and must be true for n + 1 

For a formula:
0+1+2+3+4+…  n = (n(n+1))/2
- So applying:
	when n = 0 the formula works 
	- for any value of n the base case should work so formula can also be written as (n+1(n+2))/2

# From PUMP 2 Lecture 7 
This is a specialised technique to prove statements with predicates that range over the natural numbers. 
## Principle of [[Mathematical Induction]]:
Let P(n) be a predicate. 
If 
1. P(1) is true (Base Case)
2. $P(n) \Rightarrow P(n+1)$
Then $(\forall n \in \mathbb{N} \setminus \{0\})P(n)$ is true

> [!note] Think of induction like domino pieces. If one piece falls a chain of pieces fall. That’s the basic idea of induction. 

___
Every proof by induction has 2 parts mentioned above and both must be true.  

## Example:
### Theorem:
$$(\forall n \in \mathbb{N} \setminus \{0\})1+ 2+3+....+n = \frac{n(n+1)}{2} $$
[[Summation Formula]] is from this. 
This works because you can take the first and last digit and form pairs like that. So second and second last digit and so on. These pairs are going to be equal. So by simply multiplying the numbers you can get an answer here. 

> When a statement is quantified over the naturals. It’s almost universally the case that you need to do it via induction. 

$$ (P(n) \text{ is } 1 + 2+ 3+...+ n = \frac{(n+1)n}{2}) $$
### Proof:
**Base Case:** $P(1) \text{ is } 1 = \frac{(1+1)1}{2}$
**Inductive Step:** Let n>1 be arbitrary and assume P(n). WTS: P(n+1). Consider $$1 + 2+ 3+...+n+(n+1)= \frac{(n+1)n}{2} + (n+1)$$
$$= \frac{n(n+1)+2(n+1)}{2} $$
$$ = \frac{(n+1)(n+2)}{2} = \frac{(n+1+1)(n+1)}{2}$$
as desired by using inductive Hypothesis on P(n). 

# From [[MAT137/Preparation/Week 2 Lecture 2|Week 2 Lecture 2]]

- You basically verify for only one statement and then use that as the basis for validation that all the other statements are true. You are not proving that individual elements are true. You are just proving that this leads to that. 
- You use the properties of the numbers to then prove that if one statement is true then then the implied one must be true. 
- It may not always be the best method simply because it is not always easy to evaluate the base case. 


### The MAT137 students problem
![[20230921_143202.jpg]]
 - The reason it doesn’t  work is because the sets overlap directly as we do the [[induction hypothesis]] from n≥1. So X1 exists in both elements. 
	 - We need to start from n ≥ 2 for this to work properly because only then we can compare G1 and G2. [^1] 
- 

[^1]: But isn’t taking the last set of n already completing that purpose? #mat137/questions 
