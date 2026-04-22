# Sets
- A collection of **well-defined** elements.
- There are [[axioms]] that limit what a set can be. 
	- The existence of an empty set 
	- the existence of an infinite set 
- A set has a [[cardinality]]
$$a\in A $$ would mean a belongs to A
- Basically a is a part of the set “A”
- [[empty set]]
- A set within a set is denoted by placing it within it. 
- The [[empty set]] is not equal to the set of the empty set. 
- $$\emptyset \neq \{\emptyset \}$$
- This would have a [[cardinality]] of 1. 
- ## Examples:
![[Pasted image 20230713000742.png]]

- [[Transitiveness of sets]]
- [[Equality of Sets]]
- [[Russell’s paradox]]
- [[Set symbols]]
# Subsets:
## Definition:
Let A,B be sets. B is a subset of A if and only if $$( \forall x \in B)x \in A$$
We denote this by $$ B \subseteq A $$
This means that all the elements that are a part of B are individually also a part of A.  ^0fe28a

## Remarks:

### 1. 
Every set A has two necessary subsets(trivial): $$ A \subseteq A $$
$$ \emptyset \subseteq A $$

### 2. 
$$( \forall x \in B)x \in A$$
is equivalent to saying:
$$ (\forall x) x \in B \Rightarrow x \in A $$
- In this case we are not bounding x directly to B. ( Basically saying x is not B, which in the first case we did say that)
- We often express this in terms of [[Proper subset]]

### 3. 
$$ B \subset A \Rightarrow B \subseteq A $$
This is always going to be true. However it is not necessary that 

$$ B \subseteq A \Rightarrow B \subset A $$
this is true. 

### 4. 
According to the [[Russell’s paradox]], $$ A \in A $$ is always false. However, $$ A\subseteq A $$
is always true. 

#### Example: 
$$ \mathbb{N} \notin \mathbb{Z} $$
but 
$$  \mathbb{N} \subseteq \mathbb{Z} $$
### 5. [^1]
[[Equality of Sets#Subset Way]]

### 6. 
$$ B \subseteq A \Rightarrow |B| \le |A|$$
If B is the subset of A. The [[cardinality]] of B must be less than or equal to the cardinality of A. 

## Other notation:
This works like inequalities, you can change the order to change the symbol associated. 
1. $$ A \supseteq  B \iff B \subseteq A$$
This is saying A ‘contains’ B which simply means B is a subset of A. 
2. 

 $$  A \supset  B \iff B \subset A $$
A ‘properly contains B’ when B is a ‘proper subset’ of A. 

# Operations with Sets 
## Set Difference:
The difference of set A minus B would be all the elements that are in A but are not in B.  ^cdaf0a

$$ A\setminus B = \{x \in A : x \notin B \} $$
Furthermore, 
$$ A\setminus B \subseteq A$$ ^6de1a7
___

We read, 
$$ \{x \in A : x \notin B \} $$
as “ The set of all x’s in A such that x is not in B”

[[complement stats]]

[[Union of sets]]

[[Intersection of sets]]

## .
[[De Morgan’s Law]]

[[cartesian product]]

# Additional info:
When you are proving things, you have to use the definitions of those things as a means to prove things. 

# Numbers 
[[Numbers and Number Sets 1]]
[[Types of Numbers]]

[^1]: Doubt about this…[[PUMP 2/PUMP 2 Questions|PUMP 2 Questions]]
