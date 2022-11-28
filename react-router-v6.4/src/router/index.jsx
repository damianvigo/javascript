import { createBrowserRouter } from 'react-router-dom';

import LayoutPublic from '../layout/LayoutPublic';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
