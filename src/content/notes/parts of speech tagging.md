---
tags: 
aliases: []
---
# parts of speech tagging
##
- tag the [[parts of speech]]
- **WTF** the appropriate tag for the token in its context

### Why is tagging useful
- [[speech synthesis]]
- [[information extraction]]
- [[machine translation]]

### 
- [[Bayes Formula]]

$$\begin{aligned} \operatorname{argmax}_{t_{1:n}} P(t_{1:n} \mid w_{1:n}) &= \operatorname{argmax}_{t_{1:n}} \frac{P(w_{1:n} \mid t_{1:n}) P(t_{1:n})}{P(w_{1:n})} && \text{(By Bayes' Rule)} \\ &= \operatorname{argmax}_{t_{1:n}} P(w_{1:n} \mid t_{1:n}) P(t_{1:n}) && \text{(Only maximize numerator)} \\ &\approx \operatorname{argmax}_{t_{1:n}} \prod_{i}^{n} P(w_i \mid t_i) P(t_i \mid t_{i-1}) && \text{(Independence \& Markov assumptions)} \end{aligned}$$

- this assumes [[Markov assumptions]]

[[independence assumption]]

### 2. The Markov Assumption (Transitions)

The orange arrow points to $P(t_i \mid t_{i-1})$. This simplifies the "Transition" probability $P(t_{1:n})$.

- **The Problem:** By the chain rule of probability, $P(t_1, t_2, \dots, t_n)$ should be $P(t_1) \cdot P(t_2 \mid t_1) \cdot P(t_3 \mid t_1, t_2) \dots$ and so on. To know the tag of the 10th word, you’d need to look at the tags of the previous 9 words.
    
- **The Assumption:** We use a **First-Order Markov Assumption**, which states that the probability of a tag depends **only on the immediately preceding tag**.
    
- **The Logic:** If the current tag is `Modal Verb` (like "can"), the probability that the next tag is a `Verb` (like "run") is high, regardless of what happened at the beginning of the sentence.
    

$$P(t_{1:n}) \approx \prod_{i=1}^{n} P(t_i \mid t_{i-1})$$

--- 
### Work Likelihood Probability
- [[word likelihood probability]]
- [[tag transition probability]]