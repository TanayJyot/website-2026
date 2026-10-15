# MLOps Intern @ Shopify
*May 2026 – Aug 2026*

- **GPU cluster.** Owned the team's H100 cluster. Benchmarked vLLM against TensorRT-LLM for small-model serving, and moved latency-tolerant jobs to batch inference after tracing a bottleneck in the CentML serving layer.
- **Automated retraining.** Built an Apache Airflow pipeline that retrains the recommender, benchmarks it against the production model, and promotes the winner automatically. It lifted Recall@200 by 39.5% and increased Shop app click-through rate.
- **Recommender benchmarking.** Redesigned the benchmark pipeline (recall, leave-one-out, NDCG) that ranks every deployed model against shared ground truth, and simplified it into a self-serve Tangle ML tool for testing new models against production.
- **Feature store.** Registered 790 inference features in Feast with versioning and drift checks, so BigQuery (offline) and BigTable (online) materialize from one definition and ML engineers can get features without waiting on data engineering.

**Stack:** Apache Airflow, Feast, BigQuery, BigTable, vLLM, TensorRT-LLM, Tangle ML, Skypilot
