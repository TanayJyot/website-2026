are an example of [[statement]]
- We don’t really consider ‘else’ to be executed. 
- It is a [[compound statement]]. 
- [[Branching Programs]]

## When if statement is not necessary
- When the return is a boolean, then you can merge the if statement with the boolean to make your job easier. 
- [[boolean expressions]]
- [[flow of control]]
- [[White Box Testing]]
- [[Black Box Testing]]
- 
___
- You ideally wanna write conditions from most specific to most general and use elifs instead of ifs.

## [[16.1, 16.2, 16.3, 16.4]]

```python
class If(Statement):
    """An if statement.

    This is a statement of the form:

        if <test>:
            <body>
        else:
            <orelse>

    Instance Attributes:
        - test: The condition expression of this if statement.
        - body: A sequence of statements to evaluate if the condition is True.
        - orelse: A sequence of statements to evaluate if the condition is False.
                  (This would be empty in the case that there is no `else` block.)
    """
    test: Expr
    body: list[Statement]
    orelse: list[Statement]
```
#csc111/question 
