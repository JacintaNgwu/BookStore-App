import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;
