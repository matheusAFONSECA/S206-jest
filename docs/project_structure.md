# 📁 Project Structure

This project is organized in a clean and modular structure to facilitate unit testing with Jest and ensure good separation between source code and test code.

```
S206-JEST/
├── coverage/               # Automatically generated folder containing test coverage reports
├── docs/                   # All project-related documentation in Markdown format
│   └── installation_jest.md       # Tutorial for installing Jest on Windows
│   └── project_structure.md       # This file - explains the project structure
│   └── example_test.md            # Detailed test examples and explanations
├── node_modules/           # Dependencies installed via npm
├── src/
│   ├── tests/              # Directory containing all test files for the project
│   │   ├── sum.test.js                     # A unit test for the sum function
│   │   ├── sum_calculator.test.js          # Integration & system tests for the calculator
│   │   ├── utils_test/                     # Test utilities for shared setups
│   │   │   ├── setupCalculatorTest.js      # Utility function to initialize the calculator in tests
│   │   │   └── calculator.html             # HTML template used to simulate the calculator interface
│   │   └── calculator_functions/               # Test in functions in calculator
│   │       └── sum_calculator.test.js          # Integration & system tests for the calculator
│   └── utils/              # Utility functions or core business logic
│       └── sum.js          # A simple sum function
├── .github/
│   └── workflows/
│       └── jest-tests.yml  # GitHub Actions workflow file for tests and build automation
├── .gitignore              # Specifies files and directories to be ignored by Git
├── jest.config.ts         # Jest configuration file (optional TypeScript format)
├── LICENSE                 # Project license file
├── package.json            # Project metadata and npm dependencies/scripts
├── tsconfig.json          # TypeScript compiler configuration (even for JS support)
├── package-lock.json       # Describes the exact dependency tree for reproducibility
└── README.md               # Main project README file
```

This structure ensures that test files are colocated but isolated in a dedicated `tests/` folder, making it easier to maintain and scale as the project grows.

