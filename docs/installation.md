# Installation Guide

Follow these steps to install the Phishing Detection Framework:

## Requirements
- Python 3.8+
- pip 21.0+

### Installation Options

#### Install from PyPI
To install the latest release from the Python Package Index:
```bash
pip install phishing-detection-py
```

#### Install from Source
If you prefer to use the source code:

1. Clone the repository:
    ```bash
    git clone https://github.com/cmacha2/phishing-detection-py.git
    ```
2. Navigate to the project directory:
    ```bash
    cd phishing-detection-py
    ```
3. Install the library and dependencies:
    ```bash
    pip install -e .
    ```

## Dependencies
This library automatically installs the required dependencies:
- `transformers`
- `torch`
- `scikit-learn`
- `pandas`
- `numpy`

If you are contributing or running tests, make sure to install `pytest`:
```bash
pip install pytest
```

## Verifying the Installation
To ensure the installation was successful, you can test it by running:

```bash
python -m phishing_detection_py --help
```
This command will display usage instructions and confirm the library is ready for use.

For detailed examples, check out the [Usage Guide](usage.md).
