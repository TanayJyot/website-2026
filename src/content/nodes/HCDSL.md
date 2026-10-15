# ML Research Assistant @ Human-Centered Data Science Lab
*Jun 2026 – Present · Submitted to ACM CHI '27*

Sovereign, on-prem LLM infrastructure for the Children's Aid Society of Toronto, extending the lab's CHI '26 study of AI in public services. 56K+ case notes are analyzed without leaving agency-controlled hardware.

- **rtxllm.** A llama.cpp serving CLI for the lab's RTX 5080: a 15-model quantized GGUF catalog, an OpenAI-compatible REST gateway, and zero-downtime model swaps with automatic rollback.
- **Tenstorrent profiling.** Profiled a 23k-note sweep on 8 Tenstorrent chips (79% prefill-bound), chose tensor over data parallelism, and removed a duplicated warmup prefill. Batch time dropped 44% with byte-identical output.
- **Throughput.** Reached 406 tok/s at batch 16 on Qwen3-14B. Traced corrupt output to tt-metal kernel bug #35225 and dropped prefix caching.

**Stack:** llama.cpp, GGUF, Tenstorrent tt-metal, Qwen3, Python
