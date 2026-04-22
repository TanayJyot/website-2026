Similar to [[Indexing]] but here multiple elements are taken. 

First part of value is taken and second part is ignored. 

```python
a = "TanayJyot"[0:5]
```
Outputs Tanay 

Similary we can take everything before the last element excluding everything before that element.
```python
a = "TanayJyot"[:5]
```
Will again output Tanay.

We can also do the opposite 
```python 
a = "TanayJyot"[5:]
```
Should print “Jyot”

To create a copy we can just leave both sides blank
```python
b = "TanayJyot"
a = b[:]
```
This will store a copy of ‘b’ in ‘a’.\
Making a copy becomes useful when dealing with [[Tuples and Lists#Lists]]


___
You can also add a third parameter. This will allow you to skip values.
```python
a = "TanayJyot"[:8:2]
```
Outputs “Tnyy”
```python
# [start:stop:step]
```

## [[CSC111/Lectures/Week 1 Lecture 1|Week 1 Lecture 1]]
- Even if you put a slice too big it would still work ^874c55
```python 
s = 'Tanay'
print(s[:10])

# Outputs 'Tanay'
```

##
- Slicing can help you maintain shape:
```python
mat[:3, 1: 2]
# Outputs: array([[ 2],
			#     [ 7],
			#    [12]])
```


