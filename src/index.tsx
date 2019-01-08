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
  @-webkit-keyframes autofill {
    to {
        color: #666;
        background: white;
    }
  }
  input:-webkit-autofill {
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #454545 !important;
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
