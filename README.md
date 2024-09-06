# VAT Calculator - Υπολογιστής ΦΠΑ

A simple VAT (Value Added Tax) calculator that helps users calculate VAT based on different tax rates (24%, 13%, and 6%). The project is built using **React** and **React-Bootstrap** to ensure a modern and responsive user interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **VAT Calculator** allows users to input values with or without VAT and select a VAT rate to calculate the resulting value. The calculator is designed with a simple, user-friendly interface to cater to the needs of Greek users for VAT calculations.

## Features

- Supports three different VAT rates: **24%**, **13%**, and **6%**.
- Calculate the VAT based on either the **price with VAT** or the **price without VAT**.
- Responsive design using **React-Bootstrap**.
- User-friendly interface with intuitive input fields.
- Mobile-friendly: The app adjusts automatically for smaller screens.
- **Greek** interface with Greek text and labels for localized use.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-Bootstrap**: Bootstrap components rebuilt with React for easy integration.
- **CSS**: Custom styles and utility classes from Bootstrap.
- **Jest**: For running unit tests.
- **HTML5**: Standard HTML for structuring the app.

## Installation

### Prerequisites

Before you begin, ensure you have installed the following tools:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

You should also have basic knowledge of **Git** and **GitHub** for managing the source code.

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mountzou/react-calculator-vat.git

2. Navigate into the project directory:
    ```bash
    cd react-calculator-vat

3. Install the required dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm start

5. Open your browser and go to http://localhost:3000 to view the application.

### Usage

1. Input a value in either the "Τιμή με ΦΠΑ" (Price with VAT) field or the "Τιμή χωρίς ΦΠΑ" (Price without VAT) field.

2. Select a VAT rate (Συντελεστής ΦΠΑ) from the dropdown (24%, 13%, or 6%).

3. The VAT value will be calculated automatically, and the other price field will be updated accordingly.

4. You can switch between input fields, and the app will calculate the result dynamically.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
Use this to run unit tests written for the project.

### `npm run build`

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build for best performance.

### `npm run lint`

Runs the linter to check for syntax and formatting issues.

## File Structure

Here’s a brief look at the project’s structure:

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. **Fork** the repository on GitHub.
2. **Clone** your forked repository to your local machine.
3. **Create a new branch** for your feature or bugfix:
    ```bash
   git checkout -b feature/my-new-feature
4. **Commit your changes** with clear messages:
   ```bash
   git commit -m "Add new feature: VAT calculation method"
5. **Push** your changes to your forked repository:
   ```bash
   git push origin feature/my-new-feature
6. Submit a **Pull Request** on the original repository.

### Reporting Bugs

If you find any bugs or issues, please feel free to open an [issue on GitHub](https://github.com/mountzou/react-calculator-vat/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.