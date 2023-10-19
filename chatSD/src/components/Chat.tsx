import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSend } from "react-icons/ai";

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);
  const handleLogout = () => {};
  const handleHomepage = () => {};
  const handleSend = () => {
    alert(message);
    setMessages([...messages, message]); // Adicione a mensagem ao estado
    setMessage("");
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

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
              Bem vindo, User
            </p>
          </div>
          <div className="flex border-l-2 h-full w-[4%]">
            <Link
              to="/"
              className=" flex w-full h-full items-center justify-center"
              onClick={handleHomepage}
            >
              <CgLogOut className="text-white h-full w-full" />
            </Link>
          </div>
        </div>
        <div className="h-[92%] flex items-center justify-center">
          <div className=" h-[95%] w-[95%] flex flex-row">
            <div className="bg-gray-300 h-[100%] w-[25%] pt-[5%] flex justify-center rounded-l-lg">
              <div className=" h-[30%] w-[95%] flex flex-col items-center justify-center">
                <FaUserCircle className="text-gray-400 w-3/4 h-3/4" />
                <p className="overflow-hidden whitespace-normal overflow-ellipsis">
                  User
                </p>
              </div>
            </div>
            <div className="flex flex-col h-[100%] w-[75%]">
              <div className="bg-emerald-600 flex flex-col space-y-4 items-end justify-end rounded-tr-lg border-2 border-gray-400 h-[92%] w-[100%]">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className="flex items-center w-[40%] min-h-[10%] bg-gray-200 rounded-md"
                  >
                    <span className="pl-2">{msg}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-200 h-[8%] w-[100%] border-x-2 border-gray-400 rounded-br-lg flex items-center justify-evenly">
                <input
                  className="bg-gray-300 rounded-xl h-[75%] w-[80%] text-justify"
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  style={{ paddingLeft: "20px" }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                />

                <button onClick={handleSend}>
                  <AiOutlineSend className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
