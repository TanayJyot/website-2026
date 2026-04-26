---
tags:
  - csc110
Main Topic: "[[]]"
---
# Automatic Aliasing

## [[6.5, 6.6, 6.7]]
- For some objects that python knows are gonna repeat a lot, python premakes values to save space. 
	- Such as
		- [[boolean type]]
		- small [[integer data type]] values
		- small [[len()]] string values. 
- **Example**: If the values are the same for certain aliases this can allow us to use the [[is operator]] on them and verify they have the same value as well as the [[id]] but the moment we change any one of those [[object]]s they won’t have the same [[id]] anymore which is not like [[mutable]].
- 






