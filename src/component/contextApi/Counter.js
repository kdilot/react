import React from 'react';
import { useAnother } from '../../contexts/another';

const Counter = ({ number, incresement }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={incresement}>Add</button>
    </div>
  );
};

export default useAnother(Counter);