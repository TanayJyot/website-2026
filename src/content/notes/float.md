[^1]




[^1]: What kind of limitations does working with floats lead to? 



## Implications:
- If there is no such integer as ‘p’ then the value found is always an approximation.
- When testing whether 2 floats are equal it’s better to use:
```python
abs(x-y)<#some small number
```
than 
```python
x==y
```
- This is because the binary representation may not be the same. 
___
- [[print()]] will always give exactly what is expected even if the binary representation is not exact because python is developed in a way that the value rounds to the nearest decimal number. 

## [[Week 12 Lecture 1]]
- Can keep upto **53** significant bits. This is what leads to the approximation error.
- Avoid type floats
- reduce the number of type `float` operations. 
### Computing derivatibf for [[float]]

- To compute the [[derivative]] use [[convergence]]
- 

# Floats and Fractions:

- Computer represents every number in **Binary** even floating point numbers. 

## For Integers:
- Given an integer, take the remainder of the integer with respect to 2. Integer divide by 2 until you exhaust the entire value. 
- We extract the remainder of 2 first and add it to result.
- Then we integer divide the original number by 2 and repeat the process.
```python
# Converting an integer into Binary
num = 11
result = ""
while num>0:
    result = str(num%2) + result
    num = num//2
print(result)
```
outputs 1011. 
- When we move from bit to the next bit there is always a division by 2. What we are doing is using that as a strategy to convert the numbers.

![[Pasted image 20230328182554.png]]
[[float]]

[[float]]
## For fractions:
- To convert a fraction to binary:
	1. Take fraction  
	2. Convert fraction to whole number by multiplication to power of 2.
	3. Use integer method.
	4. Convert whole number back to fraction. 
```python
x = float(input('Enter a decimal number between 0 and 1: '))

p = 0
while ((2**p)*x)%1 != 0:
    print('Remainder = ' + str((2**p)*x - int((2**p)*x)))
    p += 1

num = int(x*(2**p))

result = ''
if num == 0:
    result = '0'
while num > 0:
    result = str(num%2) + result
    num = num//2

for i in range(p - len(result)):
    result = '0' + result

result = result[0:-p] + '.' + result[-p:]
print('The binary representation of the decimal ' + str(x) + ' is ' + str(result))
```
<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=x%20%3D%20float%28input%28'Enter%20a%20decimal%20number%20between%200%20and%201%3A%20'%29%29%0A%0Ap%20%3D%200%0Awhile%20%28%282**p%29*x%29%251%20!%3D%200%3A%0A%20%20%20%20print%28'Remainder%20%3D%20'%20%2B%20str%28%282**p%29*x%20-%20int%28%282**p%29*x%29%29%29%0A%20%20%20%20p%20%2B%3D%201%0A%0Anum%20%3D%20int%28x*%282**p%29%29%0A%0Aresult%20%3D%20''%0Aif%20num%20%3D%3D%200%3A%0A%20%20%20%20result%20%3D%20'0'%0Awhile%20num%20%3E%200%3A%0A%20%20%20%20result%20%3D%20str%28num%252%29%20%2B%20result%0A%20%20%20%20num%20%3D%20num//2%0A%0Afor%20i%20in%20range%28p%20-%20len%28result%29%29%3A%0A%20%20%20%20result%20%3D%20'0'%20%2B%20result%0A%0Aresult%20%3D%20result%5B0%3A-p%5D%20%2B%20'.'%20%2B%20result%5B-p%3A%5D%0Aprint%28'The%20binary%20representation%20of%20the%20decimal%20'%20%2B%20str%28x%29%20%2B%20'%20is%20'%20%2B%20str%28result%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=27&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%220.375%22%5D&textReferences=false"> </iframe>
- The first loop runs until the number is an [[Integers 1]].
-  You do all this to get to the value which needs to be multiplied to get to the integer form of the number.(p)
- The actual [[binary]] method is a multiplication of 2 so here we do [[Divison 1]] of 2 to get the opposite effect. 
Added for clarity👆.


