import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Home />} />
      <Route path="/success" element={<Home />} />
    </Routes>
  );
}
