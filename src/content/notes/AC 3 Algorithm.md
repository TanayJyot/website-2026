---
tags: 
aliases: []
---
# AC 3 Algorithm
##
- the `revise` function removes all elements in x that do not allow us to satisfy the given constraint of the current arc.

## Properties
- we need to add arcs back to the set because every time we reduce an element from the arc, we risk breaking the arc consistency
- we can get away with not adding <B, A> for <A, B> because the only connections that get destroyed are the ones that didn’t work in the first place 
- 