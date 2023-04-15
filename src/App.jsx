import { Router, ReactLocation } from '@tanstack/react-location';

import { HomePage, ProductPage } from './pages';

const location = new ReactLocation();

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductPage /> }
];

function App() {
  return (
    <Router
      location={location}
      routes={routes}
    />
  );
}

export default App
