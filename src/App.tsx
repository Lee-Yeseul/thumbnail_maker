import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import NotFound from './pages/404';
import Blog from './pages/Blog/Blog';
import Notion from './pages/Notion';

function App() {
  return (
    <BrowserRouter>
      <div id="modal-root">
        <header>{/* <NavBar /> */}</header>
        <main>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/notion" element={<Notion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
