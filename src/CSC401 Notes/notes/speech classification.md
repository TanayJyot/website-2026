---
tags: 
aliases: []
---
# speech classification
##
- ![[Pasted image 20260423121001.png]]
- If we assume that the data is in the bins that we defined then we can fit a Gaussian function on the whole data by selecting some appropriate value for mean and variance ![[Pasted image 20260423121035.png]]
- [[normal distribution|1-D Guassians]]
- [[multivariate gaussians]]
- [[gaussian mixture models]]

### Speaker Recognition
![[Pasted image 20260423173349.png]]

![[Pasted image 20260423173423.png]]


### Gemini Generated - How we figure out which speaker to choose
#### 1. Training Phase: Iterative (The "Loop")

For every speaker in your database (e.g., Speaker A, Speaker B, Speaker C), you perform the **EM algorithm** separately.

- You take only the training data for **Speaker A** and run the E-step and M-step iteratively (usually for a fixed number of iterations like 10 or 20).
- **Goal:** You are looking for the best $\theta_A = \{\omega_m, \vec{\mu}_m, \Sigma_m\}$ that describes how _that specific person_ sounds.
- Once the parameters stop changing much (convergence), you **stop updating**. You now have a "frozen" model for each speaker.

#### 2. Inference Phase: One-Time Calculation

When you get a **new, unknown audio clip** ($\vec{X}_{unknown}$) and want to know who is speaking, you don't update anything. You perform a "competition":

1. **Calculate Likelihood:** You feed the unknown audio into Speaker A’s model, Speaker B’s model, etc.
    
2. **The Score:** You calculate the total log-likelihood for the entire sequence of frames $T$:
    
    $$L(X | \text{Speaker}) = \sum_{t=1}^T \log \left( \sum_{m=1}^M \omega_m \mathcal{N}(\vec{x}_t; \vec{\mu}_m, \Sigma_m) \right)$$
    
3. **The Winner:** You choose the speaker whose model produced the highest probability.
    
    $$\text{Winner} = \arg\max_{\text{speaker}} P(\vec{X}_{unknown} | \theta_{\text{speaker}})$$