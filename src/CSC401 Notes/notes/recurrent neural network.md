---
tags: 
aliases: []
---
# recurrent neural network
##
- an RNN is a [[Neural Network]] with a loop embedded in it such that the weight matrix goes from $h_0$ to $h_h$ $\times x$ so we have a “history” of the values that the neural network had before
- ![[Pasted image 20260420195920.png]]
-  The hidden state would take the weight of the previous timestamp for the current input $$h_{t} = g(W_{I}[h_{t-1}; x] + c)$$
	- note that  $h_{t-1} ; x$ indicates that the vectors of $h_{t-1}$ and $x$ are being concatenated into one vector, it doesn’t mean we are indexing through a two dimensional matrix
	- **Previous state ($h_{t-1}$)**: $[0.1, 0.5, -0.2]$
	- **Current word ($x_t$)**: $[0.8, -0.1, 0.9]$
	- The **concatenated result** $[h_{t-1}; x]$ would be:
	- $$[0.1, 0.5, -0.2, 0.8, -0.1, 0.9]$$
	  this is given to the matrix

- the output would just multiply this with the weight $$\mathbf{y}_{t} = W_{O}h_{t} + b$$
- then we do something called [[backpropagation through time]] on this neural network to approximate what the weight should be at each step


### Sampling
- **Efficiency:** In an RNN, the size of the hidden states denote the information we need to store / compute upon (the parameters), in an [[n-grams]] based model, we need to store the entire vocabulary and sample from it (the parameters) therefore 
	- If $|h_i| < |V|$ then we are using less parameters
- this is likely to be true for neural networks since the encodings for neural networks (the weights and bias matrix per neuron) are very compact causing $|h_i|$ to likely be smaller

#### During a Forward Pass
![[Pasted image 20260420202404.png]]
- you have a word as input and the hidden state, you multiply both by their respective weight matrices and use an [[activation function]] to give you the new hidden state $h_t$ 
- you multiply this by the output weight matrix and use [[softmax activation]] on it to give you $\hat{y_t}$ for that current timestep.
- $\hat{y_t} = x_{t+1}$ for the next timestep

##### Formulas

-  This calculates the new memory by combining the previous memory ($h_{t-1}$) and the new word ($x_t$). $$h_{t}=g([W_{hh}h_{t-1};W_{hx}x_{t}]+c)$$
- This converts the hidden state into a probability distribution over the entire vocabulary to pick the next word. $$\hat{y}_{t}=\text{softmax}(W_{hy}h_{t}+b)$$
- [[LSTMs]] 
