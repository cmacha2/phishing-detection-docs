# API Reference

## `PhishingDetector` Class

### Methods

#### `__init__(model_type: str = 'url')`
Initializes the phishing detector with the specified model type.

- **Parameters**:
  - `model_type` (str): The type of model to use for detection. Options are:
    - `'url'` for URL phishing detection.
    - `'email'` for email phishing detection.

---

#### `predict(input_data: str) -> List[Dict]`
Predicts whether the given input data is phishing or legitimate.

- **Parameters**:
  - `input_data` (str): The input URL or email text to classify.
- **Returns**: A list of dictionaries, where each dictionary contains:
  - `input` (str): The original input.
  - `label` (str): The classification result (`'phishing'` or `'legitimate'`).
  - `confidence` (float): The confidence score of the prediction.

**Example**:
```python
from phishing_detection_py import PhishingDetector

detector = PhishingDetector(model_type="url")
result = detector.predict("http://example-phishing-site.com")
print(result)
# Output: [{'input': 'http://example-phishing-site.com', 'label': 'phishing', 'confidence': 0.98}]
```

---

#### `predict_proba(input_data: str) -> Dict`
Returns the probabilities for each class (`'phishing'` or `'legitimate'`) for the given input.

- **Parameters**:
  - `input_data` (str): The input URL or email text to classify.
- **Returns**: A dictionary containing:
  - `input` (str): The original input.
  - `probabilities` (Dict[str, float]): The probabilities for each class.

**Example**:
```python
result = detector.predict_proba("http://example-phishing-site.com")
print(result)
# Output: {'input': 'http://example-phishing-site.com', 'probabilities': {'phishing': 0.98, 'legitimate': 0.02}}
```

---

## `BatchProcessor` Class

### Methods

#### `__init__(model_type: str = 'url')`
Initializes the batch processor for handling multiple inputs.

- **Parameters**:
  - `model_type` (str): The type of model to use for batch processing. Options are `'url'` or `'email'`.

---

#### `process(inputs: List[str]) -> List[Dict]`
Processes a batch of URLs or email texts and returns detection results for each input.

- **Parameters**:
  - `inputs` (List[str]): A list of URLs or email texts to classify.
- **Returns**: A list of dictionaries, each containing:
  - `input` (str): The original input.
  - `label` (str): The classification result.
  - `confidence` (float): The confidence score.

**Example**:
```python
batch_processor = BatchProcessor(model_type="url")
inputs = ["http://phishing-url.com", "https://safe-url.org"]
results = batch_processor.process(inputs)
print(results)
# Output: [
#   {'input': 'http://phishing-url.com', 'label': 'phishing', 'confidence': 0.98},
#   {'input': 'https://safe-url.org', 'label': 'legitimate', 'confidence': 0.95}
# ]
```

---

## `utils` Module

### Functions

#### `load_config(config_path: str) -> Dict`
Loads configuration from a YAML file.

- **Parameters**:
  - `config_path` (str): Path to the YAML configuration file.
- **Returns**: A dictionary containing configuration data.

**Example**:
```python
from phishing_detection_py.utils import load_config

config = load_config("config.yaml")
print(config)
```

---

#### `log_message(message: str, level: str = 'info')`
Logs messages at the specified level.

- **Parameters**:
  - `message` (str): The message to log.
  - `level` (str): The log level (`'info'`, `'warning'`, `'error'`).

**Example**:
```python
from phishing_detection_py.utils import log_message

log_message("Phishing detection started", level="info")