import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const name = useRef('Damian');
  const renderCount = useRef(0);
  const counterButtonRef = useRef();
 
  useEffect(() => {
    console.log(counterButtonRef);
    console.log(counterButtonRef.current.textContent = 'btn');
    if (renderCount.current === 0) {
      renderCount.current = renderCount.current + 1;
      return;
    }
    console.log(`The counter has been updated your new value is ${counter}`);
  }, [counter]);

  const changeName = () => {
    name.current = 'DVDEV';
    console.log(`Your new name is ${name.current}`);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button ref={counterButtonRef} onClick={() => setCounter(counter + 1)}>+1</button>

      <br />
      <h1>Nombre: {name.current}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
  );
};

export default App;
