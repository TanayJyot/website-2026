# CSC111 Week 2, Worksheet 2: Traversing Linked Lists

 Print this handout

Here are the implementations of the `LinkedList` class and the `_Node` class you saw in lecture.

```python
from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Optional


@dataclass
class _Node:
    """A node in a linked list.

    Note that this is considered a "private class", one which is only meant
    to be used in this module by the LinkedList class, but not by client code.

    Instance Attributes:
      - item: The data stored in this node.
      - next: The next node in the list, if any.
    """
    item: Any
    next: Optional[_Node] = None  # By default, this node does not link to any other node


class LinkedList:
    """A linked list implementation of the List ADT.
    """
    # Private Instance Attributes:
    #   - _first: The first node in this linked list, or None if this list is empty.
    _first: Optional[_Node]

    def __init__(self) -> None:
        """Initialize an empty linked list.
        """
        self._first = None
```

## Exercise 1: Linked list traversal

Recall the basic _linked list traversal pattern_:

```python
curr = self._first

while curr is not None:
    ... curr.item ...  # Do something with curr.item
    curr = curr.next
```

In this exercise, you’ll implement three new methods using this pattern.
___

1. Implement the following linked list method.
    
    ```python
    class LinkedList:
        def maximum(self) -> float:
            """Return the maximum element in this linked list.
    
            Preconditions:
                - every element in this linked list is a float
                - this linked list is not empty
    
            >>> linky = LinkedList()
            >>> node3 = _Node(30.0)
            >>> node2 = _Node(-20.5, node3)
            >>> node1 = _Node(10.1, node2)
            >>> linky._first = node1
            >>> linky.maximum()
            30.0
            """
            # Implementation note: as usual for compute maximums,
            # import the math module and initialize your accumulator
            # to -math.inf (negative infinity).
```
  
2. Bob has attempted to implement the `LinkedList.__contains__` method below, but unfortunately his program has a bug. 😢

```python
class LinkedList:
    def __contains__(self, item: Any) -> bool:
        """Return whether item is in this linked list.
    
        >>> linky = LinkedList()
        >>> linky.__contains__(10)
        False
        >>> node2 = _Node(20)
        >>> node1 = _Node(10, node2)
        >>> linky._first = node1
        >>> linky.__contains__(20)
        True
        """
        curr = self._first
    
            while curr is not None:
                if curr == item:
                    # We've found the item and can return early.
                    return True
    
                curr = curr.next
    
            # If we reach the end of the loop without finding the item,
            # it's not in the linked list.
            return False
    ```
    
    1. What is the error in the above implementation?
        
    2. Which doctest example(s) will fail because of this error?
        
    3. How should we fix this error?
        
3. Finally, let’s look at one more `LinkedList` method,`__getitem__`:


```python
class LinkedList:
	def __getitem__(self, i: int) -> Any:
        """Return the item stored at index i in this linked list.
    
            Raise an IndexError if index i is out of bounds.
    
            Preconditions:
                - i >= 0
            """
    ```
    
    To implement this method, we’re going to need two variables: `curr`, to keep track of the current `_Node`, and `curr_index`, to keep track of the current _index_.
    
    Implement this method below by using an _early return_ inside the loop body, similar to `LinkedList.__contains__` above. We’ve started the implementation for you.
    
    ```
        def __getitem__(self, i: int) -> Any:
            """Return the item stored at index i in this linked list.
    
            Raise an IndexError if index i is out of bounds.
    
            Preconditions:
                - i >= 0
            """
            curr = self._first
            curr_index = 0
    
            while
    
    
    
    
    
    
    
    
    
    
    
    
    ```
    

## Additional exercises

1. Implement the following linked list method, which is very similar to `LinkedList.sum`.
    
    ```
    class LinkedList:
        def __len__(self) -> int:
            """Return the number of elements in this linked list.
    
            >>> linky = LinkedList()
            >>> linky.__len__()
            0
            >>> node3 = _Node(30)
            >>> node2 = _Node(20, node3)
            >>> node1 = _Node(10, node2)
            >>> linky._first = node1
            >>> linky.__len__()
            3
            """
    ```
    
    _Note_: this is yet another Python special method. Unsurprisingly, it gets called when you call the built-in function `len` on a `LinkedList` object. Try it!
    
2. Here is another linked list method, which allows you to compare the items in two different linked lists.
    
    ```
    class LinkedList:
        def __eq__(self, other: LinkedList) -> bool:
            """Return whether this list and the other list are equal.
    
            Two lists are equal when each one has the same number of items, and
            each corresponding pair of items are equal (using == to compare).
            """
    ```
    
    Implement this method by using the linked list traversal pattern, except use _two_ loop variables `curr1` and `curr2`, one for each list.
    
    For extra practice, implement this method twice: once using an early return, and once using a compound while loop condition. Which approach do you like better?