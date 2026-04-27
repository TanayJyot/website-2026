---
tags: 
aliases: []
---
# transformer
- [[BERT]]
- [[T5]]
- [[GPT]]
- [[token free models]]
- [[reinforcement learning with human feedback]]

##
![[Pasted image 20260421182512.png]]

- Main components within building blocks:
 - Attention mechanisms:
 - single and multi-head attention
 - self, cross, and masked attention
 - Feed-forward MLPs (FFN)
 - Layer normalization (LN)
 - Positional encodings (PE)
 - Residual connections

- [[Residual Connections]]
- [[Layer Normalization]]
- [[self-attention]]
- [[masked self-attention]]
- [[cross attention]]
- [[Feed Forward Layer]]
- [[Position Independence]]
### Drawbacks

#### Quadratic Computation Cost

##### 1. The "Every Word vs. Every Word" Problem

In the self-attention mechanism, every token (word) in the sequence must act as a **Query** and compare itself against every other token acting as a **Key**.

- If you have a sentence of length N=4, each of the 4 words must look at 4 keys. That is 4×4=16 comparisons.
- If you increase the sentence to N=1000, each of the 1000 words must look at 1000 keys. That is 1000×1000=1,000,000 comparisons.

This relationship is represented by the Big O notation: **O(N^2d)**, where d is the dimension of the tokens.

##### Attention Matrix is $N \times N$ 
which is made by computing $N \times d \times d \times N$ meaning we had to do $N \times N$ computations to even store the matrix 

#### Context size limitation
![[Pasted image 20260421212417.png]]
- We need to set this bound because 500 to 700 tokens becomes $500^2$ to $700^2 \times d$ which could be as large as $3000$. 

#### Position Encoding
![[Pasted image 20260421213736.png]]

- the first formula in tab 3 of bullet point 1 shows what happens when we usually set absolute encoding which isn’t good 
- We want to instead do relative encoding to find where each of the words are relative to the other words
- the `clip` function considers distance between m and n and makes sure the distance is within `r_min` and `r_max`
- for the bottom formulas the model **learns** $p_r^{~k}$ and $p_r^{~v}$ during training to understand how far the word is from the other vectors 