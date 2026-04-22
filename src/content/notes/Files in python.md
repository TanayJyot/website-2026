# Files in python
- It can be difficult to handle everything in one file in large programs.
- So we have [[module]]

- If there is a module called circle.py
	- To get data out of this module you will use the ‘.‘ symbol
	```python
	import circle
	print(circle.pi) # prints value of pi stored in circle 
	print(circle.area(3))# executes area function in circle.py and prints value 
```

- If this is tedious, you can use a different syntax:

```python
from circle import * #This imports everything
print(pi)
```
- Everything from circle.py creates a scope in the current scope. 

___
## Files within python 
- Python has an operating system within it to handle files. 
- It does this using a **file handle**. 
- Using the command [[open( , )]]
```python
FileName = open("this is a file", "w")
```
- If you use write the previous data in the file would be deleted.
- [[close()]] 
- 
___