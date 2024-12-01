# Contributing Guide

We welcome contributions to the Phishing Detection Framework! Whether you're fixing bugs, improving documentation, or adding new features, your contributions are greatly appreciated.

## Getting Started

### 1. Fork the Repository
Create a fork of the repository on GitHub:
[https://github.com/cmacha2/phishing-detection-py](https://github.com/cmacha2/phishing-detection-py)

### 2. Clone Your Fork
Clone your forked repository to your local machine:
```bash
git clone https://github.com/your-username/phishing-detection-py.git
cd phishing-detection-py
```

### 3. Create a New Branch
Create a branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

## Setting Up the Development Environment

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Install the library in editable mode:
   ```bash
   pip install -e .
   ```

3. Run tests to ensure everything is working:
   ```bash
   pytest
   ```

## Making Changes

1. Make your changes in the appropriate files.
2. Add or update tests in the `tests/` directory.
3. Run tests to verify your changes:
   ```bash
   pytest
   ```
4. Format your code using `black`:
   ```bash
   black .
   ```

## Submitting Your Changes

1. Commit your changes with a descriptive message:
   ```bash
   git add .
   git commit -m "Add your descriptive message here"
   ```

2. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a pull request:
   Go to your fork on GitHub and click the **Compare & pull request** button.

## Code Guidelines

- Follow the PEP 8 style guide for Python code.
- Write meaningful commit messages.
- Ensure all tests pass before submitting a pull request.
- Include docstrings for any new classes or functions.

## Reporting Issues
If you encounter bugs or have feature requests, please open an issue on GitHub:
[https://github.com/cmacha2/phishing-detection-py/issues](https://github.com/cmacha2/phishing-detection-py/issues)

Thank you for contributing to the Phishing Detection Framework! Together, we can build a safer internet. 🚀