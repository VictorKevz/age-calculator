# Age Calculator App
![alt text](public/design/desktop-preview.jpg)
This repository contains the solution for the [Age Calculator App challenge](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q) on Frontend Mentor. The challenge is designed to improve your JavaScript and form validation skills, particularly in handling dates.

## Project Overview

The Age Calculator App allows users to input their date of birth and calculates their age in years, months, and days. The app also includes robust form validation to ensure accurate input and provides user-friendly error messages.

### Live Demo

You can view the live version of the project [here](https://victorkevz.github.io/age-calculator/).

### Repository

The source code for the project can be found in this GitHub repository: [VictorKevz/age-calculator](https://github.com/VictorKevz/age-calculator.git).

## Features

- **Age Calculation:** Calculates the user's age in years, months, and days based on their date of birth.
- **Form Validation:**
  - Ensures no fields are left empty upon submission.
  - Validates that the day entered is between 1-31.
  - Validates that the month entered is between 1-12.
  - Ensures the date is not in the future.
  - Checks for invalid dates, such as April 31st (April has only 30 days).
- **Responsive Design:** The layout adjusts optimally for different screen sizes, ensuring a consistent user experience across devices.
- **Interactive Elements:** Includes hover and focus states for all interactive elements to enhance the user interface.

## Technologies Used

- **HTML5:** For structuring the content on the web page.
- **CSS:** For styling the application, ensuring it matches the provided design specifications.
- **React.js:** For building the user interface and managing state.
- **Vite:** A fast build tool used to set up the React project and optimize the development workflow.
- **Framer Motion:** For adding animations and smooth transitions to enhance the user experience.

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/VictorKevz/age-calculator.git
   cd age-calculator
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

4. **Build for Production:**

   ```bash
   npm run build
   ```

## How to Use

1. Enter your day, month, and year of birth in the provided input fields.
2. Click the submit button to view your age calculated in years, months, and days.
3. If any errors are present in the input, you will receive appropriate error messages indicating what needs to be corrected.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/VictorKevz/age-calculator/issues) if you have any suggestions or bug reports.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

This README file provides a concise overview of the project, covering the key aspects needed for anyone interested in using, understanding, or contributing to the project.