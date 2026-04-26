---
tags: 
aliases:
---
# linear regression model
##
# linear regression model
##
- [[training data]]
- you draw a straight line on the data
- You need to choose $w$ and $b$ such that you get a value that is close to the points.


### Finding $w$ and $b$ 
- [[cost function]]
- [[gradient descent]]

### Linear Regression with Gradient Descent
![[Pasted image 20250630132759.png]]
- [[batch gradient descent]]

### Linear Regression with multiple features 
- ![[Pasted image 20250630135903.png]]
- You would need $n$ values of weights for $n$ features
- ![[Pasted image 20250630140253.png]]
	- [[dot product]]
#### Vectorization
- [[vectorization]]
#### Gradient Descent
- ![[Pasted image 20250630143621.png]]
	- You calculate all values of $w$ for all features to update the entire vector. 
#### Normal Equation
- [[normal equation]]

### Feature Engineering
- [[feature engineering]]