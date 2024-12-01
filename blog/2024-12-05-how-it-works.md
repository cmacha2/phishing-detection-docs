---
title: "How the Phishing Detection Framework Works"
description: "An overview of the machine learning models and techniques behind the framework."
slug: how-it-works
date: 2024-12-05
authors: cmacha2
tags: [technical, ml, phishing, tutorial]
---

The **Phishing Detection Framework** is powered by state-of-the-art machine learning models hosted on Hugging Face:

- **URL Detection**: [`bert-finetuned-phishing`](https://huggingface.co/ealvaradob/bert-finetuned-phishing)
- **Email Detection**: [`phishing-email-detection-distilbert_v2.4.1`](https://huggingface.co/cybersectony/phishing-email-detection-distilbert_v2.4.1)

These models are fine-tuned for phishing detection, offering high accuracy and reliability. They analyze:

1. **URLs**: Scanning for known phishing patterns.
2. **Email content**: Identifying deceptive language or malicious intent.

Learn more in the [API Reference](docs/api-reference.md).
