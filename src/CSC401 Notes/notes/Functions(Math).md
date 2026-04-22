# From 2.3 ARC Sets and functions review:
## S
>A mapping from one set to another 

For a function $\mathcal{f} : A \rightarrow B$ would mean that the function maps elements from A into B. Here A is called the [[domain(mathematics)]] of the function and B is called the [[codomain(mathematics)]]. ![[Pasted image 20230802183739.png]] ^e9f736
## Difference in the condition of the domain and the codomain

A domain must always satisfy all the conditions for it to be valid. While a codomain only relies on the inputs so that is all that matters. 

## Example:
![[Pasted image 20230802184642.png]]

___
>[!note] For something to be a function value in domain must give one value in the codomain. 


[[range of a function]]

# From 7. PUMP 2 Lecture 7
## What is a function?
- We can say that a function is something that gives a unique output for each input so in a way there should be some input([[domain(mathematics)]]) attached to the function. 
### Definition 1:
So formally the definition can be said to be: 
> Let a,b be [[Sets]]. A function $f:A \rightarrow B$ is a unique assignment of each element of A to an element of B

That is:
$$(\forall a \in A)f(a) \in B $$
$$a_1 = a_2 \implies f(a_1) = f(a_2)$$
“for each input there is a unique output.“
#### A non-example:
$$f(\frac{p}{q})= p+ q \text{ where }f:\mathbb{Q} \rightarrow \mathbb{Z}$$
This is **not** a function because $\frac{1}{2} = \frac{2}{4}$ and $f(\frac{1}{2}) = 3 \neq 6 = f(\frac{2}{4})$ 
You can question if something even is a question. 

We could not write a [[formal definition]] for something that is generic and does not apply in every situation. Which is why we use this particularly. 

### Definition 2:
(We won’t be using this but this is more [[formal definition]]) 
Let A, B be sets. A function $f : A \rightarrow B$ is a subset of $A \times B = \{(x,y): x \in A \land y \in B \}$ [[cartesian product#^4c9860]] such that: 
1. $(\forall x \in A \exists y \in B) (x,y)\in f$ 
2. $(\forall x \in A \forall y_1, y_2 \in B) (x,y_1),(x,y_2) \in f \implies y_1 = y_2$
### Notation:
We write $f(x) = y$ whenever $(x,y) \in f$. 

## Basic Terminology:
![[Functions(Math)#^e9f736]]
[[range of a function]]

![[Drawing 2023-08-20 15.28.36.excalidraw]]
If $f(a) = b$ 
1. b is the image of a.[[Image of a function]]
2. a is the pre-image of b. [[Pre-image of a function]]
[[dependent Variable]]
[[independent variable]]

[[Function Representation]]

[[Function Representation]]
___

## [[4.1, 4.2]]

- This is the same as [[Functions(Math)#Definition 1]]
- [[codomain(mathematics)]]
- [[range of a function]]
```timestamp 
 02:42
 ```
[[Convention of functions in single variable calculus]]