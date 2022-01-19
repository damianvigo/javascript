import { Link, Route, Routes, useParams } from 'react-router-dom';

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        distinctio culpa ullam minima at, cum rerum a, nemo, laborum commodi
        ratione tenetur porro magni tempore. Sequi aliquam labore odio eos?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};

export default ReactTopics;
