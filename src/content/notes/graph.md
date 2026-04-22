---
tags:
  - csc111
Main Topic: "[[]]"
---
# graph
- [[vertex]]
- [[edge]]
- [[adjacent]]
- [[degree]]
- [[path]]
- [[transitivity of connectedness]]
- [[node based data structure]]
- [[connectivity|connected]]

```python
class Graph:
    """A graph.

    Representation Invariants:
    - all(item == self._vertices[item].item for item in self._vertices)
    """
    # Private Instance Attributes:
    #     - _vertices: A collection of the vertices contained in this graph.
    #                  Maps item to _Vertex instance.
    _vertices: dict[Any, _Vertex][^2]

    def __init__(self) -> None:
        """Initialize an empty graph (no vertices or edges)."""
        self._vertices = {}
```
- [^1]

### Definition
$G = (V, E)$ where V is a set of vertices. Let $v_1, v_2$ be two distinct points in $V$, then an element in E is defined as $E = \{v_1, v_2\}$  
### Graphs vs trees
- [[Trees(CS)]]
- Any vertex can be connected with any graph so we use [[set()]] for that purpose. 
	- because we anyways don’t tend to care about which is the leftmost or rightmost or any position because they are all supposed to be the same thing in the context.
- 
___
## Graph properties
- [[transitivity of connectedness]]
- [[maximum number of edges]]








[^1]: I don’t see why we need to put the object outside of the class to begin with? Why not define the object as an item and set. There is a way to do that, but this is an implementation the course chose to simplify things. 
[^2]: Is there a way to do this without the vertices class because we are anyways repeating objects? #csc111/question  Make thi 