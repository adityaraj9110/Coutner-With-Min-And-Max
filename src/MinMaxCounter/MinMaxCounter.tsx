import { useState } from 'react';

const MAX_COUNT = 5;

export const MinMaxCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter((prev) => {
      if (prev === 0) return;
      return prev - 1;
    });
  };

  const handleIncrement = () => {
    setCounter((prev) => (prev + 1) % (MAX_COUNT + 1));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
      }}
    >
      <button onClick={handleDecrement} disabled={counter === 0}>
        -
      </button>
      <div>{counter}</div>
      <button onClick={handleIncrement} disabled={counter === MAX_COUNT}>
        +
      </button>
    </div>
  );
};
