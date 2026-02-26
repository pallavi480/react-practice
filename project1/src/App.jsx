import Effect1 from './components/Hooks/useEffect/Effect1';
import Effect2 from './components/Hooks/useEffect/Effect2';
import Effect3 from './components/Hooks/useEffect/Effect3';
import Todo from './components/Hooks/useEffect/Todo';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>

      <BrowserRouter>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/effect1">Effect1</Link>
          <Link to="/effect2">Effect2</Link>
          <Link to="/effect3">Effect3</Link>
          <Link to="/todo">Todo</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/effect1" element={<Effect1 />} />
          <Route path="/effect2" element={<Effect2 />} />
          <Route path="/effect3" element={<Effect3 />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
