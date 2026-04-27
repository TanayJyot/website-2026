---
tags: 
aliases: []
---
# spectrogram filtering
##
- ![[Pasted image 20260423102335.png]]
- $n$ is the number of discrete points you have in your data 
- $T$ is the total number of frames
- $M$ is the frequency ranges you need to pick through
- We are essentially doing $|X_t|[n] \cdot |F_m|[n]$, this means that whenever the filter is high for the $t$th frame and for the $m$th filter, they would multiply to give a high value which would then be logged to give a decently high value and take this “frequency” seriously
	- $F_m$ acts as a filter whenever the values match up to each other


- [[mel-scale filter bank]]
- [[source-filter model]]
- 