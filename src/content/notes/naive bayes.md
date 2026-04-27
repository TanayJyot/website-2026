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


## Reiteration in more detail

- ![[Pasted image 20260424203722.png]]
	- When we say "learning a linear decision boundary is tantamount to learning $W$," we are saying that the probabilistic logic of Naive Bayes can be mathematically rewritten into the exact same functional form as a Neural Network's linear layer followed by a Softmax.
	- This is true because
		- $$p(c | x) = p (x|c) p(c)$$
		- Since $x$ is a vector $$p(c)\prod_i^D p(x_i | c)$$ the probability of each feature in the class
		- applying log $$\log P(c|x) = \log P(c) + \sum_{i=1}^{d} \log P(x_i|c)$$
		- Each $\log P(x_i|c)$ acts as a **weight** ($w_{ci}$) for feature $x_i$.
		- The $\log P(c)$ acts as a **bias** term ($b_c$).
		- This gives us the function on the slide: $f_c = \sum W[c,i] \cdot x[i]$.
		- $W[c, i]$ stores how much that particular feature $i$ contributes to the score of class $c$
			- so it kinda captures the dimension and class part of what we need
- ![[Pasted image 20260424204905.png]]
