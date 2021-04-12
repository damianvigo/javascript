import React from 'react';
import CrudApi from './components/CrudApi';
import { CrudApp } from './components/CrudApp';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <h2>CRUD</h2>
      <hr />
      <SongSearch />
      <hr/>
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
