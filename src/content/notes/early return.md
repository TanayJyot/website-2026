---
tags:
  - csc110
Main Topic: "[[]]"
---
# early return
## [[CSC110/Lectures/Week 9 Lecture 2]]
- [[any()]]
- [[all()]]
##
```python
class LinkedList:
    def __getitem__(self, i: int) -> Any:
        """..."""
        # Version 1
        curr = self._first
        curr_index = 0

        while curr is not None:
            if curr_index == i:
                return curr.item

            curr = curr.next
            curr_index = curr_index + 1

        # If we've reached the end of the list and no item has been returned,
        # the given index is out of bounds.
        raise IndexError
```
- You allow the program to return early. 
- The same program could have also been done with [[compound loop condition]]s. 
- 



