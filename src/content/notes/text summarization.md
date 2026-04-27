---
tags: 
aliases: []
---
# text summarization
##
- ![[Pasted image 20260424201901.png]]
- ![[Pasted image 20260424202120.png]]
	- Indicative means something that is just meant to indicate you towards the rest of the data like the Get More information part here
	- Informative would be the actual information 
- 
### Summarization by Extraction

- ![[Pasted image 20260424202342.png]]
- ![[Pasted image 20260424202407.png]]

- ![[Pasted image 20260424202439.png]]
- ![[Pasted image 20260424202558.png]]
- [[Bayesian Classifier]]
- ![[Pasted image 20260424205740.png]]
- ![[Pasted image 20260424205911.png]]

### Attention for Summarization
- ![[Pasted image 20260424210633.png]]
#### 1. The Encoder (The GRUs on the left)
- **The Input:** Words like "phone," "call," "start," and "immediately" are fed in one by one.
- **The GRU's Job:** At each step, the GRU updates its **Hidden State** based on the current word and the previous state.
- **The Output:** Instead of just keeping the final state, we keep **all** the hidden states ($h_1, h_2, h_3, h_4$). These contain local information about each specific word in the context of the sentence.
#### 2. The Attention Mechanism (The "Bridge")
- **Dot Product (Scores):** The decoder (currently at the `<SOS>` or "Start of Sentence" token) "asks" the encoder: "Which of your words should I focus on to predict the first word of the summary?" It does this by taking the **dot product** between its current state and every encoder hidden state.
- **Softmax (Distribution):** These scores are turned into probabilities (the light blue bars). Higher bars mean "pay more attention here."
- **Summation:** We multiply the encoder hidden states by these probabilities and sum them up to create a single **Attention Output** vector. This vector is a weighted "summary" of the input focused on what’s relevant _right now_.
#### 3. The Decoder (The GRUs on the right)
- **Prediction:** The decoder takes the Attention Output and its own state to predict the first word: "**Call**."
- **Recurrence:** In the next step, the word "Call" is fed back into the decoder GRU. It then repeats the attention process to look at the encoder states again to predict the next word, "**Phone**."\

### Centrality
- ![[Pasted image 20260424211642.png]]
- ![[Pasted image 20260424211706.png]]
- ![[Pasted image 20260424211748.png]]
	- The slide is titled "Why Look Beyond Core Sentences" because it’s warning you about **redundancy and flow**.
	- If a system only picks the most "central" sentences (high density), it might rank well on metrics, but the summary often feels like a disjointed list of facts.
	- The **"Top 10"** systems here are so good at picking these central sentences that they actually "out-centralize" the humans.
		- idk if this statement is true but I think it is interesting 

### Unsupervised Sentence Enhancement for Automatic Summarization
- ![[Pasted image 20260424212133.png]]
- ![[Pasted image 20260424212241.png]]
- ![[Pasted image 20260424212540.png]]
- 

### Other Stuff

![[Pasted image 20260424212656.png]]

- ![[Pasted image 20260424212831.png]]
	- we can see that our summaries don’t even come from the source 
- ![[Pasted image 20260424213028.png]]
	- Lower Average Frequency
		- **The Data:** Source-external predicates (verbs/actions) appear less often in general language ($1.15$ million) than the ones found inside the source ($1.77$ million).
		- **The Meaning:** Words inside a specific document tend to be more generic (e.g., "said," "went," "did"). When a model looks "outside" the source, it chooses **more precise, rarer verbs** (e.g., "collaborated," "instigated").
		- **Result:** The summary becomes more descriptive and less "repetitive" or "boring."
	- Lower Average Argument Entropy
		- Argument Entropy means that how many places can the current word take a place in, something like “did” can be in a lot of different places so it can be very surprising where it appears which is bad, this is what happens in the source text
		- **Source-internal (7.94):** High entropy means these verbs are used with a huge variety of different subjects and objects. They are "promiscuous" words that fit anywhere.
		- **Source-external (7.42):** Lower entropy means these verbs are more **specialized**. They only "pair" with specific types of arguments.
		- **The Meaning:** If a model introduces an external word, it’s likely doing so because that word has a very specific meaning that fits the context perfectly, rather than just using a "one-size-fits-all" verb from the text.
	- **Human-written summaries are better because humans don't just recycle words from the text.** They use their vocabulary to find rarer, more specific words that carry more information in less space.
	- The second table isn't talking about the entropy of the _word_ it’s talking about **Argument Entropy**. This is where the "randomness" part changes:
		- **High Argument Entropy (Source-internal):** A word like "did" can take almost anything as an argument (He _did_ a dance, she _did_ her taxes, it _did_ nothing). Because the "slots" around the word can be filled by almost any word in the dictionary, the **uncertainty** (entropy) of what comes next is very high.
		-  **Low Argument Entropy (Source-external):** A specific word like "subpoenaed" has very strict requirements. You usually subpoena a _witness_ or _documents_. Because the "pool" of potential arguments is much smaller and more predictable, the **entropy is lower**.

- [[latent query document summarization]]