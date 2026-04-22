---
tags: 
aliases:
---
- Test each function in the program separately. 
- We take advantage of [[MITx course/Abstraction]]. 
- Usually start with test__

## On Functions


- Only consider [[Object Mutation]] as a default event when either mentioned in the [[docstring]] or it is naturally occurring. 
```python
def test_squares_no_mutation() -> None:
    """Test that squares does not mutate the list it is given.
    """
    lst = [1, 2, 3]
    lst_copy = list.copy(lst)  # Create a copy of lst (not an alias!)
    squares(lst)

    assert lst == lst_copy
```

- The copy must be created before the [[Functions]] is called so that the value can be left distinct.

___
- [[JUnit]]
- [[@BeforeEach]]
- [[@Test]]
- [[@AfterEach]]
- [[@AssertThrows]]
- [[setup and teardown]]
- [[assertion methods]]
- 