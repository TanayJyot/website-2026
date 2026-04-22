---
tags: 
aliases: []
---
# Markov assumptions
##
- these are assumptions you make with Markov models so that the NLP math is feasible

### Limited Extent
- you limit the amount of data available to the “near future” which is similar to how [[n-grams]] function

**$$P(w_n \mid w_{1:(n-1)}) \approx P(w_n \mid w_{(n-L+1):(n-1)})$$
### Time Invariance
- which part of the text you are at or how far you are in the corpus doesn’t matter only things around the text matter
- this allows us to **not** have a different probability based on time *t* every time a given word appears
