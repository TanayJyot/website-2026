---
tags: 
aliases: []
---
# forward-backward algorithm
##
![[Pasted image 20260424115324.png]]
- assume the emission probabilities are normally distributed
- Transition probabilities to get to state $j$ need to sum up to 1 
	- so that you can always get to this state
	- if there are 2 paths to get to j then one path would have 0.4 probability and the other would have 0.6 
- The gaussian parameters for state $j$ are used to denote what state $j$ contains 

### Gemini Generated - Why do we need parameters for state j? 
#### 1. The Mean Vector ($\mu_j$)

The mean represents the **center** or the **average observation** for that state.

- If state $j$ represents the phoneme "aa" in speech, $\mu_j$ would be the average frequency coordinates for that sound.
- In the trellis, when the path "visits" state $j$ at time $t$, the model compares the actual observation $x_t$ to $\mu_j$. The closer $x_t$ is to the mean, the higher the likelihood $b_j(x_t)$ will be.
#### 2. The Covariance Matrix ($\Sigma_j$)

The covariance represents the **spread** and **shape** of the noise around that mean. It tells the model how much variation to expect and how different dimensions of the data relate to each other.

- **Variance (Diagonal):** How "picky" is the state? A small variance means the state only accepts observations very close to the mean. A large variance means it's a "broad" state that accepts a wide range of values.
- **Covariance (Off-diagonal):** If your observation $\mathbf{x}$ has multiple features (like $x$-axis and $y$-axis), the covariance tells you if they change together. For example, if $x$ increases, does $y$ usually increase too?