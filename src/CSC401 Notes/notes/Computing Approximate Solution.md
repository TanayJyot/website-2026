# Approximate Solution:

- Aim is to find a solution that is **good enough**
- Start with a guess an increment by some value
- We use an [[epsilon]] value as the degree of approximation. 

- Changing the value of epsilon changes the accuracy of the solution.
- Changing the value of the increment changes the efficiency of finding the solution. 
## Steps:
1. Take a cube or whatever 
2. compare the value of the cube of the guess to the actual cube and use epsilon for accuracy checking.
3. Once the difference between the values is less than the epsilon value, the code works.

## Code:
```python
cube = 29
epsilon = 0.01
guess = 0.0
increment = 0.001
num_guesses = 0
while abs(guess**3 - cube) >= epsilon:
    guess += increment
    num_guesses += 1
print('num_guesses =', num_guesses)
if abs(guess**3 - cube) >= epsilon:
    print('Failed on cube root of', cube)
else:
    print(guess, 'is close to the cube root of', cube)
```
If the value of epsilon and increment is the same then the code will run past the epsilon value and the loop never ends. [^1]

- If the value is still skipped but we want to prevent the code from running forever. We will just ensure the value is never more than the value of the cube itself. 

```python
cube = 29
epsilon = 0.01
guess = 0.0
increment = 0.01
num_guesses = 0
while abs(guess**3 - cube) >= epsilon and guess <= cube:
    guess += increment
    num_guesses += 1
print('num_guesses =', num_guesses)
if abs(guess**3 - cube) >= epsilon:
    print('Failed on cube root of', cube)
else:
    print(guess, 'is close to the cube root of', cube)
```
## Observations:
- If increment is too small then value will be inaccurate. 
- If increment is too large then we may skip over the correct value. 
- For something like 23 with cube root of 4.795…, if an increment of 0.1 is given, the code will output “failed” because difference will be larger than epsilon. 