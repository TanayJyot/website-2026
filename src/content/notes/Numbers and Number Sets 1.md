# What is a number?
- There is no university accepted definition of what a number is. 
- So to think about it we can think about what we use them for. We use them to denote quantity , or for doing calculations. 

## The formal approach
- Use how different kinds of numbers are defined to understand how this would work. 
	- [[Types of Numbers]]
	- [[Natural Numbers]]
	- [[Integers]]
### Some Basic Number Theory:
#### For Division:
**Def**:  if $$ a,b \in \mathbb{Z} $$
we can say that “a divides b” and write $$ a | b $$
if and only if there is another integer k $$ k \in \mathbb{Z} $$
such that $$b= ak$$
$$ a|b \iff (\exists k \in \mathbb{Z})b = ak $$ ^2c4bc0

**Example**: 2|12 (2 can divide 12) is possible the number k(i.e. 6) exists in the integers. However, 12|2 is not possible because there is no such number that belongs to integers that can be multiplied to 2 to get k. 
$$ 12 = 2k$$
where k = 6. ^932f24
___

**Note**: We are saying a divides b in which the number that is being divides is later. Not a is divided by b. 

[[prime numbers]]

#### Ordering of Numbers:
A property of the set of all naturals, is that is it [[well ordered]], every non empty subset of the naturals has a smallest element(smallest in [[cardinality]]). 
___
- So basically if we create a smaller list of the natural numbers. The smallest among them will be contained by all the other elements. 
$$ \{3, 7, 10, 2\} $$
$$ 2 \subseteq 3,7,10 $$
**Recalling**: As 2 is basically the empty set and the set of the empty set and all the natural numbers are created this way combining every next element as discussed in [[Natural Numbers]]. 
- 2 also has the lowest cardinality here of 2. 
- In this manner, we can relate the traditional crocodile symbols to the natural numbers. From the previous example:
$$ 2 \subseteq 3,7,10 $$
$$ 2 \le 3,7,10$$
So in that sense:
$$ n \le m \iff n \subseteq m $$
##### Integers: 
- Notice that a set of integers is not [[well ordered]] because we cannot figure out a smallest element in the set of integers. (It keeps going in the infinite negative scale)
[[Fundamental Theorem of Arithmetic]]
[[Fundamental Theorem of Arithmetic]]



#### Defining the types:
[[Rationals]]
As every number cannot be represented as a rational(Eg. $\sqrt{2}$ or $\pi$) so we need the Real Numbers. 

##### Proof:
#proof 
**Theorem**: $\sqrt{2} \notin \mathbb{Q}$

For the sake of contradiction: suppose $\sqrt{2} \in \mathbb{Q}$ . Then $\sqrt{2} = \frac{a}{b}$ (in reduced form). Then $2 = \frac{a^2}{b^2}$ and so $2b^2 = a^2$ 

Considering [[Numbers and Number Sets 1#^102783]], 2 appears an odd number of times in the LHS of $2b^2 = a^2$(It appears an even number of times in $b^2$ for a to divide b) 
2 appears an even number of times in RHS.
$\rightarrow \leftarrow$ 
(this contradicts the uniqueness of the [[Numbers and Number Sets 1#Fundamental Theorem of Arithmetic]])

- This is contradicting because here we are claiming that $2b^2$ and  $a^2$ equal but the number of 2s in RHS are different to that in LHS however this is not possible because the prime numbers that multiply to form that number must be unique. Here there are 2 sets of prime numbers so there is a contradiction because of the [[Numbers and Number Sets 1#Fundamental Theorem of Arithmetic]]. 

Therefore, $\sqrt2 \notin \mathbb{Q}$

[[The Reals]]

Now consider $x^2 + 1 = 0$ which has no real solutions. So we introduce the imaginary numbers. $i^2 = -1$  
[[PUMP 2/Knowledge Base/Complex Numbers]]

#### Recap:

$$\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C} $$

___
# Summary:
- [[Natural Numbers]] are sets of sets.
	- As these are all sets, the sets before are the sets of the numbers after so a smaller number is a subset of a larger number. So traditional crocodile symbols apply in the case of rational numbers. 
- [[Integers]] are the difference between two natural numbers. 
- If there is some value that can be multiplied to a number to get that number then division works on it. 