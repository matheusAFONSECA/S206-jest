# Tutorial: How to Install Jest (with Node.js and NVM)

This guide explains step-by-step how to install and configure Jest for testing JavaScript or TypeScript applications. It includes the proper installation of Node.js, npm, and Jest using **nvm (Node Version Manager)** on **Windows**.

## Index

- [Prerequisites](#prerequisites)
- [1. Install NVM for Windows](#1-install-nvm-for-windows)
- [2. Install Node.js and npm using NVM](#2-install-nodejs-and-npm-using-nvm)
- [3. Initialize a New Project](#3-initialize-a-new-project)
- [4. Install Jest](#4-install-jest)
- [5. Configure Jest (optional)](#5-configure-jest-optional)
- [6. Add Test Script](#6-add-test-script)
- [Done!](#done)
- [References](#references)


## Prerequisites

- Operating System: Windows 10 or newer
- Internet connection

---

## 1. Install NVM for Windows

NVM (Node Version Manager) is a version manager for Node.js, which allows you to install and switch between multiple versions.

### Steps:

1. Go to the official NVM for Windows releases:
   👉 https://github.com/coreybutler/nvm-windows/releases/latest

2. Download the file: `nvm-setup.exe`

3. Run the installer:
   - Keep the default installation paths:
     - NVM path: `C:\Program Files\nvm`
     - Node.js path: `C:\Program Files\nodejs`
   - Finish the setup.

4. Open a new terminal (Command Prompt or Git Bash) and check if NVM was installed:
```bash
nvm version
```

---

## 2. Install Node.js and npm using NVM

Jest requires a compatible version of Node.js. As of Jest 29+, the recommended version is **Node.js v20.17.0 or higher**.

### Install Node.js 20.17.0:
```bash
nvm install 20.17.0
```

### Use the installed version:
```bash
nvm use 20.17.0
```

### Check versions:
```bash
node -v     # should output v20.17.0
npm -v      # npm 10+ is usually bundled
```

If needed, update npm to the latest compatible version:
```bash
npm install -g npm@11.3.0
```

---

## 3. Initialize a New Project

In the folder where you want to set up your project, run:

```bash
npm init -y
```

This creates a default `package.json` file.

---

## 4. Install Jest

You can install Jest using the official initializer:

```bash
npm init jest@latest
```

Or install manually:
```bash
npm install --save-dev jest
```

For TypeScript projects, install type definitions:
```bash
npm install --save-dev @types/jest
```

---

## 5. Configure Jest (optional)

To customize Jest, create a configuration file:
```bash
npx jest --init
```

Answer the prompts according to your project setup (TypeScript, Babel, etc).

---

## 6. Add Test Script

In `package.json`, add a script to run tests:

```json
"scripts": {
  "test": "jest"
}
```

Now you can run:
```bash
npm test
```

---

## Done!
You now have a working setup of Jest with the correct Node/npm versions. You can start writing your tests in the `__tests__` folder or anywhere using the `.test.js` or `.spec.js` naming convention.

---

## References

- Jest Docs: https://jestjs.io/docs/getting-started
- NVM for Windows: https://github.com/coreybutler/nvm-windows
