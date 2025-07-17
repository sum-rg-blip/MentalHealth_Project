import SidNavbar from "../Component/SidNavbar";
import Topbar from "../Component/Topbar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  const handleSend = async () => {
    if (!newMessage.trim()) {
      setError("Fadlan fariin geli");
      return;
    }

    const messageObj = {
      sender: "therapist",
      text: newMessage.trim(),
      timestamp: new Date().toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };

    try {
      await axios.post("http://localhost:5000/messages", messageObj);
      setNewMessage("");
      setError("");
      fetchMessages();
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("Failed to send message");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f4f7fe] to-[#e8f0ff]">
      <Topbar />
      <SidNavbar />

      <div className="flex justify-center items-center pt-24">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 flex flex-col h-[80vh] border border-gray-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">💬 Therapist Chat</h2>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto space-y-4 px-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`max-w-[80%] px-4 py-2 rounded-xl shadow-md text-sm ${
                  msg.sender === "therapist"
                    ? "ml-auto bg-blue-600 text-white rounded-br-none"
                    : "mr-auto bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                <p className="text-[10px] mt-1 text-gray-300 text-right font-mono">{msg.timestamp}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="mt-4 border-t pt-3">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Qor fariintaada..."
              rows={3}
              className={`w-full p-3 rounded-lg resize-none border focus:outline-none focus:ring-2 text-sm ${
                error
                  ? "border-red-500 ring-red-200"
                  : "border-gray-300 ring-blue-200"
              }`}
            />
            {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
            <button
              onClick={handleSend}
              className="w-full mt-3 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition"
            >
              🚀 Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
