---
tags: 
aliases: []
---
# seq2seq
##
- this uses 2 [[recurrent neural network]]s, one for encoding and one for decoding
- an example of a [[conditional language model]]
- Prediction is conditioned on the source sentence
- directly calculates $E^* = \arg\max_E P(E|F)$ [[noisy channel model]]  
	- I think the way they think about this is wrong, like it isn’t actually calculating this argmax

### Encoder
- **$x_s = T_F(F_s)$**: This is the **Embedding** layer. Since computers can't read words like "amitié," we use a lookup table ($T_F$) to turn the French word ($F_s$) into a vector of numbers ($x_s$).
- **$h_S = f(F_{1:S})$**: means the final hidden state ($h_4$ in the diagram) is a function of the **entire** source sentence.

![[Pasted image 20260421164749.png]]
- Here we take each of the words and convert them to an embedding which is what is described by $T_F(F_S)$ 

### Decoder

![[Pasted image 20260421165315.png]]
- Here we set the input to be a previously generated word
- Since all the weight matrices have already been calculated, the output probability at each step is already deterministic which is why bullet point 3 days so for the final probability calculated
- the last formula is just a fancy way of saying: "The probability of the whole English sentence is calculated by multiplying the probability of each word, given all the words that came before it and the original French sentence."
	- its like each of the words appearing considering that they are based on the matrices that they are multiplied by to give the next word

### Training
- Train towards [[maximum likelihood estimation]] so $$\theta^* = \arg\min_{\theta} \mathcal{L}(\theta | E, F)$$
- so that the goal is to minimize the loss, we would do this for one particular English sentence E 
- To minimize the loss we need to maximize the probability, which is easier to do by minimizing the negative log $\mathcal{L}(\theta | E, F) = -\log P_{\theta}(y = E | F)$
- Because of **auto-regression** (the model predicts word by word), the total loss is the sum of the losses for each individual word:

$$\mathcal{L} = - \sum_{t} \log P_{\theta}(y_t = E_t | E_{<t}, F_{1:S})$$
- Taking the negative of the log for a number between 0 and 1 gives you a positive number that you want to move towards 0.

### Advantages with [[attention mechanism]]
- performance boost
- ![[Pasted image 20260421181320.png]]
- the bottleneck happens because the entire source needs to be put into a single vector 
- decoder can look back at all the hidden states 
- because of attention the alignment happens on its own and the attention matrix can be used as a source to compare this alignment
