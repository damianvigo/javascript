import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Error404 from '../pages/Error404';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        // console.log(newData)
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`esta seguro de eliminar el registro con id ${id}`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          // console.log(newData)
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
    <HashRouter basename='santos'>
      <header>
        <h2>CRUD API con Rutas</h2>
        <nav>
          <NavLink to='/' activeClassName='active'>Santos</NavLink>
          <NavLink to='/agregar' activeClassName='active'>Agregar</NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path='/'>
          <h2>Home de Santos</h2>
        </Route>
        <Route exact path='/agregar'>
          <h2>Agregar Santos</h2>
        </Route>
        <Route exact path='/editar/:id'>
          <h2>Editar Santos</h2>
        </Route>
        <Route path='*' children={<Error404 />} />
      </Switch>
    </HashRouter>
      <article className='grid-1-2'>
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545' />}
        {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
      </article>
    </div>
  );
};

export default CrudApi;
