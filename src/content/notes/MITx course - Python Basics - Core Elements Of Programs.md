# Bindings 
[[MITx course - Knowledge Base - variable]]
- Binding is the process wherein the value is stored in the variable 
- ‘=‘ is used for assignment.
- We must be careful while swapping variable values. 

# Strings:

- Sequence of characters is a string
- Can be any type of characters. 
- Use ‘+‘ sign to concatenate strings. 
- We say that we have ‘overloaded’ addition.
- Here the [[MITx course - Knowledge Base - Operators]] such as addition perform a different action according to the object type. 
- [[MITx course - Knowledge Base - Concatenation]]
- [[MITx course - Knowledge Base - Successive Concatenation]]
- [[MITx course - Knowledge Base - len()]]
- [[MITx course - Knowledge Base - Indexing]]
- [[MITx course - Knowledge Base - Slicing]]
- [[MITx course - Knowledge Base - ‘in’ Operator]]

# Input/Output
[[MITx course - Knowledge Base - print()]]
[[MITx course - Knowledge Base - input()]]

# IDEs

- a text editor that we can use to write Python code comes along with an [[MITx course - Knowledge Base - IDE]]

# Control Flow:

- The code in a simple [[MITx course - Python Basics - Introduction To Python#Branching Programs:]] is linear. So code will get longer as more code is written and the program will get way less efficient. 

[[MITx course - Knowledge Base - while Loop]]
[[MITx course - Knowledge Base - for Loop]]
[[MITx course - Knowledge Base - break statement]]

# Iteration:
- Allows us to use the same code multiple times.
- This also starts and uses conditions like[[MITx course - Python Basics - Introduction To Python#Branching Programs:]]

Program to square a number:
```python
a = int(input("enter number to be squared"))
temp = a 

for counter in range (a-1):
    a = a + temp
print(a) 
```

For iteration:
- There needs to be an iteration variable 
- Condition to falsify variable when loop is completed
- Need to change the variable within the loop. 

___
The time taken in looping structures depends on the values of the variables as well as the length of the program. 

# Guess and Check 
#algorithm 
- Make guesses, check them and iterate the program until a similar value is obtained. 
- In case of finding the root we use a loop to generate guesses. 
```python
k = int(input("a number"))
count = 0
while count**3<k:
    count +=1

print(count)
if count**3 == k:
    print("number input is a perfect cube")
else:
    print("oh no!!!")
```

[[MITx course - Knowledge Base - abs()]]
[[MITx course - Knowledge Base - decrementing function]]

## Errors that can occur within the loop:

- If we don’t initialize the variable 
	- we are likely to get a [[MITx course - Knowledge Base - NameError]]
	- Loop may start somewhere we don’t want it to.
- If we don’t change the variable within the loop then the loop might end up running forever.
## Guess and check:
Occurs in a process called [[MITx course - Knowledge Base - exhaustive enumeration]]

___
# Summary
- Addition is said to be overloaded when it is used on **strings**. 
- You can use “\*”  to do [[MITx course - Knowledge Base - Successive Concatenation]]. 
- For iteration, you need a variable that falsifies within the loop. 
- Use [[MITx course - Knowledge Base - abs()]] to get the positive number under any circumstances. 
- Guess and check basically does every possible thing which is a very inefficient way to #solve a #problem because there are always gonna be #conditions that you can modify from to make the process easier. 