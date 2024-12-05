import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>apes together strong</h1>
    </div>
  );
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>
    visit google
  </a>
);

const anotherUser = '- ceaser';

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to support apes',
  anotherUser
);

createRoot(document.getElementById('root')).render(reactElement);
