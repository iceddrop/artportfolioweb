import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage.jsx';
import ErrorPage from './pages/Errorpage/Errorpage.jsx';
import ArtGrid from './pages/Homepage/PageOverview/ArtGrid.jsx';
import PageOverview from './pages/Homepage/PageOverview/PageOverview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "ArtGrid",
    element: <ArtGrid />,
  },
  {
    path: "ArtOverview",
    element: <PageOverview/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
