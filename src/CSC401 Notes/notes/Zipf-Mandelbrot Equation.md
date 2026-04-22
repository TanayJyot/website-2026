---
tags: 
aliases: []
---
# Zipf-Mandelbrot Equation
##

![[Pasted image 20260328202252.png]]

### 1\. Why scale by the size of the lexicon ($|V|$)?

In the equation, we see $|V|$ appearing on both sides ($\\log(F_r |V|)$ and $\\log(r/|V|)$).

The goal here is **scale invariance**. If you compare a small corpus (a short story) to a massive one (Wikipedia), the raw ranks and frequencies will be vastly different. By dividing the rank ($r$) by $|V|$ and multiplying the frequency ($F\_r$) by $|V|$, you are looking at **proportions** rather than absolute numbers.

It ensures that the "normalization constant" ($H_N$) and the "slope" ($B_N$) describe the **language itself** (e.g., how English behaves) rather than just how much data you happened to collect.

### 2\. Why add the log of the corpus size ($\\log N$)?

This is a clever bit of logarithmic shorthand. Remember that $\\log(A) \+ \\log(B) \= \\log(A \\cdot B)$.

If we combine the terms on the left:

$$\\log(F\_r) \+ \\log N \= \\log(F\_r \\cdot N)$$  
Since **Relative Frequency ($F\_r$)** is defined as $\\frac{count}{N}$, then $F\_r \\cdot N$ is simply the **raw count** (the frequency) of the word.

* **The Reason:** Relative frequencies are tiny decimals (like $0.00001$). Their logs are large negative numbers, which are annoying to work with. Adding $\\log N$ effectively converts that decimal back into a "count" scale, moving the math into a more manageable range of positive numbers.

### **3\. What is $B\_N$ the "slope" of?**

It is the slope of the line when the data is plotted on a **log-log scale** (a graph where both the $x$ and $y$ axes are logarithmic).

In a standard Zipf distribution, we assume the slope is exactly $-1$. However, Mandelbrot noted that for most real-world datasets, the "drop-off" is slightly steeper or shallower.

* **High $B\_N$:** The frequency drops off very quickly. A few words are "super-dominant," and the rest are almost non-existent.  
* **Low $B\_N$:** The frequency drops off slowly. The vocabulary is more "flat" or diverse.

### **4\. Why do we log the ranking ($r/|V|$)?**

We do this to achieve **linearization**.

In its "natural" state, word frequency follows a **Power Law**, which looks like a steep "L" shaped curve on a normal graph. Curves are mathematically difficult to fit and analyze. By taking the log of both the frequency and the rank, that "L" curve turns into a **straight line**.

- basically to avoid forming a curve for r / |V| and everywhere else

Once the data is a straight line, we can use simple linear regression to find $B\_N$ (the slope) and $H\_N$ (the intercept). It’s essentially "straightening out" the curve so we can measure it with a ruler.


