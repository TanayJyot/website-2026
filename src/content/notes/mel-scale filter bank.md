---
tags: 
aliases: []
---
# mel-scale filter bank
##
- ![[Pasted image 20260423103432.png]]


#### 2. Smooth Frequency Integration

- This made sense the most to me out of the three reasons gemini gave

If the filters were simple rectangles (on/off), a slight shift in a pitch might cause it to suddenly jump from one filter "bucket" to another. This would create "jitter" in your data.

- **The Slopes:** The rising and falling sides of the triangle ensure that as a frequency moves, its energy is gradually transferred from one filter to the next.
    
- **Overlapping:** Notice that the triangles overlap. This ensures that no information is lost in the "cracks" between filters. If a peak falls right between two filters, it will contribute 50% to each, maintaining a smooth representation of the sound.
- 