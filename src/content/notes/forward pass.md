---
tags:
  - csc401
aliases:
  - feed-forward
---
# forward pass
##
### Calculation

[Could not find platform dependent libraries \<exec\_prefix\> Unhandled...](https://www.perplexity.ai/search/could-not-find-platform-depend-CUCVEMzdQgqg76d_FcIRrg)

```python
n_inputs = 4
n_neurons = 5

# Weights initialization
weights = 0.10 * np.random.randn(n_inputs, n_neurons)
weights = np.array([
    [ 0.17640523,  0.04001572,  0.0978738 ,  0.22408932,  0.1867558 ],
    [-0.09772779,  0.09500884, -0.01513572, -0.01032189,  0.04105985],
    [ 0.01440436,  0.14542735,  0.07610377,  0.0121675 ,  0.04438632],
    [ 0.03336743,  0.14940791, -0.02051583,  0.03130677, -0.08540957]
])

# Biases initialization
biases = np.zeros((1, n_neurons))
```

- Let’s say you have a $3\times 4$ matrix of inputs
- Then let’s say that you want to generate a layer dense with 4 inputs (from before) and with 5 neurons
- then you would need weights corresponding to exactly this so that the weights can be put to each neuron.
- You can use the [[Random]] function here to generate this  $4 \times 5$ matrix.
- Then in the forward pass function you will find the [[dot product]] of this matrix giving us a $3 \times 5$ matrix.
- Honestly seems more like matrix multiplication than dot product.

## #csc401 

- you first conduct the calculation $$y = \sum w_ix_i$$ and then apply the [[activation function]] $g$ 
- 