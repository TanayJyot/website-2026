---
tags: 
aliases: []
---
# noisy channel model
##
- you assume that the language that you have data on is a noisy variant of the language you want to translate
- We use SMT by having 2 models
	- $P(E)$ is a language model for the English Language. **Gives Fluency**
	- $P(F|E)$ is a word / phrase level translation model that translates information (encodes knowledge) without an order. **Gives Consistency**
		- I think the order gets enforced by $P(E)$ because that is more data of the English Language? 

$$E^* = \arg\max_E P(E|F)$$

$$E^* = \arg\max_E \frac{P(F|E)P(E)}{P(F)}$$

Since $P(F)$ is constant for all possible English sentences $E$ being evaluated, it does not affect the $\arg\max$ and can be dropped:

$$E^* = \arg\max_E P(F|E)P(E)$$



![[Pasted image 20260421133659.png]]

### How does this differ from [[neural machine translation]]
- it doesn’t need the noisy channel language model $$E^* = \arg\max_E P(E|F)$$ since the neural network can do the translation without this 
	- it may be used as an objective in NNs
- There is no explicit **alignment** between French and English words which means we used to tell the model that this word translates to this in English but we don’t do all that in NMT
	- there is no manual rule based logic 
	- 