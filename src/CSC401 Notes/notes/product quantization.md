---
tags: 
aliases: []
---
# product quantization
##
- ![[Pasted image 20260424183923.png]]

### 
#### 1. Splitting: The "Divide" Step

Instead of trying to quantize one massive vector at once (which would be inaccurate), we chop the vector into smaller **sub-vectors**.

- For example, if you have a 128-dimension vector, you might split it into 8 segments of 16 dimensions each.
- This is why it is called **"Product"** quantization, the final representation is a Cartesian product of these smaller segments.

#### 2. Training: Building the Codebook

For each segment position, the algorithm looks at all the vectors in your dataset and performs **clustering** (usually K-Means).
- It identifies a few "centroids" (representative patterns) for that specific segment.
- These centroids are stored in a **Codebook**. If each segment has 256 possible centroids, we can represent that segment using just 8 bits (1 byte).

#### 3. Encoding: The "Compress" Step

Now, for every vector in your database, you replace the actual floating-point numbers in each segment with the **ID (Index)** of the closest centroid from the codebook.
- **Raw Vector:** [0.12, -0.5, 0.22, ...] → Takes up 512 bytes.
- **PQ Vector:** [ID: 12, ID: 45, ID: 2, ...] → Takes up only 8 bytes.
- This is a massive compression ratio (often 64x or more).

##### 4. The "Match" (Asymmetric Distance Computation)

When you perform a search with a **Query Vector**, you don't actually decompress the whole database. Instead:

1. You calculate the distance between the query's segments and every centroid in your codebooks.
2. You create a lookup table.
3. You "sum up" the pre-calculated distances to find the best match. This allows you to compare a query against millions of vectors using simple additions rather than heavy matrix multiplication.