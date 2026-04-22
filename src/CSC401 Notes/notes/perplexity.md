---
tags: 
aliases: []
---
# perplexity
##
- if we exponentiate the [[negative log likelihood]], we get perplexity
	- this is a means for people to get positive numbers as a way to see behaviour instead of the negative log likelihood we were getting earlier

$$PP(c; Q) = 2^{\frac{1}{N} \sum_{m=1}^{M} \log_2 \frac{1}{Q(s_m)}} = \left( \prod_{m=1}^{M} \frac{1}{Q(s_m)} \right)^{1/N}$$


- relates to the true entropy rate by this since cross entropy is anyways an upper bound on entropy so exponentiating it doesn’t change that
	- $$PP(c; Q) \geq 2^{H_{rate}(X)}$$

### Vocabulary size concept
- the idea is that if the entire vocabulary of possibly occurring was uniform then perplexity would be V
	- this is the same as that entropy will have maximum value when everything in the distribution has the same probability
- but the lower the value of perplexity, the less words the model is choosing between so for example if V = 50k and perplexity = 50 then the model is effectively choosing between 50 words

### Perplexity between models 
$$\begin{aligned}
&\text{If an LM } Q \text{ has a lower } PP \text{ than } Q' \text{ (for large } N), \text{ then:} \\
&\bullet \quad Q \text{ better predicts } c \\
&\bullet \quad D_{KL}(P \parallel Q) < D_{KL}(P \parallel Q') \\
&\bullet \quad PP(c; Q) \text{ is a tighter bound on } 2^{H_{rate}(X)}
\end{aligned}$$

- it is a tighter bound since cross entropy is a bound on entropy rate, so that property is still maintained after we exponentiate it

### Perplexity is normalized per token
- The division for $\frac{1}{n}$ on both sides means that perplexity would always be consistent no matter the input size 
- this allows allows us to compare performance across various datasets
