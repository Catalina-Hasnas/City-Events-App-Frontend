import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Day from "./pages/Day";
import Calendar from "./pages/Calendar";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="calendar/:monthName" element={<Calendar />} />
          <Route path="day/:date" element={<Day />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
