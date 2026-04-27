---
tags: 
aliases: []
---
# automatic speech recognition
##
- ![[Pasted image 20260423231055.png]]
- ![[Pasted image 20260423231145.png]]
	- what speech embeddings comprise of what word I guess
- ![[Pasted image 20260423231252.png]]
  - ![[Pasted image 20260423231407.png]]
  - ![[Pasted image 20260423231818.png]]
  - ![[Pasted image 20260423231849.png]]
  - ![[Pasted image 20260423231928.png]]
  - ![[Pasted image 20260423232217.png]]
    - 1. The "Temporal" Problem (Time Matters)
      - The first half of the slide points out that **speech changes over time**.
        - **Per-frame decisions:** When we use a GMM, we look at one 10ms frame of audio at a time and ask "what sound is this?" The GMM treats each frame as totally independent from the one before it.
        - **Lack of Order:** A GMM doesn't care if you say "eat" or "tea." Since it doesn't encode "label order," it just sees the same pile of phonemes (/t/, /iy/) in a different sequence.
        - **The "Valuable Context":** In reality, the sound you are making _now_ is heavily influenced by the sound you just finished making. Simple GMMs throw this context away.
        - The "Labeling" Problem (The Alignment Gap)
      - The second half explains a major hurdle in **supervised training**.
	      - **Total vs. Frame labels:** Usually, we have a recording and a 
	      - transcript that says the person said the word **"Open."** **The Gap:** We know the whole recording is "Open," but we don't naturally know exactly which milliseconds are the "O" sound, which are the "P," and which are the "N."
	      - **The "Missing Data":** To train a model to recognize an "O," we need thousands of examples of "O." But if our data just says "the word is Open," we are missing the specific **frame-level labels**.
	  - The Big Question: "How do we maximize the likelihood of 'Open'?"
		  - This is the "cliffhanger" of the slide. It’s asking: _How can we train a model when we only know the final word, but not the timestamps for every tiny sound inside that word?_
		  - This is exactly what the **Expectation-Maximization (EM)** algorithm (and later, the Forward-Backward algorithm in HMMs) solves. It "guesses" the alignment, improves the model, and then uses the better model to "guess" the alignment again until it gets it right.
- ![[Pasted image 20260423232649.png]]
- ![[Pasted image 20260424102721.png]]
	- $(i, j) \le (i', j')$ where $i \le i'$ and $j \le j'$.
		- this is the principle by which things need to work since going from $a_3, b_2$ to $a_3, b_2$ will be going up
		- `monotonic_forward` wouldn’t allow for this anyways


- The rest of the slide deck is pretty straightforward and doesn’t need mentioning
- 