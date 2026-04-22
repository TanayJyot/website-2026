---
tags: 
aliases: []
---
# skip grams with negative sampling
##
- the problem with training word embeddings the way it is done in [[word2vec]] via the way showed in [[word vector representation]] is that is requires computation of the entire $300 \times 10K$ matrix each time to update the weights and the bottom of the softmax would need us to take the exponent of the output of each of the neurons which is too much computation
- [[contrastive learning]] 

### The Process
- choose $0 \le k \le 20$ words in small data that are negative (unrelated)
- then calculate the objective function / loss by doing:
- $$% 1. The Skip-gram with Negative Sampling Objective Function
J(\theta) = \log \sigma(v_o^\top v_c) + \sum_{i=1}^{k} \mathbb{E}_{i \sim P(w)} [\log \sigma(-v_i^\top v_c)]
$$
- in the formula we promote possible values for the word o since the higher the delta value of it the lower the log value it will return. 
- for the negative values we would negate the value so that if we get a higher value output for a $k$ word then that value would be reversed 
	- 2 becomes -2 and $\delta (-2)$ will have a really small probability
	- take this as 0.1 then $\log(0.1)$ will have a high negative value making the loss a lot worse and taking it away from 0
	- then when our back propagation happens, it will notice this and try to move the value to go from 2 to closer to 0 by the gradient
	- if we have a small value (words are already not related in latent space) then they -2 would become 2 which will have a high sigmoid value and a low log value so it will contribute less to the loss and will not need much gradient changes

### Modified Unigram 

- in a normal unigram the power of $C = 1$ but here we make it $3/4$ 
- we figure out the words to choose from the unigram distribution as the negative words via:
	- $$P^*(w_{t+1}) = \frac{C(w_{t+1})^{\frac{3}{4}}}{\sum_{w} C(w)^{\frac{3}{4}}}$$
	- $3/4$ is chosen since it would reduce the probability of common words more than non-common words
		- **For a massive word (1,000,000 counts):** The count is "reduced" to **31,622**. It lost over **96%** of its raw value!
		- **For a small word (10,000 counts):** The count is "reduced" to **1,000**. It only lost **90%** of its raw value.
		- right now the massive word is 31 times more likely
	- If we make the value too small like $1 / 4$ on the exponent then we get really close to [[uniform distribution]] we are neglecting the counts of words a lot more
		- $1,000,000^{0.25} = \sqrt{\sqrt{1,000,000}} \approx \mathbf{31.62}$
		- $10,000^{0.25} = \sqrt{\sqrt{10,000}} = \mathbf{10}$
		- Ratio: $31.62 / 10 \approx \mathbf{3.16}$
	- this is why $3/4$ works out
- for larger words, losing 25% means losing a higher number than for smaller numbers to lose 25% which is what brings them closer together and causes the larger numbers to lose more than the smaller numbers

