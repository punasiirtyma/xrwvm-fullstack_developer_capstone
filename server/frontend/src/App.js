import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // Importoi rekisteröintikomponentti
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} /> {/* Lisää reitti rekisteröintisivulle */}
    </Routes>
  );
}

export default App;
