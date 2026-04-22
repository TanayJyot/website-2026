---
tags: 
aliases: []
---
# masked self-attention
##

![[Pasted image 20260421210505.png]]

- mostly same as normal [[self-attention]] but you only calculate the dot product for words that you have reached so far in your attention block
- The dot product we are talking about here $QK^T$ which when we softmax over, all the $-\infty$ values become 0.  