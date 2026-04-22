---
tags: 
aliases: []
---
# f-measure
##
> weighted harmonic mean of precision and recall

- how we balance [[precision]] and [[recall]]

$$\frac{1}{\alpha \frac{1}{p} + (1-\alpha)\frac{1}{r}}$$

- if either of precision or recall are set to 0[^1] then the f-measure gets the default value of 0
- you can normally set $\alpha = ½$ because it gives both of them an equal measure and gives the $F_1$ score: $$\frac{2pr}{p + r}$$



[^1]: This will happen when the true positive count becomes 0