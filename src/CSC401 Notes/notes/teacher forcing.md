---
tags: 
aliases: []
---
# teacher forcing
##
- instead of using input to output, you go from 
	- y of the prev step + prev inputs
- ![[Pasted image 20260422100448.png]]
- is equivalent to [[maximum likelihood estimation]] because in maximum likelihood estimation during [[seq2seq]] we are anyways taking $-\log P_{\theta}(y = E | F)$
- the point here is $y = E$ so might as well give $E$ straight to the model
- 