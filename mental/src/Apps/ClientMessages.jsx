import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "../Component/SideBar"; 

export default function ClientMessages({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [err, setErr] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // poll every 5s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  const send = async () => {
    if (!newMsg.trim()) {
      return setErr("Fadlan fariin geli");
    }

    const ts = new Date().toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const messageObj = {
      sender: "client",
      text: newMsg.trim(),
      timestamp: ts,
    };

    try {
      await axios.post('http://localhost:5000/messages', messageObj);
      setMessages((m) => [...m, messageObj]);
      setNewMsg("");
      setErr("");
    } catch (err) {
      console.error("Failed to send message:", err);
      setErr("Failed to send message");
    }
  };

  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"} 
        flex flex-col max-w-4xl mx-auto h-[650px] p-8 rounded-3xl shadow-2xl border hover:border-blue-500`}>
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight flex items-center gap-3">
            <span>💬</span> Messages
          </h2>

          <div className={`${darkMode 
            ? "bg-gray-800 scrollbar-thumb-blue-500 scrollbar-track-gray-700"
            : "bg-gray-50"}
            flex-1 overflow-y-auto px-6 py-6 rounded-3xl shadow-inner scrollbar-thin flex flex-col space-y-5`}>
            <AnimatePresence initial={false}>
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[70%] p-6 rounded-3xl break-words shadow-lg ${
                    m.sender === "client"
                      ? darkMode
                        ? "bg-blue-600 text-white self-end hover:bg-blue-700"
                        : "bg-blue-500 text-white self-end hover:bg-blue-600"
                      : darkMode
                      ? "bg-gray-700 text-gray-300 self-start hover:bg-gray-600"
                      : "bg-gray-200 text-gray-900 self-start hover:bg-gray-300"
                  }`}
                  title={`Sent on ${m.timestamp}`}
                >
                  <p className="whitespace-pre-wrap text-lg leading-relaxed">
                    {m.text}
                  </p>
                  <p className="text-xs mt-3 text-gray-400 text-right font-mono">
                    {m.timestamp}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">
            <textarea
              rows={3}
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              className={`resize-none flex-grow p-5 rounded-3xl border focus:outline-none focus:ring-4 
              ${err ? "border-red-500 ring-red-300" 
              : darkMode ? "border-gray-600 bg-gray-800 text-gray-200" 
              : "border-gray-300 bg-white text-gray-900"}`}
              placeholder="Write a message..."
            />
            <button
              onClick={send}
              className="px-10 py-3 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold 
              shadow-lg hover:from-blue-700 hover:to-blue-900 transition"
            >
              Send
            </button>
          </div>

          {err && <p className="mt-3 text-sm text-red-500 font-medium">{err}</p>}
        </div>
      </main>
    </div>
  );
}
