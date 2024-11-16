# PrintComponent React App

This project is a simple React component that demonstrates how to print content from a webpage while adding custom headers and footers to printed pages. It uses `window.print()` and CSS classes to manage the visibility of elements in print and non-print views.

---

## Features

- **Custom Print Header and Footer**: Adds a custom header and footer visible only when printing.
- **Dynamic Table Content**: Displays a table with dynamically generated rows for demonstration.
- **Print Button**: A button to trigger the print functionality.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm run install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the app in your browser (default: http://localhost:3000).
2. Click the Print button to preview the print layout.
3. The printed page will include a header at the top and a footer at the bottom, which are only visible in print mode.

## Folder Structure

```
src/
├── components/
│ └── PrintComponent.jsx // Main component
├── App.jsx // Root component
├── index.js // Entry point
└── styles.css // CSS for print and screen styles
```

## CSS Classes

- **`no-print`**: Hides elements in print mode.
- **`print-only`**: Shows elements only in print mode.
- **`content`**: Wrapper for the main content.
- **`print-header`**: Custom header for print layout.
- **`print-footer`**: Custom footer for print layout.

---

## Customization

- Modify the header and footer content inside the `<header>` and `<footer>` tags.
- Update the dynamic table generation logic inside the `<tbody>` of the `PrintComponent`.

---

## License

This project is licensed under the MIT License.
