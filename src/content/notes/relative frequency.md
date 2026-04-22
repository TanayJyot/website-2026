---
tags:
  - csc401
aliases:
---
# relative frequency
##
> [!note] how often do words appear relative to the corpus

- Think in terms of proportion of heads rather than the frequency of the occurence itself.

$$F_S(w) = TF(w, s) / |S|$$
- take the [[term frequency]] and divided by the number of words in the corpus
- will be between 0 and 1 because you are dividing by all the words in the corpus giving us a probability
- term frequency alone is just a count whereas relative frequency normalizes that count to the given document
- As $|S|$ grows $F_S(w)$ converges to $P(w)$
- if our [[lexicon]] |V| increases with |S| then our average relative frequency would converge to 0 
	- since there are more of different kinds of words, the words become more and more infrequent
- 