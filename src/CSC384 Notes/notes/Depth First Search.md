---
tags: 
aliases:
  - DFS
---
# Depth First Search
##
-  Uses a [[stack]] to add and remove elements
	- because it is [[Last In First Out Behaviour]] the elements inserted by the child are the first ones to be printed as needed in the DFS.
	- The stack in `NotYetFDFS` can be replaced with recursion where you recurse over each child. 
- Uses colors like [[Breadth First Search|BFS]], 
- #csc263/question What is the point of the black vertices. 
- We store the node from which we get to `v` in `v.p`. 
- We also store the discovery and finish time as `v.d` and `v.f`. 
- Have 3 colours,
	- White - Unexplored
	- Gray - Identified
	- Black - All children identified. 
- finish times are updates as the vertex turns black. 
-  

```python 
DFS(G) :  
1. for each t ∈ G.V : # Initializing  
	1. t.colour = White  
	2. t.p = nil  
2. time = 0  
3. for each s ∈ G.V :  
	1. if s.colour == White # Make sure NO vertex is left unvisited.  
	2. DFSVisit(G, s)
```

```python 
DFSVisit(G, s) :  
1. time = time + 1 # time is a global variable  
2. s.d = time  
3. s.colour = Gray  
4. for each t ∈ G.adj[s]:  
5. if t.colour == White # only visit unvisited vertices  
	1. t.p = s # t is introduced as s’s neighbour  
	2. DFSVisit(G, t)  
6. s.colour = Black # s is explored as all its neighbours have been encountered  
7. time = time + 1  
8. s.f = time
```

- [[tree edge]]
- [[back edge]]
- [[forward edge]]
- [[cross edge]]
- [[parenthesis theorem]]

### Detecting Cycles
- DFS yields a [[back edge]], iff graph contains a cycle. 
- So essentially if you run DFS and you find a that for a node adjacent to v, there is a node that is gray then you have a cycle. 
- we need this for topological sort and if the edges represent then we can detect cyclic dependencies. 

### 
- [[topological sort]]

## Searching
- the tree can go on forever if there are infinite states so it does not make for a very optimal solution
- not complete and not optimal
- SC = bm because of the stack + storing the unexplored nodes in the branching factor
- TC = $b^m$ because it will explore all possible states