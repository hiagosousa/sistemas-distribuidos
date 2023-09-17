import { ChangeEvent, useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import Online from "./components/online";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const [login, setLogin] = useState<string>("");

  const handleLoginSubmit = () => {
    alert(login);
  };

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-emerald-400">
      <div className="flex h-3/4 w-2/6 min-w-[350px] bg-gray-600 flex-col justify-center items-center rounded-md">
        <div className=" flex items-center justify-center h-1/5 w-1/5 flex-col">
          <BsChatDotsFill className="text-white h-4/6 w-4/6" />
          <p className="h-2/6 items-center justify-center text-white text-2xl">
            Chat
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center min-w-[250px] h-2/5 w-2/5 rounded-3xl bg-emerald-400 mb-20">
          <div className="flex flex-col items-center space-y-5">
            <p className="text-white text-2xl">Login</p>
            <input
              className="rounded-md p-3"
              type="text"
              placeholder="Digite seu Login"
              value={login}
              onChange={handleLoginChange}
            />
          </div>
          <div>
            <button
              className="bg-orange-300 px-2 py-1 rounded-md"
              onClick={handleLoginSubmit}
            >
              <p className="text-black">Entrar</p>
            </button>
          </div>
        </div>
        <div className="text-white grid text-center">
          <p>Feito por: </p>
          <p>Hiago Martins</p>
          <p>Pedro Piva</p>
        </div>
      </div>
    </div>
  );
}

export default App;
