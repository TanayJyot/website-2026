# Tuples:
- Sequence of elements that can have different types of elements within them. 
- Tuples are [[immutable]] just like [[Core Elements Of Programs#Strings]]
- We use () to represent 
- You can do this to add stuff. 
```python

t = (1, 2)

t
Out[2]: (1, 2)

t = t + (5, 6)

t
Out[4]: (1, 2, 5, 6)
# this is in shell  

```

- If there is only one element then the tuple will need a comma to denote that. 
```python
t = ("one",) # this is a tuple 
tn = ("one")# this is not a tuple 
```

- Tuples make it easier to swap the values of  variables
```python
x = 10 

y = 20 

(x, y) = (y, x)
```

- You can do [[Core Elements Of Programs#Iteration]] over tuples 
```python
counter = 0 
aTuple = ((("five",1), ("seven", 2), ("ten, 3")))
for t in aTuple:
    counter+=1
    
print(counter)
# outputs 3 
```

# Lists 

- They follow an [[ordered sequence]].
- Denoted by \[]. 
- They are usually used with only one single kind of type, whether that be integers or strings but multiple types can be used together. [[Homogeneous collections]]
- Unlike [[Tuples and Lists#Tuples]], lists are [[Mutability]].

# List Operations

## To add elements:
- [[list.append]]
- We use the ‘.‘ as a means to access data. 
- [[Concatenation]]
- [[extend list]]

## To remove elements:

- [[del command]]
- [[list.pop()]]
- [[remove (list)]]

## Convert lists to strings and back 
- [[list()]]
- [[split string for list]]
- [[join for list to string]]

## Other List Operations 
### Sort a list:
- [[sorted()]]
- [[sort list]]
### Reverse a list:
- [[reverse list]]
### Other functions:
[5. Data Structures — Python 3.11.3 documentation](https://docs.python.org/3/tutorial/datastructures.html)

## Bringing together loops, functions, range and list:
- [[range()#How Range works]]

# Mutation, Aliasing, Cloning:
- A list is basically an object in memory that a variable points to. 
- You can have 2 variable names pointing at the same list. Basically **aliases** this can have side effects. 
- Usually when we write a=b, changing the value of b later does not affect a, but in case of lists it does. Because a and b are just 2 names for the same list. 
```python
Tanay= ["Tanay", "Jyot", "Singh"]
TJ = Tanay
Tanay.append("Chawla")
print(Tanay, TJ)
# outputs ['Tanay', 'Jyot', 'Singh', 'Chawla'] ['Tanay', 'Jyot', 'Singh', 'Chawla']
```
- To avoid this from happening we can write:
```python
Tanay= ["Tanay", "Jyot", "Singh"]
TJ = ["Tanay", "Jyot", "Singh"]
Tanay.append("Chawla")
print(Tanay, TJ)
# Outputs ['Tanay', 'Jyot', 'Singh', 'Chawla'] ['Tanay', 'Jyot', 'Singh']
```
## Clone a list:
- Instead of rewriting the whole list again, you can create a clone
```python
Tanay= ["Tanay", "Jyot", "Singh"]
TJ = Tanay[:]
Tanay.append("Chawla")
print(Tanay, TJ)
# Outputs ['Tanay', 'Jyot', 'Singh', 'Chawla'] ['Tanay', 'Jyot', 'Singh']
```
- I think this is happening because we are using’[:] to denote [[Slicing]]. 

## . 
- You can create a list within a list.
```python
Tanay= ["Tanay", "Jyot", "Singh"]
TJ = [Tanay]
print(TJ)
# Outputs [['Tanay', 'Jyot', 'Singh']]
```

- Sometimes you would wanna use [[Concatenation]] to ensure that lists don’t stick together permanently. 
- When you mutate a list then python stops iterating over the list. 
```python
List1 = ["Hi", "Hi", "Tanayjyot"]
for i in List1:
    if i == "Hi":
        List1.remove("Hi")
print(List1)        
# Outputs ['Hi', 'Tanayjyot']
```
- To avoid this you need to create a clone of the list that python can iterate over. 
```python
List1 = ["Hi", "Hi", "Tanayjyot"]
List2 = List1[:]
for i in List2:
    if i == "Hi":
        List1.remove("Hi")
print(List1) 
# Outputs ['Tanayjyot']
```

# Functions as Objects:
- In programming, we consider functions to be [[first class objects]].
- [[Functions]] can be used within lists to do something in them. 
- Python provides a general purpose way of doing such **higher order programming** using [[map()]] 