---
tags: 
aliases: []
---
# mutual information
##
 - we know from conditional entropy that variables have certain information that you can get out of one variable about the other variable 
 - when we subtract $H(X) - H(X | Y)$ and $H(Y) - H(Y | X)$ we find that both the variables contain the **same** information about the other, this is mutual information

> the amount of uncertainty removed in variable X if you know variable Y

- there will be no mutual information if the variables are independent $p(x, y) = p(x)p(y)$ 
$$\begin{aligned}
I(X; Y) &= H(X) - H(X|Y) = H(Y) - H(Y|X) \\
&= \sum_{x, y} p(x, y) \log_2 \frac{p(x, y)}{p(x)p(y)}
\end{aligned}$$
![[Pasted image 20260420123348.png]]
