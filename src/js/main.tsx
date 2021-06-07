import ReactDOM from 'react-dom';
import '../css/tailwind.css';
import { Component } from './component';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    ReactDOM.render(<Component />, document.getElementById('root'));
  }
});
