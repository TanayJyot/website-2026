---
tags: 
Main Topic: "[[]]"
---
# node

## [[13.1, 13.2, 13.3]]

```python
from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class _Node:
    """A node in a linked list.

    Instance Attributes:
      - item: The data stored in this node.
      - next: The next node in the list, if any.
    """
    item: Any
    next: Optional[_Node] = None  # By default, this node does not link to any other node
```

- This is for storing each node and showing its next element.




