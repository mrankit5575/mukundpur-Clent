 "use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm CrackIQ Assistant. Ask me anything about our courses, exams, or study materials!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      const botText = data.answer || "I'm not sure about that. Could you ask differently?";
      await typeBotMessage(botText);
    } catch (error) {
      await typeBotMessage("I'm having trouble connecting. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const typeBotMessage = async (text) => {
    let currentText = "";
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setMessages((prev) => {
        const newMessages = [...prev];
        // If last message is bot, update it; else add new
        if (newMessages[newMessages.length - 1].from === "bot" && newMessages[newMessages.length - 1].typing) {
          newMessages[newMessages.length - 1].text = currentText;
        } else {
          newMessages.push({ from: "bot", text: currentText, typing: true });
        }
        return newMessages;
      });
      await new Promise((res) => setTimeout(res, 25)); // typing speed
    }
    // remove typing flag
    setMessages((prev) => {
      const newMessages = [...prev];
      if (newMessages[newMessages.length - 1].from === "bot") {
        delete newMessages[newMessages.length - 1].typing;
      }
      return newMessages;
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const chatVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatVariants}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-80 h-[28rem] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white font-semibold flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <img src="/logo.png" alt="Bot Logo" className="w-5 h-5" />
                </div>
                <span>CrackIQ Assistant</span>
              </div>
              <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <img src="/logo.png" alt="Bot Logo" className="w-6 h-6 rounded-full mr-2" />
                  )}
                  {msg.from === "user" && (
                    <img src="/logo.png" alt="User Logo" className="w-6 h-6 rounded-full ml-2" />
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.from === "user" 
                      ? "bg-indigo-600 text-white rounded-br-none" 
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border border-gray-200 rounded-lg rounded-bl-none px-4 py-2 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about courses, exams, or study tips..."
                  rows="1"
                  className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${!input.trim() || isLoading ? 'text-gray-400' : 'text-indigo-600 hover:bg-indigo-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-center">
                CrackIQ Assistant may produce inaccurate information.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center focus:outline-none ${isOpen ? 'bg-gray-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
}

