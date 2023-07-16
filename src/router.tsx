import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {mainContentRoutes} from './components/pages/main-content-routes'
import ErrorPage from './components/pages/error-page';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: mainContentRoutes,
      errorElement: <ErrorPage/>
    },
  ]);