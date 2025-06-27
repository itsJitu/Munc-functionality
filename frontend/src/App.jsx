import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Invoice from "./components/Invoice";
import Quotations from "./components/Quotations";
import Sales from "./components/Sales";
import SalesOrder from "./components/SalesOrder";
import First from "./components/First";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,

    children: [
      {
        index:true,
        element: <SalesOrder />
      },
      {
        path: "/Quotations",
        element: <Quotations />
      },
      {
        path: "/Sales",
        element: <Sales />
      },
      {
        path: "/Invoice",
        element: <Invoice />
      }
    ],
  }
]);

function App() {
 

  return <RouterProvider router= {router}/>;
  
};

export default App;
