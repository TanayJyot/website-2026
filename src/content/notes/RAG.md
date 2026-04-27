---
tags:
aliases:
  - "Retrieval\rAugmented\rGeneration"
---
# RAG
##
- ![[Pasted image 20260424183530.png]]
- [[chunking]]
- [[MITx course - Knowledge Base - Indexing]]
- ![[Pasted image 20260424184929.png]]

### Prompting
- ![[Pasted image 20260424185350.png]]
	- Hierarchical chunks means that for the current chunk, find the cosine similarity to find other similar chunks and retrieve those as well
		- these will usually be like the chunk’s parents for example which is where the hierarchy comes from
	- Context window is just add one sentence before and after
	- Hybridization means running something like BM25 on our vector database as well so that the outputs you give to the LLM contain both the outputs of BM25 and the outputs from one of the 4 Indexing / Retrieval methods
		- this will allow specific terms that may have been missed out to be included

### Evaluation
- ![[Pasted image 20260424190256.png]]
- ![[Pasted image 20260424190943.png]]
	- we evaluate things on the basis of whether or not the chunk has relevant information
	- **At Rank 1:** The chunk is relevant. $P@1 = \frac{1 \text{ relevant}}{1 \text{ total}} = \mathbf{1.0}$.
		- **At Rank 2:** We now have 1 relevant chunk out of 2 total. $P@2 = \frac{1 \text{ relevant}}{2 \text{ total}} = \mathbf{0.5}$.
		- **Calculation:** The slide averages these two precision scores:
		- $$\frac{1 + 0.5}{2} = \mathbf{0.75}$$
	- **At Rank 1:** The chunk is irrelevant. $P@1 = \frac{0 \text{ relevant}}{1 \text{ total}} = \mathbf{0}$.
		- **At Rank 2:** We finally found the relevant chunk. Out of the 2 chunks seen so far, only 1 is relevant. $P@2 = \frac{1 \text{ relevant}}{2 \text{ total}} = \mathbf{0.5}$.
		- **Calculation:** Again, we average the precision values at each step:
		- $$\frac{0 + 0.5}{2} = \mathbf{0.25}$$

- ![[Pasted image 20260424191520.png]]
	- this is a word level comparison vs the number of sentences that contain relevant words. In the first example, both sentences contain relevant words

#### Generation
- ![[Pasted image 20260424191803.png]]
	- Answer relevancy would try to guess what the original question was 
	- ![[Pasted image 20260424192037.png]]
	- 