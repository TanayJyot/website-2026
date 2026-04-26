# Decomposition and Abstraction:
> Good programming is not measured by the amount of lines of code written but the amount of functionality the code provides.

- We use [[Functions]] to reduce the amount times we need to write code.

- [[MITx course/Abstraction]]
- [[Gall's Law]]
- [[Decomposition]]

- When [[Decomposition]] and [[MITx course/Knowledge Base/Abstraction]] are used together code can be used many times when it has been debugged only once

# Introducing Functions:
[[Functions]] do not ‘function’ unless they are called upon.
- It has:
	1. A name 
	2. [[parameter]]
	3. [[docstring]]
	4. body

![[Pasted image 20230408203206.png]]
- The value 3 will be used everywhere in place of ‘i’ inside the function.


# Calling Functions and Scope:
```python
def f(x):
    return x 
x = 3
f(x)
z= f(x)
```
In this case the actual parameter value i.e. x =3 is bound to the formal parameter x. Any operations done on x in the actual parameter will be reflective to x in the formal parameter.[[parameter]]

We create a **scope** within a function when we enter a function. Wherein, instead of having [[global scope]] we have a [[variable scope]].

1. when the program is run ‘f’ is only associated with ‘some code’. 
2. x is defined as 3 
3. When the function is called upon, the variable x in f is defined as 3 in the ‘f scope’(the scope of f, when f is run).
4. We then create the binding for ‘z’

- If there are any changes to ‘x’ in the f scope, they do not affect the global scope. 

- **If there is no return statement**, python returns the value “None”.
- Unless a function is supposed to do something like a side effect, we would want it to return a value back. 
## return vs. print:
![[Pasted image 20230408212023.png]]

## Functions as Arguments:
```python
def func_a():
    print("heyo")

def func_b(a):
    print("I func")
    return a

print(func_b(func_a()))
```
In this case we use the function as the parameter. 
1. function a is executed 
2. return value of a is given to function b which is ‘None’
3. func_b is executed.
4. a in func_b scope = ‘None’ so the value printed is ‘None’.

## .
- A function can access a variable defined outside but not modify it. 
```python
x = 5 
def func(x):
    x = 6
    print(x)
    return x  

func(x)
print(x)
```
- The first print statement in the function would print first the value 6. 
- The print statement later print ‘5’.
![[Pasted image 20230410113240.png]]
- This will give an error because x is being ‘assigned’ a value inside the variable and x does not already exist within the function where it is being ‘assigned’.

# Keyword Arguments:
- Generally the order in which the [[parameter]] of a function are written matters. However you can bind values directly if you forget the order. 

```python
def func(x, y):
    if x > y:
        print("x is greater")
    else:
        print("y is greater")

func(y = 10,x = 5)
```
- This will print y is greater even though the order in which the parameters are written isn’t accurate. 
- You can bind them directly in the correct order too.
___
You can also give a parameter a default value:
```python
def func(x, y = 10):
    if x > y:
        print("x is greater")
    else:
        print("y is greater")

func(5)
```
- This will print y is greater because y does have a default value which remains unchanged. 

[[Function Specification]]

# Iteration vs Recursion:
- [[Recursion]]
- Looping algorithms have variable that update through the loop.[[Core Elements Of Programs#Iteration:]] 

- To undergo recursion:
	1. Reduce problem to smaller version of same problem. 
	2. Keep reducing the problem until you reach a simple case that can be used to solve the problem directly. 


- A condition is given and when the condition is met the program stops. 
```python
# Finding factorial using recursion:
def fax(x):
    if x == 1:
        return x
    else:
        return x * fax(x - 1) 

```
- until the value of x is equal to 1. 
<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20fax%28x%29%3A%0A%20%20%20%20if%20x%20%3D%3D%201%3A%0A%20%20%20%20%20%20%20%20return%20x%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20x%20*%20fax%28x%20-%201%29%20%0A%0Aprint%28fax%284%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=18&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
- When the frame goes back to the previous frame/[[Functions#Calling Functions and Scope:]] to get the return value is when the multiplication occurs with the value of x in that frame. \
- The value is being returned to the previous function that asked for it and that is when the multiplication occurs. 
![[Pasted image 20230410133411.png]]

## Observations:
- Each recursive call create its own **scope**.
- The bindings in the previous scope are unaffected by the current scope similar to the relation with the global scope. 
- One a value is returned. The flow of control moves back to the previous scope. 

## Iteration vs Recursion:
![[Pasted image 20230410133838.png]]

# Inductive Reasoning:

- To stop a recursive function it eventually must reach the value designated and it will do so because the [[parameter]] of the function are decreasing. 

- We can use [[Mathematical Induction]] to check whether a function will ever end or not. 

![[Pasted image 20230504173827.png]]
- 2023-08-18: The way I would now think about this is that the [[Natural Numbers]] do have a starting point which is finite and that is the basis of [[Mathematical Induction]] working here. 
# Towers of Hanoi 

- A sort  of a game wherein you move disks. 
- There are 3 towers. 
- You need to move all disks from the left tower to the right tower while making sure a smaller disk isn’t on the bottom of a bigger disk. 

___
- Towers of Hanoi becomes way easier when thought about recursively because the last step that takes place must be moved to the last disk. 
```python
def printMove(fr, to):
    print("move from " + str(fr) + "to" + str(to))
    
def Towers( n, fr, to, spare):
    if n==1:
        printMove(fr, to)
    else:
        Towers(n-1,fr,spare,to)
        Towers(1,fr,to,spare)
        Towers(n-1,spare,to,fr)
        
print(Towers(3, 'A' , 'B', 'C'))
```
- We can use multiple prompts instead of just one.

[[00 Fibonacci]]

# Recursion on non-numerics:
![[Pasted image 20230505230733.png]]
- The first function within the bigger function creates a continuous string
-  while the second part allows for us to slice the string into a smaller version and run the same checks until the length of the string becomes less than or equal to 1. 

# isIn question
```python 
def isIn(char, aStr):
    if len(aStr)==0 or aStr=="":
        return False
    elif len(aStr)==1 and aStr==char:
        return True
    elif len(aStr)==1 and aStr!=char:
        return False
    elif aStr[len(aStr)//2] == char:
        return True
    elif char < aStr[len(aStr)//2]:
        return isIn(char, aStr[0:len(aStr)//2])
    elif char > aStr[len(aStr)//2]:
        return isIn(char, aStr[aStr[len(aStr)//2]:])

```
In this question we have setup special parameters for 1 because the integer division of 1 gives 0 and if character is compared to a string of 0 length meaning there is no character. The string will simply go out of range because character will always be greater. 

As every input will keep being compared a return of false can only occur either when no string is present or when we have reached the end i.e. 1 character.  That is also why this is written on the top. 

[[Files in python]]
# Summary:
- A set of code that is only executed when it is called upon. 
- It has [[scopes]].
- [[return statement]] is a way for the function to give its output. It gives the function a #meaning  in a sense. Like [[giving back]] to society. 
- You can give [[parameter]] default values and bind them to a default value. 
- We use [[docstring]] as a way to tell the user what we are trying to do and what is supposed to happen. 
- [[Recursion]] basically creates multiple [[scopes]] with various values and then uses these scopes (with different values) to solve the problem.
- [[Recursion]] is simpler from the user side but it is more resource consuming from the computer side because of creating so many [[scopes]].
- Mostly easier when there is a mathematical #formula. 

___
# Interface
- This would be the [[Function Header]] and [[docstring]]. 
