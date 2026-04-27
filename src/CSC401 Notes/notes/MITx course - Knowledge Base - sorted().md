Sorts list according to order. However the sequence in the original list does not change. 
```python
List1 = ["c", "a", "b"]
List2 = sorted(List1)
print(List1, List2) 
# Outputs ['c', 'a', 'b'] ['a', 'b', 'c']
```
- Needs output to be stored in a variable 
- Does not change original list
- has a [[key()]] parameter

- **When we apply sorted it automatically creates a list. That is what it ‘returns’**
```python
sorted((5,3,4))
# Outputs [3, 4, 5]
```
