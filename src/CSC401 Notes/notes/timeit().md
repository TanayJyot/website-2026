---
tags:
  - csc110
Main Topic: "[[]]"
---
# timeit()
## [[9.6, 9.7, 9.8, 9.9]]
```python
>>> timeit('list.insert(lst_1k, 0, -1)', number=10, globals=globals())
0.00014379998901858926
>>> timeit('list.insert(lst_1m, 0, -1)', number=10, globals=globals())
0.1726928999996744
```


- You put in the function and how many times you want it to occur.




