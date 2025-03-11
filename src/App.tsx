import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

function App() {
  return (
    <BrowserRouter basename="/RBARentStore/"> {/* Configura la base correctamente */}
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
