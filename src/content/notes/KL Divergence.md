---
tags:
aliases:
  - relative entropy
---
# KL Divergence
##
- used to compare probability distributions

> the average log difference between the distributions P and Q, relative to Q

> [!note] assume $0\log0 = 0$

- This is similar to cross entropy
	- but cross entropy measures the **total** number of bits needed to identify $P$ using $Q$ 
	- instead this measures the extra bits needed if we chose Q instead of P to encode data of P
	- this would be 0 if the two datasets are the same but cross entropy would still be H(P)
- $$\sum_x P(x) \log_2 \frac{P(x)}{Q(x)}$$
- Mathematically the relation can be shown by 

$$D_{KL}(P || Q) = \sum_{x} P(x) \log_2 \frac{1}{Q(x)} - \sum_{x} P(x) \log_2 \frac{1}{P(x)}$$
$$D_{KL}(P || Q) = H(X; Q) - H(X) \geq 0$$

Since:

$$H_{rate}(X) \approx \frac{1}{N} H(X_1, \dots, X_N)$$

and we know $H(X) \leq H(X; Q)$ by above,

$$\frac{1}{N} H(X_1, \dots, X_N) \leq \frac{1}{N} H(X_1, \dots, X_N; Q)$$


$$\frac{1}{N} H(X_1, \dots, X_N; Q) \approx \frac{1}{N} \sum_{m=1}^{M} \log_2 \frac{1}{Q(s_m)} = NLL(c; Q)$$
- This proves the derivation we did earlier for finding entropy for a language model and shows that the cross-entropy acts as an upper bound and since [[cross entropy]] is [[negative log likelihood]], that is the bound we use
