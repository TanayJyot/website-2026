---
tags:
  - csc110
Main Topic: "[[]]"
---
# Manipulating values in a list

## From [[6.5, 6.6, 6.7]]
Index based for loops can be used to manipulate values inside a list which is something you cannot do with [[element based for loops]] because when you use an [[element based for loops]] it points to the id of that particular value. 
<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numbers%20%3D%20%5B5,%206,%207%5D%0Afor%20number%20in%20numbers%3A%0A%20%20%20%20%20number%20%3D%20number%20%2B%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=2&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

- However, when you use an [[index based for loop]], it can point to the value of the function directly. 

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numbers%20%3D%20%5B5,%206,%207%5D%0Afor%20i%20in%20range%280,%20len%28numbers%29%29%3A%0A%20%20%20%20numbers%5Bi%5D%20%3D%20numbers%5Bi%5D%20%2B%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=8&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>








