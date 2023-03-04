import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <div id="modal-root">
        <main>
          <Routes>
            <Route path="*" element={<Blog />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
