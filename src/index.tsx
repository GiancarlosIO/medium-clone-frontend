import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1 id="asdasdasd">A simple medium clone</h1>
      <p>Hello world</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)