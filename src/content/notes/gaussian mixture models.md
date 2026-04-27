---
tags: 
aliases: []
---
# gaussian mixture models
##
- ![[Pasted image 20260423162809.png]]
	- For all the models, add up the probability of choosing this model multiplied by getting the given input given this model (this part described below)
- ![[Pasted image 20260423164308.png]]
	- Here we can apply the principle mentioned in this image ![[covariance#^0d3549]]
	- So since MFCC dimensions are independent, all the covariance matrix gives us is the covariance of $\sum [i, i]$ which can be simplified to the variance.
	- Since only the diagonal has been filled and everything is independent, all we need to is sum things in the diagonal instead of finding the whole probability unlike the method in ![[multivariate gaussians#^863053]]
	- 
- ![[Pasted image 20260423165002.png]]


### Expectation Maximization for GMMs
- [[expectation maximization for GMMs]]

### Speaker Recognition
- [[speaker recognition]]