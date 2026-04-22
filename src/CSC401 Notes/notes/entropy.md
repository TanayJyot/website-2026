---
tags:
  - csc401
aliases: []
---
# entropy
##
> the expected information gaining from observing the events of the random variable X

- what is the average amounts of bits of information you are getting when you get a given output

$$H(x) = E_x[I(x)] = \sum_x \log\frac{1}{p(x)}$$
1. It is defined for a random variable
2. since it is uncertain the amount of information you would *observe*, entropy tells you what this **uncertainty** is on average

### Effect of Skewness on Entropy
- when probability is skewed in a certain way like if one item has a very large probability then we would have a lower entropy
	- this happens because if we have 100 balls and 99 of them are red, then we gain less **new** information by *observing* a red ball
		- as you move towards the probability of one there is less of a *surprise*  about the outcome (since there is more certainty)
	- if the balls are equally distributed then we would be more *surprised* to draw a red ball then we would be if we knew most balls were red


> [!note] We like low entropy because it means we would *observe* less uncertain outputs


### bounds on Entropy
- Maximum obtained when entropy is uniformly distributed
- 
  $$H(X_1) = \sum_{i} p_i \log_2 \frac{1}{p_i} = \sum_{i} \frac{1}{V} \log_2 \frac{1}{1/V} = \mathbf{\log_2 V}$$
- 0 when there is only one choice since the outcome is certain
- $$H(X_2) = p_i \log_2 \frac{1}{p_i} = 1 \log_2 \overset{0}{\nearrow} 1 = \mathbf{0}$$
### How can we use this information? 
- since we know that certain bits are more likely to be transmitted than others, we can assign them lower binary values like 0 for “No”
----
- [[entropy rate]]
- [[joint entropy]]
- [[conditional entropy]]
- [[mutual information]]
- [[cross entropy]]
- [[KL Divergence]]
- [[perplexity]]