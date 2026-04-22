---
tags: 
aliases: []
---
# information
##
- has the characteristics of a [[public good]]
	- [[non excludable]]
	- [[non rival]]
##
- Information is what you obtain after an action has occurred is based on a particular probability
	- amount of info you get is inversely proportional to how likely it were to happen
	- action occurring gives you a certain set of information
	- 
- In terms of [[negative log likelihood]] this looks like: 
	- $$I(x) = \log_2\frac{1}{P(x)}$$
		- information contents computed with log[^1]
			- does this just mean we use log?
		- we use unit bit for base 2 and nat for base e

### Information can be additive
- if there are $k$ independent events, then they can be added since we are using a log
$$I(x_1...x_k) = \log_2(\frac{1}{P(x_1 ... x_k)}) = \log_2 \frac{1}{P(x_1)} + \log_2\frac{1}{P(x_2)}$$ and so on

### Information with unequal events
- since random variables can take many possible values and each value can have very different probabilities
- what is the average amount of information we can get just by *observing* the output of the random variable.
	- this is kinda like thinking about how much info you would get out of the output for sure
- [[entropy]]







[^1]: what does this mean? 
