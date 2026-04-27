---
tags: 
aliases: []
---
# inverse document frequency
##
- ![[Pasted image 20260424140756.png]]
- do this to favour specific concepts / words
- ![[Pasted image 20260424140928.png]]
- In Information Theory, the self-information (or surprisal) of an event with probability $P$ is defined as $\log(1/P)$.

Since the probability of a document containing word $i$ is $P = \frac{df_i}{D}$, the amount of information you gain by seeing that word is:

$$\log\left(\frac{1}{df_i/D}\right) = \log\left(\frac{D}{df_i}\right)$$

This log scale ensures that the weight of a word is proportional to the information it provides about the document's niche