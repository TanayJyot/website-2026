---
tags: 
aliases: []
---
# Depth-First Minimax Search
##
- you look for max and min nodes
- if you are at a max node, then the node above it is looking for a min node,
	- since the node above it is looking for a min node, you would want to find a value such that the 
	- Consider that you are at branch 1 that has a super low value, you would want to go to a branch that has a higher value then $\beta$ parameter would be set to this value, if you now go to branch 2, then then since this node is looking for a max node and the value that you encounter is already greater than branch 1, this means that even if there is a smaller value in the other children it would not matter because only this or a larger value than this would be selected.
- 