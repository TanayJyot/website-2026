### 1. The Independence Assumption (Emissions)

The green arrow in your image points to $P(w_i \mid t_i)$. This simplifies the "Emission" probability $P(w_{1:n} \mid t_{1:n})$.

- **The Problem:** Originally, you'd have to calculate the probability of a specific word appearing given _every other word and tag_ in the entire sentence. This is impossible to calculate because most specific sentence combinations have never been seen before.
- **The Assumption:** We assume that the probability of a word appearing depends **only** on its own tag.
- **The Logic:** If $t_i$ is `Noun`, the probability of $w_i$ being "cat" is independent of whether the previous word was "the" or "fast."

$$P(w_{1:n} \mid t_{1:n}) \approx \prod_{i=1}^{n} P(w_i \mid t_i)$$

- basically for word i, you don’t care about the rest of the words in the sentence and assume that the sentence is independent from them

---

### Assumption in Naive Bayes
- you assume that the features $x_i$ are conditionally independent given the class $c$. 
- which allows you to break the join distribution for each feature to be dependent on the prior.
$$P(x, x_1, ..., x_D) = P(c)P(x_1|c)P(x_2|c)...$$
- prior probability and conditional probability again 
- 

