---
tags:
  - csc111
Main Topic: "[[]]"
---
# linked list

- To deal with the inefficiency problem caused by [[contiguity]] we would work with a new data type called [[linked list]].
- If we can reference one value to the next and keep this chain going, we can get rid of this problem.
- Instead of saying that this is at 0, 1 and 2 and then changing every value during mutation, in the same order. What if you take these values and say that you wanna remove the one after 2nd element. Then once you reach the 3rd element, you only need to change the links of the third instead of changing links of everything before and after the 3rd which would be something you would do for [[List]]s.
- They use [[node]]s.

```python
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
- All this linked list does is to store the first element and then we can access the other elements by moving through nodes. We need the `LinkedList` class in order to know which is the first element. 
```python
from typing import Iterable


class LinkedList:
    def __init__(self, items: Iterable) -> None:
        """Initialize a new linked list containing the given items.
        """
        self._first = None
        for item in items:
            self.append(item)
```
- Then you can ultimately just add elements like this.

___
This is an implementation of the [[list ADT]] like the normal list in python. 


# CSC111 Week 2, Worksheet 1: Introduction to Linked Lists

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

