---
tags: 
aliases: []
---
# statistical significance testing
##

1. State a Hypothesis and choose a test
	1. Decide on a [[null hypothesis]]
2. Compute some test statistic and associated p-value
	1. [[t-statistic]]
		1. they didn’t expand on this, only casually mentioned it so far
3. Reject [[null hypothesis]] if $p \le a$, p is the probability produced by the current hypothesis and $a$ gives you the significance level for this hypothesis to be false
	1. Null Hypothesis is something stupid like what would happen by random chance
	2. if we can reject $H_0$ then our result is significant
	3. $a$ usually equal to 5% / 0.05

### Pitfalls

The provided slides outline three common pitfalls in statistical analysis:

#### Pitfall 1: Parametric Assumptions

- **Definition:** Parametric tests rely on specific assumptions about the underlying distribution of random variables (typically that they are normally distributed with fixed variance).
    
- **Risks:** If these assumptions are incorrect, the null hypothesis ($H_0$) might be rejected for spurious reasons.
    
- **Mitigation:** Data should undergo normality testing first, though this is difficult with small sample sizes ($N$).
    
- **Alternative:** Non-parametric tests must be used if data is non-normal, though they are generally less powerful and result in higher p-values.
    

#### Pitfall 2: Multiple Comparisons

- **Concept:** Conducting a high volume of statistical tests increases the probability of finding "significance" by pure chance.
    
- **Example:** While the probability of one fair coin yielding $\ge 9/10$ heads is very low ($\approx 0.01$), the probability that at least one coin out of 173 will hit that mark is $\approx 0.84$.
    
- **Outcome:** The more tests performed, the more likely you are to accidentally encounter spurious (incorrect) significance.
    

#### Pitfall 3: Effect Size

- **Concept:** Statistical significance does not equal practical importance.
    
- **Example:** Two means (e.g., $\mu_1 = 1$ and $\mu_2 = 1.00000000000001$) can be mathematically "significantly different" without the difference being meaningful.
    
- **Decision:** Researchers must determine if a detected difference is worth the attention, often by utilizing specific measures of **effect size**.