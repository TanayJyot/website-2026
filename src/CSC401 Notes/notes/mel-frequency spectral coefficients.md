---
tags: 
aliases: []
---
# mel-frequency spectral coefficients
##
- ![[Pasted image 20260423114029.png]]

- Once you are in the log-magnitude spectrum, [[spectrogram filtering]] gives you an array of groups that compose of the signals in a particular area
- you then take this entire array and treat it as one thing when you run it through IDFT
- The IDFT would then treat this array as the data of a bunch of frequencies it is getting and separate the smooth frequency (V) from the peaking ones (G) 
- you would divide this into MFCC where MFCC 1 to 13 are usually enough to represent V 
	- G is treated as noise



### Gemini Generated - how the filtering and IDFT work 

Each individual F-Bank coefficient is a **single number** (the sum of energy in that triangular window). Because the vocal tract envelope ($|V|$) and the glottal harmonics ($|G|$) occupy the same frequency space, that single number is indeed "contaminated" by both.

Here is how the math handles that "mixing":

#### 1. The F-Bank as a "Blender"

When you apply a triangular filter to a range of frequencies, you are essentially "blending" the signal in that window.

- The filter captures the high energy of the **vocal tract resonance** (the "hill").
- But it also captures the energy of the **3 or 4 glottal harmonics** (the "spikes") that happen to fall inside that triangle.
- **The Result:** You have $M$ coefficients (e.g., 40 numbers), and every single one of them contains a mix of both $V$ and $G$.
    

#### 2. You don't do IDFT _inside_ each filter

You don't perform the IDFT on each filter individually. Instead, you treat the **entire vector of 40 F-Bank coefficients** as a new "signal" and perform **one single IDFT** on that whole set.
Think of it like this:
- **The Input:** A "wave" made of 40 points (the F-Bank energies).
- **The Logic:** This 40-point wave still has "slow" movements (the general shape of the mouth) and "fast" movements (the ripple caused by the glottal pitch).
- **The IDFT:** It looks at that 40-point wave and separates the **slow trend** from the **fast ripple**.

#### 3. How the "V" and "G" finally separate

After that one final IDFT (usually a Discrete Cosine Transform in practice), the components are sorted by how fast they change across the filters:
- **Low-index MFCCs (1–13):** These represent the **slow-moving** parts of that 40-coefficient wave. This is the **Vocal Tract ($V$)**. Because it changes slowly across the spectrum, it ends up in the first few bins of the IDFT.
- **High-index MFCCs (>13):** These represent the **fast-moving** ripples across the filters. This is the **Glottis ($G$)**.

#### Why we stop at MFCC 13

By the time we get to the end of the flowchart, we usually **throw away** the higher-index coefficients.
- We keep the first 13 because they are the "clean" version of the vocal tract.
- We discard the rest because that's where the "glottal contamination" was moved to by the IDFT.
So, you are right that they are mixed at the F-Bank stage! The whole point of the $DFT^{-1}$ box at the very end of your flowchart is to act as the "separator" that finally pulls them apart so the computer only sees the $V$.
