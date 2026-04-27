---
tags: 
aliases: []
---
# BLEU Evaluation
##
- ![[Pasted image 20260422194209.png]]
- ![[Pasted image 20260422194248.png]]

![[Pasted image 20260422194404.png]]
- number of words in at least one word divided by all words 

- you can add a cap to the unigram precision so that it doesn’t occur infinitely
- ![[Pasted image 20260422194604.png]]
- If you just optimize for precision then it allows for brevity
- ![[Pasted image 20260422194954.png]]
- ![[Pasted image 20260422195233.png]]
- If the nearest length is longer than the candidate itself then you add a penalty
- ![[Pasted image 20260422195631.png]]
- ![[Pasted image 20260422195647.png]]
- #csc401/exam this is meant to be a great exam question 
- ![[Pasted image 20260422195935.png]]
- 