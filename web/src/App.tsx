import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  console.log("A")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
