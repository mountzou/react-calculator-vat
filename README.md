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
