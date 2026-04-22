---
tags: 
aliases: []
---
# cross entropy
##
- you symbolize the real world by P and the outputs of your model by Q
- The amount of uncertainty that your model outputs have compared to $
$$H(X; Q) = \sum_{x} P(x) \log_2 \frac{1}{Q(x)}$$
- If Q(X) is low and P(X) is high meaning something appears frequently in the real world but not in our model then the cross entropy would be high
- we would want to minimize this value to be equal to the entropy so that it matches our real data


[[entropy rate]]