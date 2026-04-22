---
tags:
  - csc111
Main Topic: "[[]]"
---
# size of tree
##
- The size is like the [[len()]] function where the number of total trees would be the size of the tree.
- The relationship between the size of a tree and the size of its subtrees would be = 
	- The size of the tree - that tree and then the size of the subtrees individually
	- The relation is probably that the size of the tree will always be greater than that of the subtree.
- [[subtree]]
```python
class Tree:
    def __len__(self) -> int:
        """Return the number of items contained in this tree.

        >>> t1 = Tree(None, [])
        >>> len(t1)
        0
        >>> t2 = Tree(3, [Tree(4, []), Tree(1, [])])
        >>> len(t2)
        3
        """
        if self.is_empty():
            return 0
        else:
            return 1 + sum(subtree.__len__() for subtree in self._subtrees)
```
- The idea here is that if there are trees then the size of the tree would be the root + sum of the sizes of all the subtrees and you do this same process again for each of the subtrees. 
- Or without the summation, it would be like this:

```python
        else:
            size_so_far = 1
            for subtree in self._subtrees:
                size_so_far += subtree.__len__()
            return size_so_far
```
- Here we do not need a third case where there is 1 element because it is already being handled but sometimes we might. [^1]

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=from%20__future__%20import%20annotations%0Afrom%20typing%20import%20Any,%20Optional%0Aclass%20Tree%3A%0A%20%20%20%20%0A%20%20%20%20_root%3A%20Optional%5BAny%5D%0A%20%20%20%20_subtrees%3A%20list%5BTree%5D%0A%0A%20%20%20%20def%20__init__%28self,%20root%3A%20Optional%5BAny%5D,%20subtrees%3A%20list%5BTree%5D%29%20-%3E%20None%3A%0A%20%20%20%20%20%20%20%20%22%22%22Initialize%20a%20new%20Tree%20with%20the%20given%20root%20value%20and%20subtrees.%0A%0A%20%20%20%20%20%20%20%20If%20root%20is%20None,%20the%20tree%20is%20empty.%0A%0A%20%20%20%20%20%20%20%20Preconditions%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20-%20root%20is%20not%20none%20or%20subtrees%20%3D%3D%20%5B%5D%0A%20%20%20%20%20%20%20%20%22%22%22%0A%20%20%20%20%20%20%20%20self._root%20%3D%20root%0A%20%20%20%20%20%20%20%20self._subtrees%20%3D%20subtrees%0A%0A%20%20%20%20def%20is_empty%28self%29%20-%3E%20bool%3A%0A%20%20%20%20%20%20%20%20%22%22%22Return%20whether%20this%20tree%20is%20empty.%0A%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t1%20%3D%20Tree%28None,%20%5B%5D%29%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t1.is_empty%28%29%0A%20%20%20%20%20%20%20%20True%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t2%20%3D%20Tree%283,%20%5B%5D%29%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t2.is_empty%28%29%0A%20%20%20%20%20%20%20%20False%0A%20%20%20%20%20%20%20%20%22%22%22%0A%20%20%20%20%20%20%20%20return%20self._root%20is%20None%0A%0A%20%20%20%20def%20__len__%28self%29%20-%3E%20int%3A%0A%20%20%20%20%20%20%20%20%22%22%22Return%20the%20number%20of%20items%20contained%20in%20this%20tree.%0A%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t1%20%3D%20Tree%28None,%20%5B%5D%29%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20len%28t1%29%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20t2%20%3D%20Tree%283,%20%5BTree%284,%20%5B%5D%29,%20Tree%281,%20%5B%5D%29%5D%29%0A%20%20%20%20%20%20%20%20%3E%3E%3E%20len%28t2%29%0A%20%20%20%20%20%20%20%203%0A%20%20%20%20%20%20%20%20%22%22%22%0A%20%20%20%20%20%20%20%20if%20self.is_empty%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20size_so_far%20%3D%201%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20subtree%20in%20self._subtrees%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size_so_far%20%2B%3D%20subtree.__len__%28%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20size_so_far%0A%20%20%20%20%20%20%20%20%20%20%20%20%0At12%20%3D%20Tree%283,%20%5BTree%284,%20%5BTree%286,%20%5B%5D%29%5D%29,%20Tree%284,%20%5B%5D%29%5D%29%0Aprint%28t12.__len__%28%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

[^1]: Are we allowed to use builtin functions like sum?? **Edit:** Only if it is explivitly stated that you are not allow to 