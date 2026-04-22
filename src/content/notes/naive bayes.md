---
tags: 
aliases: []
---
# naive bayes
##
- [[Bayesian networks]]
- [[Bayesian view]]

- In classification, we want to find the most likely class $c$ given some observation $x$.
- **The Goal:** $\operatorname{argmax}_c P(c \mid x)$ (Find the class that maximizes the probability).
    
- **The Tool:** Bayes' Rule allows us to flip the problem:
- 

$$P(c \mid x) = \frac{P(c)P(x \mid c)}{P(x)}$$
    
- **The Shortcut:** Since $P(x)$ is the same for every class we are testing, we ignore it. We only care about the numerator: $P(c)$ called the prior and $P(x \mid c)$ the likelihood
	- the prior shows how likely the class is to be seen before the data
	- the likelihood shows the product of individual feature probabilities
	- so you just multiply the probability of feature given class times the prior for the class and divide it by the probability of having that feature


- you can then let $f = Wx$ be the the function where f can have $|C|$ dimensions and $W$ will be $|C| \times D$    

- [[independence assumption]]

- learning the decision boundary is the same as learning the $W \in \mathbb{R}^{C \times d}$ so

$$f_c = W[c,...] \cdot x = \sum_{i= 1}^d W[c, i] \cdot x[i]$$
- this can be negative so just [[softmax activation]] this

### Naive Bayes Properties
- cheap
- **training time**: estimate with [[maximum likelihood estimation]] and compute the co-uccurence counts with each of the features and the labels. 
	- Since this is a simple counting task, this takes only one pass
- **test time:** apply the [[Bayes Formula]]
	- cheap because of how the model is designed
- also can be analysed with other probability distributions 
	- we currently analyze with [[bernoulli random variable]]
- less accurate then [[discriminative classifier]] models because of the [[independence assumption]]. 
