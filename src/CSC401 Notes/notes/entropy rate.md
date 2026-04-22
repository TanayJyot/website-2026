---
tags:
  - csc401
aliases: []
---
# entropy rate
##
- taking entropy directly on something on an entire corpus will cause $N \to \infty$ $H(X) → \infty$, we need to consider the total entropy divided by all the words that have appeared so far $$H_{rate}(X) = \lim_{N \to \infty} \frac{1}{N} H(X_1, \dots, X_N) \le \log_2 V$$
-   

### Finding [[entropy rate]] of a language
- We know $$H_{rate}(X) \approx \frac{1}{N} H(X_1, \dots, X_N)$$
- $N$ here is the total number of tokens / words / sub-words so $\sum_m |s_m| = N$ where $s$ is each sentence for m sentences which is how data is stores in the corpus
- To calculate $H_{rate}$ in this form we would need $$H(X_1, X_2, \dots, X_N) = \sum_{x_1, \dots, x_N} P(x_1, \dots, x_N) \log_2 \frac{1}{P(x_1, \dots, x_N)}$$
> [!caution] But we don’t have P
- since we don’t have $P$ since $P$ represents a language (since we can’t map every word in the English language), we use every sentence in $Q$ as an approximation of this reality
	- we then know that P and Q are related by [[cross entropy]] and assuming that Q approaches P, cross entropy approaches entropy.
	- Therefore, $$ H_{rate}(X) \approx \frac{1}{N} H(X_1, \dots, X_N) \approx \frac{1}{N} H(X_1, \dots, X_N; Q)$$
- Then given that our corpus is large enough the probability of something occurring in it $P(c) = 1$ hence we can simplify the cross entropy formula to give us $$\approx \frac{1}{N} \log_2 \frac{1}{Q(c)}$$
- Since the corpus just comprises of sentences
- $$\approx \frac{1}{N} \sum_{m=1}^{M} \log_2 \frac{1}{Q(s_m)}$$
- this is [[negative log likelihood]]

#### How good is this approximation
- good if P = Q / if P and Q are close
- this would also affect how well our [[negative log likelihood]] estimate is working. 
- P is the true data through which you draw a corpus and Q tries to create rules such that it is close to the corpus produced by P
- if Q isn’t close to what is produced by P then NLL would be high since we are far off from what we want 