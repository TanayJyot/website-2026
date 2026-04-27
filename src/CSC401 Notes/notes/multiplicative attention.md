---
tags:
aliases:
  - bilinear attention
---
# multiplicative attention
##
- **Formula:**
    
    $$a_{t,s} = \tilde{h}_t^T \cdot W \cdot h_s$$
    
- **Assumption:** $\tilde{h}_t \in \mathbb{R}^{d_1}$, $h_s \in \mathbb{R}^{d_2}$, and $W \in \mathbb{R}^{d_1 \times d_2}$.
- This allows us to have different dimensions between the weight matrices and still be fine 
- Since $W$ is learnable you can teach it which dimensions matter more in certain encoder decoder combinations instead of the raw values of the hidden states
- 