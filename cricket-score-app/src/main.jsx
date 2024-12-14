
// Old way (React 17 or below, causing the warning)
// import { createRoot } from 'react-dom';

// New way (React 18+)
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css'; // Import Tailwind CSS styles

// Attach React to the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);