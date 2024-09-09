import React, { useState, useEffect, useRef } from "react";

const WebSocketPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    // Подключение к WebSocket серверу
    socketRef.current = new WebSocket("wss://echo.websocket.events");

    // Обработка получения сообщений от сервера
    socketRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Закрытие сокета при размонтировании компонента
    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input) {
      // Отправка сообщения на сервер
      socketRef.current.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>WebSocket Echo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите сообщение"
      />
      <button onClick={sendMessage}>Отправить</button>

      <div>
        <h2>Полученные сообщения:</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketPage;
