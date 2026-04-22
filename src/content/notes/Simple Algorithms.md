# Recap: 
- Strings are [[immutable]]

```python
s = "hello"
s[0] = "y"
```
This would yield an error. 
- Individual elements using [[Indexing]] cannot be changed, s must be **redefined**
```python
s = "y" + s[1:]
```

- [[range()]]

___

-  [[for Loop]] can also be used just with [[‘in’ Operator]]
```python
s = "abcdefgh"
for char in s:
	if char == "a" or char == "f":
		print("loop contains a or f")
```

[[Computing Approximate Solution]]

# Bisection Search:
- Picking a number somewhere in the middle of the range because the answer is anyways going to be close to the middle. We can then check whether our guess was too big or too small. Then pick something halfway between those two and the cycle goes on. 

- Ok the way the program does it is by taking a low value and a high value and then dividing the two to obtain an answer. 

- The way I do it is this however this takes way more loops:
```python
# using Bisection search to find square root
# First we take the middle of the square and divide it in half 
square = 25
numGuesses = 0 
mid = square/2
epsilon = 0.01
# We take epsilon for accuracy
while abs(mid**2 - square) >= epsilon:
    if mid**2 > square:
        mid = mid/2
    else:
        mid = mid + mid/2
        numGuesses +=1
        
print(mid)
print(numGuesses)
```
This takes 314 loops but this makes it easier to understand the concept in my opinion. 

- In the program, they subdivide the range to produce an outcome that is way more efficient:
```python
cube = 54

epsilon = 0.01

num_guesses = 0

low = 0

high = cube

guess = (high + low)/2.0

while abs(guess**3 - cube) >= epsilon:

    if guess**3 < cube :

        low = guess

    else:

        high = guess

    guess = (high + low)/2.0

    num_guesses += 1

print('num_guesses =', num_guesses)

print(guess, 'is close to the cube root of', cube)
```


- So I retried with this method to give:
```python
# Select highest and lowest value 
# for that first take number 
NUmGuesses = 0 
square = 25
high = square 
low = 1
guess = (high + low)/2
 # in this interpretation we take guess from high + low and since anything less than 1 will lead to a smaller output that saves space
# we also need epsilon to determine how close we want the value ot be
epsilon = 0.01
while abs(guess**2-square) >= epsilon:
    if guess**2 > square:
        high = guess  
    else:
        low = guess 
    guess = (high + low)/2
    #putting NUmGuesses to see improvement in efficiency
    NUmGuesses  += 1 
print(guess)
print(NUmGuesses)
```
This gets the job done in 12 loops. For clarity referring to the values of low and high helps:
![[Pasted image 20230327210700.png]]
The values of high and low converge to a very similar place. 
___
- The value changes such as:
	1. g/2
	2. g/4
	3. g/8
- At gth guess the value becomes (g/2)^g
- Therefore the value converges by log2(g) This is different from [[Introduction To Python#Branching Programs]] where the program runs linearly. 

## Challenges:
1. Working with negative cubes
2. Working with values < 1

### x<1:
- Modify search space to be from 0 to square less than 1. 
- Code must choose value depending upon search space. 

```python
numGuesses = 0 
square = 25
high = square 
low = 0
guess = (high + low)/2
epsilon = 0.01

while abs(guess**2-square) >= epsilon:
    if guess**2 < square:
        low = guess  
    else:
        high = guess 
    guess = (high + low)/2
    numGuesses  += 1
    
print(guess)
print(numGuesses)

```
This just works. 
## Observations:
- Gets the job done quicker. 
- Can work for any code where value changes as input variable changes. So if *guess* increases then  *guess^2* also increases. 

[[float]]
# Summary:
- Something that is [[Mutability]] can be edited directly by [[Indexing]]. 
- [[‘in’ Operator]] is like the kid who only returns True or False but when it comes to loops(when there is no True or false.) it takes the value  #diplomat 
- [[epsilon]] is the approximation for a very very small number that we use just because we cannot use the actual value. Best used with floats.
- Bisection search makes the whole process easier by eliminating values quicker increasing. #efficiency
- Prefer to use [[epsilon]] with floating point numbers because the value that the computer is thinking and what you are typing can be different. 
- Newton Raphson method basically uses the knowledge of derivatives to find a point that is almost linear. [[Calculus]]

[^1]: It has no place to aage or peeche so it just runs past it. 