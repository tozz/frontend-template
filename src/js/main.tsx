import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from './component';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    const root = createRoot(document.getElementById('app') as HTMLDivElement);
    root.render(
      <StrictMode>
        <Component />
      </StrictMode>
    );
  }
});
