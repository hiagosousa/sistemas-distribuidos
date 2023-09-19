import { FaUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const { login } = useParams();
  const navigate = useNavigate();
  console.log(login);

  const handleLogout = () => {
    alert("opa");
    navigate("/home");
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-emerald-400">
      <div className="relative flex h-[90%] w-3/5 min-w-[350px] bg-gray-600 rounded-md">
        <div className="absolute top-0 bg-gray-400 border-2 rounded-t-md h-[5%] w-full flex flex-row items-center">
          <div className="text-white h-[60%] w-[40%]">
            <FaUserCircle className="text-white w-full h-full" />
          </div>
          <div className="flex text-white h-[60%] w-[60%] text-2xl items-center">
            <p className="overflow-hidden whitespace-normal overflow-ellipsis">
              Bem vindo, {login}
            </p>
          </div>
          <div className="flex border-l-2 h-full w-[4%] items-center justify-center">
            <button className=" w-full h-full" onClick={handleLogout}>
              <CgLogOut className="text-white items-center justify-center w-full h-full" />
            </button>
          </div>
        </div>
      </div>
      Home
    </div>
  );
}

export default Home;
