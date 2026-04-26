---
tags: 
aliases: []
---
# gradient descent
##
- ![[Pasted image 20250629231527.png]]
	- You wanna move down towards the direction that would take you towards the lowest value the quickest. 
	- The steepest descent
	- You would get to different values based on your starting point

### gradient descent algorithm

$$w = w - \alpha \frac{\partial}{\partial w} J(w, b)$$

$$\begin{align*} \text{repeat}&\text{ until convergence:} \; \lbrace \newline  
\;  w &= w -  \alpha \frac{\partial J(w,b)}{\partial w} \tag{3}  \; \newline   
 b &= b -  \alpha \frac{\partial J(w,b)}{\partial b}  \newline \rbrace  
\end{align*}$$  
where, parameters $w$, $b$ are updated simultaneously.    
The gradient is defined as:  
$$  
\begin{align}  
\frac{\partial J(w,b)}{\partial w}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})x^{(i)} \tag{4}\\  
  \frac{\partial J(w,b)}{\partial b}  &= \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)}) \tag{5}\\  
  
\end{align}  
$$
- $\alpha$ is the [[learning rate]]
	- How quickly would you move downhill
- ![[Pasted image 20250629233459.png]]
- You would want to update the values simultaneously so that the derivative for `tmp_b` doesn’t take the new value of `w`. 
- Because the graph itself will change when `w` changes.

### Impact of Learning Rate
- [[learning rate]]
- when we are close to a local minima, the derivative becomes smaller, so the value of $\alpha  \frac{\partial}{\partial w} J(w, b)$ will decrease because $\frac{\partial}{\partial w} J(w, b)$ is decreasing.
- 
 
### How the cost function makes a difference
- Usually during gradient descent you can have multiple [[local minima]] but during gradient descent, when we use the [[mean squared error]] [[cost function]], we have a bowl shape causing us to always have a global minimum
	- ![[Pasted image 20250630132508.png]]


### Feature Scaling
- [[feature scaling]]

### Finding convergence
- ![[Pasted image 20250701212102.png]]
- [[learning rate]]

## #csc401 

- $$\theta^{(\text{new})} = \theta^{(\text{old})} - \alpha \nabla_{\theta} L$$
- done via [[back propagation]]