---
tags: 
aliases: []
---
# feature scaling
##
- You want to scale your features in [[gradient descent]] such that the weights of each of the features are distributed evenly
- ![[Pasted image 20250701205100.png]]
- when the point range is scattered too much then gradient descent would jump too much in the contour plot and take longer to reach the global minimum. 

### Dividing by Maximum
- ![[Pasted image 20250701205653.png]]
	- Take the max number and divide by it to get a scale up to 1.

### Mean Normalization
- [[mean normalization]]

###
- [[z score normalization]]

## Why does this matter?

![[Pasted image 20250805115523.png]]

- Each input decreases at a different pace such that some inputs don’t even decrease at a particular learning rate.
- Since the learning rate is constant between inputs, the inputs themselves need to be similar in value for them to decrease consistently
- 