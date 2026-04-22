---
tags: 
aliases: []
---
# self-attention
##
![[Pasted image 20260421184520.png]]
- you take the weight matrices and calculate a score between the query and key / 

### Why do we have $d_k$

$\sqrt{d_k}$ is the **scaling factor**.

Here is the breakdown of why it's there and what it does for your model:

---

#### 1. What does the variable represent?

- **$d_k$**: This is the **dimension** of the keys (and queries). In a standard Transformer, if your hidden layer size is $512$ and you have $8$ attention heads, then $d_k$ would be $512 / 8 = 64$.
    
- **$\sqrt{d_k}$**: Taking the square root of that dimension provides a constant scaling value.
    

#### 2. Why do we divide by it? (The "Scale" in Scaled Dot-Product)

When you calculate the dot product $q_i \cdot k_j$, you are multiplying two vectors. As the dimension ($d_k$) of those vectors gets larger, the magnitude of the resulting dot product tends to grow very large.

- **The Vanishing Gradient Problem:** If the dot products are very large, the **Softmax** function (Step 3) will push the output values toward $0$ or $1$ (extreme regions).
    
- **The Result:** In these regions, the gradient of the softmax function becomes extremely small (almost zero). This makes it very hard for the model to learn during backpropagation because the "signal" for updating the weights disappears.
    
- **The Fix:** Dividing by $\sqrt{d_k}$ keeps the values of the dot product in a more reasonable range, ensuring that the softmax remains in a region where gradients are healthy and the model can actually train.


### Last Step 
- In the last step we multiply each value to its $a_{i,j}$ 
- $a_{i,j}$  tells us how for this specific query $q_i$ how much we should care about the specific key $j$ and then we multiply this by the value $j$ which is a dictionary from the key $j$
- in this context $i$ in $a_{i, j}$ doesn’t matter for the context of this word

### Vectorized Notation and Diagram
![[Pasted image 20260421185723.png]]

![[Pasted image 20260421190150.png]]

![[Pasted image 20260421205355.png]]



- [[masked self-attention]]
- 