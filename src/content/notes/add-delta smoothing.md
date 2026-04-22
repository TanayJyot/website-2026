---
tags: 
aliases: []
---
# add-delta smoothing
##
- instead of adding 1 like [[add-1 smoothing]] you add a smaller number to smooth more equally
- $$P_{\delta}(w) = \frac{c(w) + \delta}{N + \delta|V|}$$
- this will still give a proper probability distribution since 
$$\sum_{w} P_{\text{add}-\delta}(w) = \sum_{w} \frac{\text{Count}(w) + \delta}{N + \delta\|\mathcal{V}\|} = \frac{\sum_{w} \text{Count}(w) + \sum_{w} \delta}{N + \delta\|\mathcal{V}\|} = \frac{N + \delta\|\mathcal{V}\|}{N + \delta\|\mathcal{V}\|} = 1$$

- #csc401/exam
- 