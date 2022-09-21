import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Day from "./pages/Day";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="day/*" element={<Day />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
