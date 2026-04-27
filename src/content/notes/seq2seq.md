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
- To minimize the loss we need to maximize the probability, which is easier to do by minimizing the negative log $$\mathcal{L}(\theta | E, F) = -\log P_{\theta}(y = E | F)$$
- Because of **auto-regression** (the model predicts word by word), the total loss is the sum of the losses for each individual word: $$\mathcal{L} = - \sum_{t} \log P_{\theta}(y_t = E_t | E_{<t}, F_{1:S})$$
	- so it allows for you to ensure all the variables are **independent** allowing you to 
- Taking the negative of the log for a number between 0 and 1 gives you a positive number that you want to move towards 0.
- [[teacher forcing]]
- ![[Pasted image 20260426173542.png]]

### Advantages with [[attention mechanism]]
- performance boost
- ![[Pasted image 20260421181320.png]]
- the bottleneck happens because the entire source needs to be put into a single vector 
- decoder can look back at all the hidden states 
- because of attention the alignment happens on its own and the attention matrix can be used as a source to compare this alignment

### Using Attention Mechanism
- ![[Pasted image 20260422100836.png]]
- Here we can see that after we do attention, attention would take the softmax of what is the most matching key that we found. We would take this key and this is on what the decoder seq2seq will run

#### Inference
- Input to decoder is a weighted sum of all encoder states[^1]
	- the weighted sum is the one given by the end of all the calculation below 
- “Weights determined dynamically by decoder’s previous hidden state"
	- This line just means that we go through a process to calculate the weight that would be there for the next hidden state via attention so it is dynamically calculated each time unlike older seq2seq where the weight would be static and the inference would be deterministic
	- this is more so for attention itself where the weight needs to be remade every time for the calculation in bullet point 1 to occur. This **is not** talking about the weights of the hidden state itself but more so the score function in bullet point 4.
		- Actually both the lines refer to bullet point 4 LOL
- Input for next state = the context vector calculated in the previous step and the embedding of the true y value in the previous step ([[teacher forcing]]) $$\tilde{x}_t = [c_{t-1}; T_E(y_{t-1})]$$
- Compare the hidden state of the current decoder to the states of all the encoders (as seen in the image above) $$a_{t,1:S} = score(\tilde{h}_t, h_{1:S})$$
	- The query is $\tilde{h}_t$ and the key is $h_{1:S}$, you go through all of them and find the ones that have a higher score with softmax below 
- Softmax them to find which one aligns the most $$\alpha_{t,s} = softmax(a_{t,1:S}, s) = \frac{\exp(a_{t,s})}{\sum_{s'} \exp(a_{t,s'})}$$
- Find the weighted sum of the encoder hidden states $$c_t = Attend(\tilde{h}_t, h_{1:S}) = \sum_{s} \alpha_{t,s} h_s$$
	- Once you find the softmax score for all of them, you multiply them with the keys - all the encoder hidden states - to find the hidden state that most applies and use it
	- 
- This becomes the input to the decoder that we talked about in the beginning

##### Score function Variants

- [[scaled dot product attention]]
- [[basic dot product attention]]
- [[multiplicative attention]]

#### Example

![[Pasted image 20260422113817.png]]
- you take each hidden state of encoder and multiply it by $h_1$ to form $a_{1:1} \to a_{1:s}$,  Then these are softmaxed, multiplied and then added to $c_1$ 
- softmax (blue boundary) uses all of the calculated scores and then multiplied them with the current hidden state
- this multiplication happens for all of the hidden states and then it is added to give you $c_1$ 

#### Runtime Complexity
![[Pasted image 20260422114233.png]]
- A stacked autoregressive RNN would mean that the RNN is doing normal sequential RNN calculations where it relies on the hidden states of the previous calculation making the calculation **sequential
	- When you add attention to this, it complicates the process of the decoder a lot more because at each step of the stack, we need to do a global search in the RNN **sequence** which makes things a lot slower
	- models where the decoder doesn’t rely on the previous hidden states to be completed will be a lot faster because of **parallelization** in the decoder
- 



[^1]: This makes a lot more sense in the end because the input we describe is the $c_t$ given by the previous step