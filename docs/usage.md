# Usage Guide

## Detect Phishing URLs
Quickly identify phishing attempts in URLs using the `PhishingDetector` class.

### Example:
```python
from phishing_detection_py import PhishingDetector

detector = PhishingDetector(model_type="url")
result = detector.predict("http://example-phishing-site.com")
print(result)
```
This code will output the detection result, such as whether the URL is a phishing attempt and the confidence score.

---

## Detect Phishing Emails
Analyze email content for phishing indicators.

### Example:
```python
from phishing_detection_py import PhishingDetector

detector = PhishingDetector(model_type="email")
result = detector.predict("Urgent: Your account is locked. Click here to unlock it.")
print(result)
```
This code evaluates the email text and provides phishing detection results.

---

## Batch Processing
You can process multiple URLs or emails at once using the `BatchProcessor` class.

### Example:
```python
from phishing_detection_py.batch_processor import BatchProcessor

inputs = ["http://phishing-url.com", "https://safe-url.org"]
batch_processor = BatchProcessor(model_type="url")
results = batch_processor.process(inputs)
print(results)
```
This approach is ideal for handling large datasets efficiently.

---

## Advanced Usage
Customize your detection workflow or configurations.

### Using Custom Configurations
```python
from phishing_detection_py.utils import load_config

config = load_config("path/to/config.yaml")
print(config)
```
This allows you to load and apply custom configurations for your detection process.

---

## Interpreting Results
The output of detection methods includes:
- **Labels**: `phishing` or `legitimate`
- **Confidence Scores**: A numerical value indicating the model's certainty.

Example Output:
```python
[
    {"input": "http://phishing-url.com", "label": "phishing", "confidence": 0.98},
    {"input": "https://safe-url.org", "label": "legitimate", "confidence": 0.95}
]
