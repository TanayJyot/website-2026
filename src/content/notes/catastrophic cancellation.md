---
tags:
  - csc110
Main Topic: "[[]]"
---
# catastrophic cancellation
## [[Week 12 Lecture 1]]
- This is what happens when we get too close to the value when working with floats. 
- Since [[float]]s have errors, if we get too close we lose the original value. 
- That’s why we need [[epsilon]].
- If you take a [[quadratic function]] try to calculate $b^2 - 4ac > 0$ but $b^2 >> 4ac$ then the float values will becomes really inaccurate as they try to reach $b^2$. 
- Use [[math.copysign()]] to fix problems.
- 





