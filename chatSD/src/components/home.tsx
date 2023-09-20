import { FaUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

type HomeProps = {
  login: string;
};

function Home(props: HomeProps) {
  const { login } = props;
  const navigate = useNavigate();
  console.log(login);

  const handleLogout = () => {};
  const handleChat = () => {};

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-emerald-400">
      <div className=" flex-col h-[90%] w-3/5 min-w-[350px] bg-gray-600 rounded-md">
        <div className=" top-0 bg-gray-400 border-2 rounded-t-md h-[8%] w-full flex flex-row items-center">
          <div className="flex border-r-2 h-full w-[4%] items-center justify-center">
            <Link to="/home" className=" w-full h-full" onClick={handleLogout}>
              <AiOutlineHome className="text-white items-center justify-center w-full h-full" />
            </Link>
          </div>
          <div className="text-white h-[60%] w-[36%]">
            <FaUserCircle className="text-white w-full h-full" />
          </div>
          <div className="flex text-white h-[60%] w-[56%] text-2xl items-center">
            <p className="overflow-hidden whitespace-normal overflow-ellipsis">
              Bem vindo, {login}
            </p>
          </div>
          <div className="flex border-l-2 h-full w-[4%] items-center justify-center">
            <Link to="/" className=" w-full h-full" onClick={handleLogout}>
              <CgLogOut className="text-white items-center justify-center w-full h-full" />
            </Link>
          </div>
        </div>
        <div className="flex w-full h-[92%] items-center justify-center">
          <div className="bg-emerald-600 flex flex-col w-[50%] h-[95%] space-y-1 border-2 rounded-md items-center overflow-y-scroll">
            <div className="bg-gray-300 flex w-[99%] border-black border-2 h-[10%] space-x-2">
              <Link
                className="w-full h-full flex items-center justify-center"
                to="/chat"
                onClick={handleChat}
              >
                <FaUserCircle className="text-green-700 text-6xl" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis text-2xl">
                  User 1
                </p>
              </Link>
            </div>
            <div className="bg-gray-300 flex w-[99%] border-black border-2 h-[10%] space-x-2">
              <Link
                className="w-full h-full flex items-center justify-center"
                to="/chat"
                onClick={handleChat}
              >
                <FaUserCircle className="text-green-700 text-6xl" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis text-2xl">
                  User 2
                </p>
              </Link>
            </div>
            <div className="bg-gray-300 flex w-[99%] border-black border-2 h-[10%] space-x-2">
              <Link
                className="w-full h-full flex items-center justify-center"
                to="/chat"
                onClick={handleChat}
              >
                <FaUserCircle className="text-green-700 text-6xl" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis text-2xl">
                  User 3
                </p>
              </Link>
            </div>
            <div className="bg-gray-300 flex w-[99%] border-black border-2 h-[10%] space-x-2">
              <Link
                className="w-full h-full flex items-center justify-center"
                to="/chat"
                onClick={handleChat}
              >
                <FaUserCircle className="text-green-700 text-6xl" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis text-2xl">
                  User 4
                </p>
              </Link>
            </div>
            <div className="bg-gray-300 flex w-[99%] border-black border-2 h-[10%] space-x-2">
              <Link
                className="w-full h-full flex items-center justify-center"
                to="/chat"
                onClick={handleChat}
              >
                <FaUserCircle className="text-green-700 text-6xl" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis text-2xl">
                  User 5
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
