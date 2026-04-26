---
tags: 
aliases: []
---
# hidden Markov model
##
- you take a model that is hidden and each event $e$ can only be accessed by going through s.

You want to find $s_t$ given $e_0$ to $e_t$ but to find $s_t$ you first need to have $s_{t-1}$ and to get to that value you would need to find the value of that variable.   

![[Pasted image 20251203134428.png]]


## #csc401 
- you use [[Markov assumptions]]
- ![[Pasted image 20260424103417.png]]
	- emission probabilities are kinda like the conclusions you can draw out of the main Markov model
- ![[Pasted image 20260424104208.png]]
- ![[Pasted image 20260424111101.png]]
- [[forward algorithm]]
- [[Viterbi algorithm]]
- [[forward-backward algorithm]]
- [[Baum-Welch Algorithm]]

### Training
- You use the [[forward-backward algorithm]] for training
- ![[Pasted image 20260424120558.png]]
	- the parameters in this algorithm are handled by Viterbi Training
	- State-time alignment is the mapping that tells you exactly which hidden state the system was in at every single tick of the clock.
	- Think of it as a "decoder ring" that connects your observations to your model's internal states. If you have an observation sequence $X = [x_1, x_2, \dots, x_T]$, the state-time alignment is a corresponding sequence of states $S = [s_1, s_2, \dots, s_T]$.
	- "Hard" Alignment (Viterbi)- we often use Viterbi to find the single "best" alignment. This is a "hard" alignment because it makes a definitive choice: "At time $t=4$, we were definitely in State 2." Once you have this hard alignment, training becomes easy because you can group all the data points associated with "State 2" and calculate their average (the mean $\mu_2$) and their spread (the covariance $\Sigma_2$).
- ![[Pasted image 20260424131717.png]]
	- figure out [[state occupation probability]]
- ![[Pasted image 20260424132735.png]]
	- How do things look like forward in time? 
- ![[Pasted image 20260424132817.png]]
- #csc401/todo Relook at these slides because you didn’t wanna do them the first time ![[Pasted image 20260424133350.png]]
- ![[Pasted image 20260424133359.png]]
- ![[Pasted image 20260424133408.png]]
- ![[Pasted image 20260424133422.png]]
- ![[Pasted image 20260424133624.png]]
	- For this one we just add all the utterances together
		- utterance is just multiple sentences in the corpus, so run the thing over the whole corpus
- ![[Pasted image 20260424134333.png]]
	- How we can map the emission probabilities if they aren’t Gaussian
- ![[Pasted image 20260424134559.png]]
- ![[Pasted image 20260424134905.png]]
- ![[Pasted image 20260424134931.png]]
- ![[Pasted image 20260424134958.png]]
- 