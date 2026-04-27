Use ‘.split()’ to break string from particular character thus converting it to a string.
```python
string1 = "Hi > Hello"
List1 = string1.split(">")

print(List1)
# Outputs ['Hi ', ' Hello']
```
- If you put nothing in the bracket then the split happens from the space:
```python 
string1 = "Hi Hello"
List1 = string1.split()

print(List1)
# Outputs ['Hi', 'Hello']
```