---
tags: 
aliases:
  - regex
---
# regular expression
##
- You use notations to denote the conditions as well when doing so
- You can create patterns and this is a name for those patterns
- Used to find stuff. 
- `[]` tell you to choose one of the characters listed inside.
- [[caret]]
- [[Quantifier]]
- [[anchor]]
- `.` means any character
- `\s` is a space or a tab [[whitespace character]]
- `\t` is [[tab character]]
- `\n` is the [[newline character]]
- `[^…]` means that we can have anything except whatever is in here. 
- ![[Pasted image 20241129140655.png]]
- [[character classes]]
- `\` is the escape character so if you don’t want things to have special meaning and mean what they represent then you use this.
- `(\d\d\d)\1\a\1` refers to the group that was 1st formed. So when we say  `\1` we are referring to the first group formed by round brackets. 
- [[logical operators]]