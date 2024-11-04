import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage.jsx';
import ErrorPage from './pages/Errorpage/Errorpage.jsx';
import ArtGrid from './pages/Homepage/PageOverview/ArtGrid.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "ArtGRid",
    element: <ArtGrid />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
