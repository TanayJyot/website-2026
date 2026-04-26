- Used in [[for Loop]]. 
- Can change the value of a variable and stop changing it to stop the loop from executing further. 
- Can either be used like:
```python
for i in range(10)
```
the value of i goes from 0 to 9 and code stops executing once it reaches 10.

- Can also be used like:
```python
for i in range(4,10)
```
Will change the value of i from 4 to 9 . Will execute till 9 

- Used in combination with [[len()]].
___
- You can also add a step and go like:
```python
{i for i in range(4,10,2)}
```
#csc110/comeback 
# How Range works 
- Returns something like a [[Tuples and Lists#Tuples]]
- range generates a collection of numbers as a tuple/list. Then, the [[Core Elements Of Programs#Iteration]] iterates over this. 
```python
for i in range(5):
# is same as 
for var in (0, 1, 2 ,3 ,4):
```

