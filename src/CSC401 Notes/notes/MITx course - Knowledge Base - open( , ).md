- It takes the file name in the first part and the action with the file in the second.
- ‘w’ indicates writing in the file 
- ‘r’ indicates reading in the file.  
- You can set this up with a variable:
```python 
NameHandle = open('write stuff', 'w') #w to write
for i in range(2):
	name = input()
	nameHandle.write(name + '\')
nameHandle.close()
```
- ‘\\‘ indicates starting a new line.

