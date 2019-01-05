import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './main';

const Font = createGlobalStyle`
  font-family: 'Poppins', sans-serif;
`;

ReactDOM.render(
  <div>
    <Main />
    <Font />
  </div>,
  document.querySelector('#app'),
);
