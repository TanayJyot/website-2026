---
tags: 
aliases: []
---
# add-1 smoothing
## 
- For Unigrams you add 1 to the current smoothing

$$P_{Laplace}(w) = \frac{c(w) + 1}{N + |V|}$$
- this removes the problem of 0 probability but takes away a **lot** of probability from the items that do already have a probability
- results are not great 
- sometimes ~90% of probability mass spread across unseen events 
- we need to know $V$ beforehand[^1]



[^1]: We also need to know V anyways beforehand even for [[add-delta smoothing]] smoothing