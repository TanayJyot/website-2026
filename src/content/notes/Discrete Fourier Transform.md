---
tags:
aliases: []
---
# Discrete Fourier Transform
##
- ![[Pasted image 20260422221155.png]]
- as you go to higher values of $k$ you are able to capture different kinds of patterns given by the audio
- for each value of $k$ you try to see if this “probes” the value in the wave to match with $k$, if they do match with the frequency at $k$ then those waves all add up to create a larger peak. [[constructive inference]]
- $k$ is kinda like a little experiment where you keep hitting with different $k$ frequencies to see if most of the frequencies match to that creating a loud sound
![[Pasted image 20260423104824.png]]



### Gemini Explanation for how $k$ works
The summation is essentially a **correlation test**. You are checking: _"How much does my messy signal look like a perfect sine wave of frequency $k$?"_

Here is the step-by-step logic of why that sum produces a spectrum.

---

#### 1. The Probing Wave ($e^{-i2\pi k \frac{n}{N}}$)

The term $e^{-i2\pi k \frac{n}{N}}$ represents a complex sinusoid (a rotating circle in the complex plane) at a specific frequency determined by $k$.

- Think of this as a **"tuning fork"** or a **"template"** that vibrates exactly at frequency $k$.
    

#### 2. The Pointwise Multiplication

When you multiply your signal $x[n]$ by this template wave:
- **If the frequencies match:** The peaks of your signal align with the peaks of the template. The product becomes consistently positive (or stays on one side of the complex plane), resulting in large values.
- **If the frequencies don't match:** The signal and the template will be "out of phase." At some points, they multiply to a positive number, and at others, they multiply to a negative number.

#### 3. The Summation (The Filter)

By **summing** all these products across the whole window $N$:

- **Constructive Interference:** If the frequencies matched, all those "consistently positive" values add up to a very **large number**. This creates a "spike" in your spectrum at index $k$.
	- The frequencies matching multiple times would just mean that this is something real happening
- **Destructive Interference:** If the frequencies didn't match, the positive and negative products **cancel each other out**, and the sum ends up near **zero**.

---
#### 4. How this creates a "Spectra"

Because you perform this summation for **every** possible value of $k$:

1. You probe the signal for a 1 Hz wave $\rightarrow$ Sum is low (0).
2. You probe for a 2 Hz wave $\rightarrow$ Sum is high (100).
3. You probe for a 3 Hz wave $\rightarrow$ Sum is low (0).

- When you plot these results ($X[k]$) on a graph, the "high" sums tell you exactly which frequencies are present in the "hidden" signal.
	- because the high sum occurs at the frequencies that do match

> **Analogy:** Imagine you have a locked safe with 100 tumblers. You vibrate the safe at different speeds. When you hit the exact resonant frequency of a tumbler, it starts rattling loudly (a high sum). By the time you've tried all speeds, you know exactly which tumblers are inside based on which speeds made noise

### Gemini Explanation for difference between Fourier and Inverse Fourier

- **DFT (Analysis):** Answers the question, _"What frequencies (notes) make up this complex wiggle?"_ It takes a signal and breaks it down into a list of sine and cosine waves.
- **IDFT (Synthesis):** Answers the question, _"If I add these specific frequencies together, what does the final wiggle look like?"_ It takes a list of frequencies and reconstructs the original signal.

---

#### 1. The Mathematical Perspective

The formulas are nearly mirror images. If $x[n]$ is your signal and $X[k]$ is your spectrum:
- **DFT:** $X[k] = \sum_{n=0}^{N-1} x[n] \cdot e^{-j\frac{2\pi}{N}nk}$
- **IDFT:** $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] \cdot e^{j\frac{2\pi}{N}nk}$
The only real differences are the **negative sign** in the exponent and the **$1/N$ scaling factor**. This is why the slide you shared says $DFT^{-1} \approx DFT$; they are mathematically "dual" operations.

---
#### 2. Why use IDFT for the Cepstrum?

This is where the confusion usually happens. In the **Cepstrum** process, we are already in the "Frequency Domain" (the Spectrum). So why apply an _Inverse_ transform?

Think of it this way:

1. **DFT:** Moves you from **Time** $\rightarrow$ **Frequency**.
2. **IDFT:** Moves you from **Frequency** $\rightarrow$ **Time** (or something like it).

By applying the IDFT to the **Log-Spectrum**, we are moving back _away_ from frequency. However, because we took the **Log** first, we don't go back to the original sound wave. Instead, we land in a weird middle ground called the **Quefrency Domain**