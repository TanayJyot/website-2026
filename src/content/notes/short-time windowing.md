---
tags: 
aliases: []
---
# short-time windowing
##
- ![[Pasted image 20260422215850.png]]
- the frame shift shows how often we would shift the frame
- the frame length is the length of the current frame
- we keep frame shift smaller than frame length so that we don’t miss the edges and things are smooth

### Window Types
- ![[Pasted image 20260422220234.png]]
- When we use rectangular window then we have high frequency data at the edges that can act as noise as that isn’t how it is in the original audio (the beginning and end don’t have a high frequency)
- Hamming converts these to 0
