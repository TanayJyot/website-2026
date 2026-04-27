---
tags:
  - csc401
aliases: []
---
# term frequency
##
- frequency of [[Tokens]] of term `w` in corpus `S` 
- how many terms does w appear in S
- ![[Pasted image 20260424140226.png]]
- tempering things brings the relevance of different documents being compared, closer together
### Gemini Generated - Why do we temper? 
Specifically, in Information Retrieval, raw term frequency ($tf$) has a major drawback: a document where a keyword appears 20 times is likely more relevant than a document where it appears once, but it is probably _not_ 20 times more relevant.

Here is why we "temper" it:

- **Preventing Dominance:** If a word appears 100 times in a long document, the raw $tf$ score would be massive, completely overshadowing other useful keywords that might only appear 3 or 4 times.
- **Diminishing Returns:** The "relevance" of a word doesn't usually increase linearly. The difference between 0 and 1 occurrences is huge, but the difference between 100 and 101 is negligible.
- **The Log Solution:** By using the formula $tf_{dampen} = 1 + \log(tf)$, you flatten the curve. For example:
    - If $tf = 10$, the dampened value is approximately **2**.
    - If $tf = 100$, the dampened value only moves up to **3**.