- Allows you to apply one function to an entire list. 
- We will need to use a loop to get the values from the function.

For a **unary function**:
```python
b = []
for a in map(round, [4.5, 6.7, 7.8, 8.9]):
    b.append(a)
    
print(b)
# Outputs [4, 7, 8, 9]
```

___
We can also apply [[map()]] to **n-ary** functions. The functions that need more that one argument. 

## Case 1:
```python 
List1 = [10, 9 ,3,2]
List2 = [6, 5, 11, 12]
MaxList=[]
for i in map(max,[List1, List2]):
	MaxList.append(i)
print(MaxList)
# Outputs [10, 12]
```
In this case, max takes list1 and list 2 and prints out the biggest element in each of them. 

## Case 2:
```python
List1 = [10, 9 ,3,2]
List2 = [6, 5, 11, 12]
MaxList=[]
for i in map(max, List1, List2):
	MaxList.append(i)
print(MaxList)
# Outputs [10, 9, 11, 12]
```
In this case, python compares the value of each of the element in order via [[Indexing]]. So the 0th element of list 1 and list 2 are compared and 10 is printed. 

## [[CS50m/Lecture 2|Lecture 2]]
- would generate new values by executing the required function
```js 
x = [1, 2, 3]
undefined
> function addOne(number){return number + 1}
> function addOne(number){return number + 1}
undefined
> addOne(1)
2
> x.map(addOne)
[ 2, 3, 4 ]
```

- The function itself
```js 
function map(arr, func){  
    const newArr = []  
    for (let i = 0, len = arr.length; i < len; i++){  
        newArr.push(func(arr[i]));  
    }  
    return newArr  
}
```

