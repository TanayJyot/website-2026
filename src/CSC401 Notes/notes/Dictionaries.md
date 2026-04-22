# Quick Review
## Common Operations for strings, tuples, lists, ranges:

- Get ‘i th’ element seq\[i]. [[Indexing]]
- [[len()]]                                         
- [[Concatenation]](not range)
- [[Successive Concatenation]](not range)
- [[Slicing]]
-  Use ‘in’ to check if element in sequence
- [[Core Elements Of Programs#Iteration]] using for and in.
___
You don’t need to think about what operation based on type because they work on all the types for these operations. 

# Dictionaries:
- In dictionaries, instead of having an index, we can have a key. 
- Data is stored in pairs of key and value 
- We use {} for dictionary
- There is no natural order of the items in a dictionary. The order is according to how we write. 
- It is [[Mutability]].
- [[del command]] can be used to remove an entry.
- [[keys method]]
- [[values method]]
___
- Values in a dictionary can be anything. 
- Key must be 
	- unique.
	- [[Hashable]] which all [[immutable]] types are. 
	- Use float as a key with caution.
- An [[immutable]] type is necessary in a key because if we change the key, then we cannot expect to find the value associated with it. 
![[Pasted image 20230601173931.png]]

# Example with a dictionary:
- Watch the video again for this. 

___
This is an example from the finger exercise to find “biggest” list.
```python
def biggest(aDict):
    counter = -1
    large = []
    for i in aDict.values():
        if len(i)>= len(large):
            counter += 1
            large = i

    indexvalue = list(aDict.keys())[counter]
    return indexvalue

```
I complicated this a lot more than necessary but it works. 

# Fibonacci and Dictionaries:
Previously in Fibonacci:
![[00 Fibonacci]]
- In this case, the same values will have to be calculated many times which makes the program overall inefficient. 
	- So we need a way to store previous values instead of recreating them each time. 
	- For example when calculating fib(5), we would already know what is fib(3) in the calculation for fib(4) so calculating it again is useless. 
- To make it more efficient, we can store such values in a dictionary. [^2]
- ![[Pasted image 20230603183155.png]]
- Here you are storing the previously known values in a dictionary and computing only if the value is unknown. [[memoization]] [^1]
- The base cases for recursion are given in the dictionary before calling the function. 

[[Global Variables]]
# Summary:
- Dictionaries are like lists and values but what we do differently here is that we get to assign certain names directly to certain value which makes out job easier. 
- We can find these values directly using certain methods. 
- This can be advantageous from not storing repeated values. 
- It is also like another form of [[array]]
- The key needs to be immutable because everything kinda depends on the key if the key changes the value has no connection to connect to basically having nothing. These kind of elements that work as keys are called [[Hashable]]

[^1]: n in d is like searching if something exists in d, something similar to when we search for an element in the list or a letter in a string. 


[^2]: Can we use lists for doing this instead??? #cs/questions 

# From [[CSC110 Lecture 1]]
- Dictionary is a kind of [[mapping]], there are multiple kinds of mapping. 
- They are unordered. 