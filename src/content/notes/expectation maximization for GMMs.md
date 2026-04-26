---
tags: 
aliases: []
---
# expectation maximization for GMMs
##
- ![[Pasted image 20260423165153.png]]
- ![[Pasted image 20260423165429.png]]
	- the probability for the overall model with $\theta$ parameters is defined as the weighted sum of the probabilities for all the models
	- then we apply [[maximum likelihood estimation]] on this
		- form one equation with all the variable for all input vectors $x$
- ![[Pasted image 20260423170323.png]]
	- notice the bottom right last formula, when we differentiate on the last term (which is dependent on $\mu$ ) then this becomes $1/P_\theta (x_t)$ and the rest of the term
		- we just applied the chain rule which brought the summation to the divisor and since the summation was equal to $P_\theta (x_t)$, we replaced it with that
	- Another note for this is that $\mu_m [n]$ needs to be done for every position to create the vectors shown in the next image for **1** Gaussian Distribution (called one mixture here)
- ![[Pasted image 20260423171423.png]]
	- the expectation formula can be made using [[Bayes Formula]] since we $w_mb_m = P(\Gamma_m)P(x_t | \Gamma_m)$ 
	- In the maximization step, we are multiplying the $x_t$ vector to the probability scalar on that timestep
	- the bottom part is obv a scalar then   
- ![[Pasted image 20260423173033.png]]



### Gemini Generated - What does $\mu_m [n]$ mean?
#### 1. One Gaussian, Multiple Features

Each Gaussian in your mixture model is responsible for explaining an **MFCC vector**.

- If your MFCCs have **13 dimensions** (energy, tilt, various frequency coefficients), your data point $x_t$ is a list of 13 numbers.
- To describe where the "center" of that data is, the Gaussian needs to have an average for **each** of those 13 features.

Think of it like describing a person:

> To find the "average" human (one single Gaussian), you can't just have one number. You need an average **height**, an average **weight**, and an average **age**.

Even though you are describing **one** single "average person" (one Gaussian), you need a **vector of means** $\vec{\mu} = \langle 170\text{cm}, 70\text{kg}, 30\text{yrs} \rangle$ to do it.

---

#### 2. The Index $n$ vs. The Index $m$

This is why the notation in your slide (image_19327e) uses two different letters:

- **$m$:** Tells you **which** Gaussian (which peak in the mountain range) you are looking at.
    
- **$n$:** Tells you **which dimension** (height, weight, or MFCC coefficient #4) you are looking at _inside_ that specific Gaussian.
    

So, $\mu_m[n]$ translates to:

> "The **$n$-th** coordinate of the center point for the **$m$-th** bell curve."