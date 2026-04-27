### Position Independence
![[Pasted image 20260421210047.png]]

- Attention does not care about what order it is given words in, it will end up producing the same scores
- to make it care about which order we give it words in we need to encode it in the input via $\phi(s)$ 
- this is called the positional encoding of the word so that the model’s behaviour changes based on the encoding (because the vector is different now)