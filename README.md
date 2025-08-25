# Next.js Boilerplate 🚀 - v15

Welcome to the Next.js Boilerplate! This project is a modern starter template built with Next.js, TypeScript, and Vitest for testing. Use this README to quickly get up to speed with the project essentials and conventions.

---

## Contents 📖

- [Essentials](#essentials-)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Filename Convention Guide](#filename-convention-guide)
- [Contributing](#contributing)
- [License](#license)

---

## Essentials ⚙️

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:timwhite06/nextjs_boilerplate.git
cd nextjs-boilerplate
npm install
```

### Scripts
Your package.json includes several useful scripts to help you with development, formatting, type-checking, and testing:

#### Install Dependencies
Firstly, the most essential step, install dependencies:
```bash
npm install
```

#### Development
Start the development server on: <a>https:localhost:3000</a>:
```bash
npm run dev
```

#### Formatting the codebase
Uses ESlint & Prettier:
```bash
npm run format
```

#### Checks TypeScript can be built
This is also run on a GitHub Workflow:
```bash
npm run type-check
```

#### Testing locally
Uses Vitest:
```bash
npm run test
```

Use the GUI:

```bash
npm run test:gui
```

---

## Filename Convention Guide 📝
To keep the codebase consistent and maintainable, follow these conventions:

- **Components:**  
  - Use PascalCase  
  - Example: `Navbar.tsx`

- **Hooks, utilities, helpers:**  
  - Use camelCase  
  - Example: `useAuth.ts`

- **Pages and API files:**  
  - Use kebab-case  
  - Example: `user-profile.tsx`

- **Config and constants:**  
  - Use snake_case  
  - Example: `app_config.ts`

- **Tests:**  
  - Follow `.test.tsx` or `.spec.tsx` convention  
  - Example: `Navbar.test.tsx`

---

## Dependencies 📦
- **autoprefixer:** 🔧 Automatically adds vendor prefixes to your CSS, ensuring cross-browser compatibility.
- **axios:** 🌐 A promise-based HTTP client for making API requests easily.
- **clsx:** 🧩 A utility for conditionally joining classNames together.
- **mailgun.js:** 📧 A library to send emails via the Mailgun API.
- **mongodb:** 🍃 The official MongoDB driver for Node.js to interact with your database.
- **next:** ⚡ The Next.js framework for building React applications with server-side rendering and static site generation.
- **next-recaptcha-v3:** 🔒 Integrates Google reCAPTCHA v3 with Next.js for enhanced security.
- **react:** ⚛️ The core React library for building user interfaces.
- **react-dom:** 🌟 Provides DOM-specific methods for React.
- **valibot:** ✅ A lightweight validation library for runtime data validation.
- **zustand:** 🔄 A small, fast state management solution for React applications.

---

#### Dev Dependencies 🛠️
In addition, the project uses these dev dependencies to support development, linting, formatting, and testing:

- **@eslint/js:** Linting engine for JavaScript.
- **@tailwindcss/postcss:** Tailwind CSS PostCSS plugin.
- **@testing-library/jest-dom:** Custom jest matchers to test the state of the DOM.
- **@testing-library/react:** Utilities for testing React components.
- **@types/node:** TypeScript definitions for Node.js.
- **@types/react:** TypeScript definitions for React.
- **@vitest/coverage-v8:** V8 coverage provider for Vitest.
- **@vitest/ui:** UI mode for Vitest.
- **daisyui:** Tailwind CSS component library.
- **eslint:** Pluggable linter for JavaScript.
- **eslint-config-next:** Next.js ESLint configuration.
- **eslint-config-prettier:** Disables ESLint rules that might conflict with Prettier.
- **eslint-plugin-prettier:** Runs Prettier as an ESLint rule.
- **eslint-plugin-react:** React specific linting rules for ESLint.
- **globals:** Provides definitions for global variables.
- **jsdom:** JavaScript implementation of the DOM and HTML standards.
- **lucide-react:** A React icon library.
- **prettier:** Code formatter.
- **prettier-plugin-tailwindcss:** Formats Tailwind CSS classes in your code.
- **tailwind-merge:** Merges conflicting Tailwind CSS classes.
- **tailwindcss:** Utility-first CSS framework.
- **tailwindcss-animate:** Animate utility classes for Tailwind CSS.
- **typescript:** TypeScript language and compiler.
- **typescript-eslint:** Tools for using ESLint with TypeScript.
- **vitest:** A blazing fast unit test framework.
