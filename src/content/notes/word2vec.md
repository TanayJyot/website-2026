---
tags: 
aliases: []
---
# word2vec
##
- is a system that converts words to vectors

### Training
![[Pasted image 20260420180434.png]]
- take the [[one-hot encoding]] of the word and pass it through the 300 features to get how likely it is that the nearby word is $x$
- Each word has its own neuron so each neuron will have its probability
- then we would [[softmax activation]] this to get the probabilities 
- this will allow us to find words that are close to each other and back propagating through this will get all the hidden neurons to develop high weight values for words that are supposed to be close to each other based on the 300 features 
- Hidden Layer to output layer is the $300 \times 10000$ matrix we talked about in [[word vector representation]]
- 