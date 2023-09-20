import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState<string>("");
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home login={login} />} />
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
