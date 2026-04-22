---
tags:
aliases: []
---
# Language Models
- score and sort sentences by properties like this
- identify properties in natural language
- infer embedding spaces
	- how text is stored in a vector space and use that to do things
- efficiently compress or repair text
- [[word prediction]]

### Evaluating a language model

#### Extrinsically
- see how the models do in situ / in practice 
	- embed LM A and B into a speech recognizer
	- run speech recognition
	- compare recognition rates between LM A and LM B

#### Intrinsically
- figure out the probability of the corpus
	- you sometimes make the assumption that the sentences are independent
	- $$P(C) = \prod_iP(s_i)$$
- A good model would be the one that makes the current corpus very likely even though it may be bad in a different corpus
- [[Shannon’s method]]

### Smoothing to avoid 0 probabilities
- you don’t want to see a probability of 0 in your data because then the model would never be able to predict those words 
- [[add-1 smoothing]]
- [[add-delta smoothing]]
- [[good-turing]]