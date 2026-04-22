### Layer Normalization
- After we get this large value, we would want to ensure that some of the noise that is added by adding the input + by the self attention is accounted for, so we normalize this output to have 0 mean and standard deviation
	- this also makes sense from a traditional ML [[feature scaling]] sense

#### Formulas
1. The Main LayerNorm Equation

The transformation of the hidden state $h^l$ into the normalized version $h^{l'}$ is given by:

$$h^{l'} = \text{LayerNorm}(h^l)$$

$$= \gamma \left( \frac{h^l - \mu^l}{\sigma^l} \right) + \beta$$

---

 2. Statistical Definitions

These formulas show how the mean ($\mu$) and variance ($\sigma^2$) are calculated across the $d$ features of a single hidden layer:

**Mean ($\mu$):**

$$\mu = \frac{1}{d} \sum_{k=1}^{d} h_k^l$$

**Variance ($\sigma^2$):**

$$\sigma^2 = \frac{1}{d} \sum_{k=1}^{d} (h_k^l - \mu)^2$$

---

Key Variables:

- $d$: The dimension of the hidden layer (number of features).
    
- $\gamma$ (**Scale**): A learnable parameter that allows the model to rescale the normalized values.
    
- $\beta$ (**Bias**): A learnable parameter that allows the model to shift the normalized values.
    
- $\mu, \sigma$: The mean and standard deviation of the features in that specific layer.

### Post vs pre-layer normalization
- Post normalization requires learning-rate to warm up to avoid initial instability 
- to avoid this we change the architecture to be: ![[Pasted image 20260421184158.png]]
- [[fisher information matrix]] - this is not expanded upon in slides #csc401/todo 
- 