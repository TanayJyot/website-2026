### Feed Forward Layer

residuals → I don't care about attention
layer norm → I don't get carried away
feed forward → let me fix that

- after attention reweighs the values, it allows the architecture to **learn** information by giving the output some non-linearities 
- We have a 2 layer [[Neural Network]] with a [[rectified linear unit activation function]] in the middle so that $$FFN(x_i) = \max(0, x_i W_1 + b_1) W_2 + b_2$$
- On full sequence of tokens ($x_1 ... x_S$): $$FFN(x) = \text{ReLU}(x W_1 + b_1) W_2 + b_2$$