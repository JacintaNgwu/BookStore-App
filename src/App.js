import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
