---
tags: 
Main Topic: "[[]]"
---
# compound loop condition
##
- If there are multiple **stopping conditions** in a program then you can use all of those in the same loop like this:
```python
class LinkedList:
    def __getitem__(self, i: int) -> Any:
        """... """
        # Version 2
        curr = self._first
        curr_index = 0

        while not (curr is None or curr_index == i):
            curr = curr.next
            curr_index = curr_index + 1

        assert curr is None or curr_index == i
        if curr is None:
            # index is out of bounds
            raise IndexError
        else:
            # curr_index == i, so curr is the node at index i
            return curr.item
```