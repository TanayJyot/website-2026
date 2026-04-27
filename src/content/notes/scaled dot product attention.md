---
tags: 
aliases: []
---
# scaled dot product attention
##
- $$a_{t,s} = \frac{\sum_{i=1}^{d} (\tilde{h}_{t,i} \cdot h_{s,i})}{\sqrt{d}}$$
- or more generally $$score(a, b) = |a|^{-1/2}
\langle a, b \rangle
$$
- **Constraint:** The dimensions must match ($\tilde{h}_t, h_s \in \mathbb{R}^d$).
