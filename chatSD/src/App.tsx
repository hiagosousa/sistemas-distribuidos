import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [login, setLogin] = useState<string>("");
  const socket = io("http://seu-backend-java-url");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado ao servidor WebSocket");
    });
  });
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
