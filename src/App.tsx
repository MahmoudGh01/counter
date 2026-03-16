import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Counter Demo</h1>
      <Counter />
      <hr />
      <h2>Counter with initial value of 10:</h2>
      <Counter initialValue={10} />
    </div>
  );
};

export default App;
