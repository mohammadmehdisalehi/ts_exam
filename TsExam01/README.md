
```markdown
# TypeScript Web Application
This repository contains a TypeScript-based web application that allows users to generate random numbers, calculate prime numbers, and more. The application is designed to be modular and maintainable, with code organized into separate files for clarity.

## Table of Contents

- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
## Demo
![Image Link](./IMG/js08.png)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure that you have the following software installed:

- [Node.js](https://nodejs.org/) (version X.X.X)
- [npm](https://www.npmjs.com/) (version X.X.X)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

The code is organized into the following files and directories:

- **main.ts:** Main TypeScript file that imports necessary elements from other files and sets up event listeners.

- **events.ts:** Contains functions for generating random numbers, calculating prime numbers, and clearing input and presentation. Utilizes imported elements and maintains an array of calculated values.

- **functions.ts:** Defines a reusable `Box` function for creating HTML elements with attributes and children.

- **importer.ts:** Exports references to HTML elements, allowing easy access in other files.

- **types.ts:** Contains type definitions used within the project.

## Usage

1. Open the HTML file in a web browser.

2. Enter a 5-digit number in the input field.

3. Click the "Generate" button to generate a random number.

4. Click the "Calculate" button to find prime numbers up to the entered value.

5. Click the "Clear" button to clear the input field and presentation.

## Authors
- [@MohammadMehdiSalehi](https://github.com/mohammadmehdisalehi)
