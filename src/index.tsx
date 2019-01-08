import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './Theme/styled-components';
import Theme from './Theme';
import Main from './main';

const Font = createGlobalStyle`
  html, body {
    font-family: 'Poppins', sans-serif;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <div>
      <Font />
      <Main />
    </div>
  </ThemeProvider>,
  document.querySelector('#app'),
);
