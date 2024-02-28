import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Home />} />

        <Route path="/success" element={<Home />} />
      </Route>
    </Routes>
  );
}
