---
tags: 
aliases: []
---
# beam search
##
- ![[Pasted image 20260422190418.png]]
- We take the log probabilities for all the possible scores above so that we get same sequence for the hypothesis but can sum them instead of multiplying them
- you will change the last $y_t$ 
- ![[Pasted image 20260422190752.png]]
- ![[Pasted image 20260422193411.png]]
 

### Gemini Generated Explanation
- go line by line and remember that $k \in f$ means that do no change
- 
#### Initialization (The Setup)

- **$b_{0,0}^{(k)} \leftarrow \tilde{h}_0$:** Set the starting hidden state for all $K$ beams.
    
- **$b_{0,1}^{(k)} \leftarrow [<s>]$:** Every beam starts with the "start of sentence" token.
    
- **$\log P(b_0^{(k)}) \leftarrow -\mathbb{I}_{k \neq 1} \infty$:** This is a clever trick. It sets the score of the first beam to 0 and all other beams to $-\infty$. This ensures that in the first step, we only branch out from one path (otherwise, you'd just have $K$ identical copies of the same first word).
    
- **$f \leftarrow \emptyset$:** Create an empty list to keep track of which beams have finished (hit the $</s>$ token).
    

---

#### 2. The Loop (While $1 \notin f$)

The search continues until the **best** beam (index 1) has finished.

#### Step A: Generate New States

- **$\tilde{h}_{t+1}^{(k)} \leftarrow \sigma(b_{t,0}^{(k)}, last(b_{t,1}^{(k)}))$:** For each active beam, feed the current hidden state and the very last word you picked into the decoder ($\sigma$) to get the **next** hidden state.
    

#### Step B: Expand and Score (The "Explosion")

- **$\forall v \in V, k \in [1, K] \setminus f$:** For every beam that isn't finished, try **every single word** in the vocabulary ($V$). If you have a vocab of 50,000 and $K=5$, you are now looking at 250,000 possibilities.
    
- **$\log P(b_t^{(k \rightarrow v)}) \leftarrow \dots$:** Calculate the new score. As we discussed before, this is:
    
    $$\text{Previous Score} + \log P(\text{new word} | \text{context})$$
    

#### Step C: Handle Finished Beams

- **$k \in f$:** If a beam already ended in $</s>$ in a previous step, don't add new words to it. Its score stays the same (unless you try to add something other than $</s>$, in which case the score becomes $-\infty$ to kill that path).
    

#### Step D: The "Pruning" (The Argmax)

- **$b_{t+1}^{(k)} \leftarrow \text{argmax}^k \dots$:** Out of those 250,000 possibilities we just created, **keep only the top $K$** with the highest log probabilities. This is why it's called a "beam"—the search narrows back down to $K$ paths.
    

---

#### 3. Update and Terminate

- **$f \leftarrow \{k \dots last(\dots) = </s>\}$:** Check our new top $K$ beams. If any of them just picked the "end of sentence" token, add them to the "finished" list $f$.
    
- **$t \leftarrow t + 1$:** Increment the time step and go again.
    

#### 4. Return

- **Return $b_{t,1}^{(1)}$:** Once the best performing beam is finished, return its sequence of words

### Sub-Word Tokenization 
- ![[Pasted image 20260422193901.png]]

### Automatic Evaluation 
