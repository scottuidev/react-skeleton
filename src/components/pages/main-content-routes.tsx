import CarList from './cars/car-list';
import { Home } from './home';

export const mainContentRoutes = [
  {
    path: "/",
    element: <Home />,
  },
    {
      path: "/cars",
      element: <CarList />,
    },
  ];