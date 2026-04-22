---
tags: 
aliases: []
---
# word prediction
##
- the task of knowing the probability of the next word given the previous words in the sequence
- The conditional probability of the next word being X = 
$$P(X | Y) = \frac{P(Y \text{and the next word X together in the corpus})}{P(Y)}$$
$$ \approx \frac{Count(Y \text{and the next word X together in the corpus})}{Count(Y)}$$

- you do this with [[n-grams]], but you don’t want to make n-grams that are too large otherwise there wouldn’t be significant data
	- ![[Pasted image 20260328220133.png]]
- You also use [[Markov assumptions]] to deter this
- #csc401/todo How you can use bigrams to calculate probability
- [[maximum likelihood estimation]]