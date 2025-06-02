import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const  router = createBrowserRouter([{path: "/" ,element: <App/>}]);

ReactDom.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
    
  </>
)
