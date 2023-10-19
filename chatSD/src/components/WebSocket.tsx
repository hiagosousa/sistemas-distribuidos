import React, { useEffect } from "react";
import WebSocket from "websocket";

const WebSocketComponent: React.FC = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://seu-servidor-websocket-endereco");

    socket.onopen = (event) => {
      console.log("Conexão WebSocket aberta com sucesso");
    };

    socket.onmessage = (event) => {
      const message = event.data;
      // Lide com a mensagem recebida do servidor WebSocket
    };

    socket.onclose = (event) => {
      console.log("Conexão WebSocket fechada");
    };

    socket.onerror = (error) => {
      console.error("Erro na conexão WebSocket: ", error);
    };

    // Para enviar mensagens para o servidor WebSocket:
    const sendMessage = (message: string) => {
      socket.send(message);
    };

    // Certifique-se de fechar a conexão WebSocket quando o componente for desmontado
    return () => {
      socket.close();
    };
  }, []);

  return <div>{/* Conteúdo do seu componente React */}</div>;
};

export default WebSocketComponent;
