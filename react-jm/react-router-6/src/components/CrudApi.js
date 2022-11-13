import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Error404 from '../pages/Error404';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
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
        // console.log(typeof res);
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

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      console.log(res);
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
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });

    // console.log(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        // console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
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
      <HashRouter>
        <header>
          <h2>CRUD API con Rutas</h2>
          {/* <NavLink to='/santos'> por el basename*/}
          {/*  activeClassName="active" */}
          <nav>
            <NavLink
              to="/santos"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Santos
            </NavLink>
            <NavLink
              to="/santos/agregar"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="/santos"
            element={
              <>
                <article className="grid-1-2">
                  {loading && <Loader />}
                  {error && (
                    <Message
                      msg={`Error ${error.status}: ${error.statusText}`}
                      bgColor="#dc3545"
                    />
                  )}
                  {db && (
                    <CrudTable
                      data={db}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}
                    />
                  )}
                </article>
              </>
            }
          />
          <Route path="/santos">
            <Route
              path="agregar"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
            <Route
              path="editar/:id"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
