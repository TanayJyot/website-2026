# Bindings 
[[variable]]
- Binding is the process wherein the value is stored in the variable 
- ‘=‘ is used for assignment.
- We must be careful while swapping variable values. 

# Strings:

- Sequence of characters is a string
- Can be any type of characters. 
- Use ‘+‘ sign to concatenate strings. 
- We say that we have ‘overloaded’ addition.
- Here the [[Operators]] such as addition perform a different action according to the object type. 
- [[Concatenation]]
- [[Successive Concatenation]]
- [[len()]]
- [[Indexing]]
- [[Slicing]]
- [[‘in’ Operator]]

# Input/Output
[[print()]]
[[input()]]

# IDEs

- a text editor that we can use to write Python code comes along with an [[IDE]]

# Control Flow:

- The code in a simple [[Introduction To Python#Branching Programs:]] is linear. So code will get longer as more code is written and the program will get way less efficient. 

[[while Loop]]
[[for Loop]]
[[break statement]]

# Iteration:
- Allows us to use the same code multiple times.
- This also starts and uses conditions like[[Introduction To Python#Branching Programs:]]

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

[[abs()]]
[[decrementing function]]

## Errors that can occur within the loop:

- If we don’t initialize the variable 
	- we are likely to get a [[NameError]]
	- Loop may start somewhere we don’t want it to.
- If we don’t change the variable within the loop then the loop might end up running forever.
## Guess and check:
Occurs in a process called [[exhaustive enumeration]]

___
# Summary
- Addition is said to be overloaded when it is used on **strings**. 
- You can use “\*”  to do [[Successive Concatenation]]. 
- For iteration, you need a variable that falsifies within the loop. 
- Use [[abs()]] to get the positive number under any circumstances. 
- Guess and check basically does every possible thing which is a very inefficient way to #solve a #problem because there are always gonna be #conditions that you can modify from to make the process easier. 