---
tags: 
aliases: []
---
# word vector representation
##
- Initially you wanna give some vector representation to each of the words, to do this you would either:
	- use [[one-hot encoding]] to create a vector of dimension D where D = number of unique words in the corpus
	- you have [[word-feature representation]] where you assign a feature to each of the index in a much denser (less dimensions) vector 
		- features could be things like cheerfulness, emotional tone and you give each word a value for these between 0 to 1
- this happens before the learning process starts as an initial vector 

### Using Word Vector Representation
- you create a [[latent space]] from the vectors by creating an $v_w$ such that $v_w = x^TW_I$ from the one-hot encodings
- $W_I$ is a $100K \times 300$ matrix which we would matrix multiply with our input of $x$ (100K) but transposed so that we multiply our 100K space of 100K words with each of the 300 features and add them up to create the latent space 
- then we can do [[cosine similarity]] to be able to ensure that the vectors that have similar meanings are close to each other in space 