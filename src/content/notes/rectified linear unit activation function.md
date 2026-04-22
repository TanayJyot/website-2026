---
tags: 
aliases:
  - RELU
---
# rectified linear unit activation function
##
![[Pasted image 20241122221037.png]]
- granular
- We use it because it is super fast and it works.
### Why does this work?
![[Pasted image 20241122222005.png]]
- You can tweak the weight and bias of a single neuron to tweak the RELU.
- ![[Pasted image 20241122222049.png]]
	- If you move the weight around now, you end up determining the point at which the neuron deactivates.
- The only good thing about this is that the function cannot go negative.
- ![[Pasted image 20241122222236.png]]
- You can then see that when we increase the bias for the second neuron and then start to negate the weight then the entire starts to move.
- ![[Pasted image 20241122222545.png]]
	- We need both neurons to be activated for any kind of movement to happen, if one of them is not activated then the output remains unchanged
		- These are the constants at the top and the bottom
> When we are below the activation for the first neuron then the output will be the bias of the second neuron (1.00), if we are below the activation for the second neuron then the output will just be 0.

- You cannot get any output without both of them being activated. 
- This means that each neuron will be manipulated by its previous neuron and will over time get closer and closer to a different function which will be based on all the different functions that are activated.

___
![[Pasted image 20241219122959.png]]
- Each part of the neural network gets activated at certain points of the network and only when both of them are activated does anything useful happen 
- Here they have been setup perfectly so that only one part of the network does one action but usually this wouldn’t be the case.

## #csc401 

- RELU is popular because 
	- it allows for sparse activations since neurons that have a negative value will be turned to 0 and not be activated
	- it deals with the [[vanishing gradient problem]] since RELU will always have gradient = 1 since $g(x) = x$ for positive values
- an approximation of RELU is [[softplus]]