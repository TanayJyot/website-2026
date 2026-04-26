---
tags: 
aliases: []
---
# A* search
##
- you take the value of the [[cost function]] and the [[heuristic function]] and add them up and try to minimize it 

### Completeness
- since this can use [[uniform cost search]] if the heuristic doesn’t work allowing it to still be complete

### Optimality
- Yes, if [[heuristic function]] satisfies some mild conditions

- Time complexity and Space Complexity are both exponential

---

- fails with multiple path pruning in terms of optimality because some optimal state may not be observed