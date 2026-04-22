---
tags: 
aliases: []
---
# maximum likelihood estimation
##
- you use [[relative frequency]] to estimate how often given words will appear
- you can calculate how often a given word will appear in the text in the future based on how much it has appeared until this point
	- this is called taking a frequentist view and allows the *mle* to just be an estimate of the count of the words appearing

$$P_{\text{MLE}}(w_1 \cdots w_n) = \frac{C(w_1 \cdots w_n)}{N}$$
$$P_{\text{MLE}}(w_n \mid w_1 \cdots w_{n-1}) = \frac{C(w_1 \cdots w_n)}{C(w_1 \cdots w_{n-1})}$$
