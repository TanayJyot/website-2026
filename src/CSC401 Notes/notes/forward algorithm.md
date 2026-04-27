---
tags: 
aliases: []
---
# forward algorithm
##

![[Pasted image 20260424111638.png]]
	- $b_1$ etc. shows the probability needed to emit the outputs needed to get the output X. 
	- $a_1$ represents the probabilities of each of the transitions
- ![[Pasted image 20260424111859.png]]
- since the forward algorithm is basically just [[dynamic programming]], this is very normal exponential to polynomial output conversion
- ![[Pasted image 20260424112202.png]]
- ![[Pasted image 20260424113341.png]]
	- Initialize the initial $\alpha_0$ to be 1 and everything else to be 0
		- so that we are initially at least 100% in the first state
		- this is the base case we can’t go back from
	- after this in the recursion you want to sum up the probability of getting to $j$ via different $i$s by multiplying the probability of getting to the previous $i$ times the previous emission and same for the stuff before it 
	- times how you got from current $i$ to static state $j$ $a_{ij}$
	- The emission at state $j$ for the output given at that time $x_t$
		- this will be the same during the entire summation at time $t$

- ![[Pasted image 20260424114248.png]]
- [[Viterbi algorithm]]

- 