---
tags:
  - csc401
aliases: []
---
# Indexing
##


Finding the value of a particular position of a string.

```python 
a = "TanayJyot"[5]
```
Outputs ‘J’ as the counting starts from 0.

## [[Runtime analysis]]
- [[constant running time]] as it can point on one list directly. 

## #csc401 

- ![[Pasted image 20260424183744.png]]
- take all the vector embeddings [[word vector representation]] and create indexes out of them so that they are stored in a data structure we can access and use
- ![[Pasted image 20260424183843.png]]
	- this is similar to [[single value decomposition]]
- ![[Pasted image 20260424183923.png]]
	- [[product quantization]]
- [[local sensitivity hashing]]
- [[hierarchical navigable small worlds]]



### PQ vs LSH
- **PQ is a "Lossy Compression" approach:** It tries to minimize the **reconstruction error**. The goal is to represent the original vector as accurately as possible using a small number of bits so that the distance between the compressed vector and a query is almost the same as the distance to the original vector.
- **LSH is a "Space Partitioning" approach:** It tries to maximize **hash collisions** for nearby points. It uses random projections to divide the vector space into "buckets." The goal is simply to ensure that if two points are close in high-dimensional space, they end up in the same bucket with high probability.
- 