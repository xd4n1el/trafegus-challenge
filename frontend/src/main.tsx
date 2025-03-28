import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
