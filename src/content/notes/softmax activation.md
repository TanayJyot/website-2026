---
tags: 
aliases:
---
# softmax activation
##
- In the last value, you need to be able to differentiate between the two values so that you can get some sensible output. 
- [[rectified linear unit activation function]] does not work in this situation because we can have both values be negative or both values be positive or something similar.
### What do you do then?
- [[exponential function]] would be used to get all values as positive values
- Use [[normalization]] 
- 
- ![[Pasted image 20241225122017.png]]
- We have an [[overflow]] problem with exponentiation functions where values get too large
- [[overflow prevention]]

### why we use Softmax
- given we want to find information about $f_c$ for class c, if we just calculate the probability directly by $\frac{f_c}{\sum_c f_c}$ we exponentiate so that the 
#### effect of simple ratios
- if there are large numbers closely together then exponentiating makes it easier to differentiate between them $101/303$, 102/303, etc.
	-  however $e^{101}$  is very different from $e^{102}$
- values are also **positive**
- also if we add a constant such as $\alpha$ to the input, it does not influence the probability because the softmax allows it to be cancelled out
	- $$\frac{e^{f_c + \alpha}}{\sum_{c\prime}^{|c|} e^{f_{c\prime} + \alpha}} = \frac{e^{f_c}e^\alpha}{e^\alpha \sum_{c\prime}^{|c|} e^{f_{c\prime}}}$$
	- so $e^\alpha$ just cancels out
- 