import React from 'react';
import CrudApi from './components/CrudApi';
import { CrudApp } from './components/CrudApp';

function App() {
  return (
    <>
      <h2>CRUD</h2>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
