If a particular value is present within an output of “True” will be given. 

```python 
"y" in "TanayJyot"
```
Outputs ‘True’
- we can use “not” together with “in”

```python
"z" not in "TanayJyot"
```
outputs ‘True’

___
# From [[Week 1 Computer Science]]
```python 
'' in 'Computer' 
# Outputs True 
```
> The empty string is a substring of every string. 
#csc110/comeback  
# From [[Week 1 Computer Science]]
- When it comes to [[Mapping operations]] the ‘in’ operator only works for keys and fails when it comes to values. 

## [[Week 9 Lecture 3]]
### Runtime analysis
- [[‘in’ Operator]] does not have a constant time, it depends on the scope of the operation.[^1] in lists. 
- However you can get [[worst-case running time]] which will be equal to $\Theta(n)$. 








[^1]: But are there certain values that will be reached sooner because of the way **int** operates? #csc110/questions 
