import { useState } from "react";
import { askGemini } from "../utils/gemini";
import { MessageCircle } from "lucide-react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // toggle chatbot

  const handleSend = async () => {
    if (!input.trim()) return;

    console.log("User input:", input); // Log user message
    setLoading(true);
    setMessages(prev => [...prev, `You: ${input}`]);

    try {
      const reply = await askGemini(input);
      console.log("AI reply:", reply); // Log AI response
      setMessages(prev => [...prev, `AI: ${reply}`]);
    } catch (err) {
      console.error("Error calling askGemini:", err);
      setMessages(prev => [...prev, "AI: Sorry, something went wrong. Please try again."]);
    }

    setInput("");
    setLoading(false);
    console.log("Chatbot state after sending:", { messages, input, loading }); // Log current state
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Minimized Button */}
      {!isOpen && (
        <button
          onClick={() => {
            console.log("Opening chatbot");
            setIsOpen(true);
          }}
          className="bg-primary-700 hover:opacity-90 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center bg-primary-600 p-3 rounded-t-lg">
            <span className="font-semibold">AI Chat</span>
            <button
              onClick={() => {
                console.log("Closing chatbot");
                setIsOpen(false);
              }}
              className="text-white font-bold"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 flex-1">
            {messages.map((msg, idx) => (
              <p key={idx} className="mb-1">{msg}</p>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-3 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                console.log("Typing:", e.target.value);
                setInput(e.target.value);
              }}
              placeholder="Ask me anything..."
              className="flex-1 p-2 rounded bg-gray-800"
            />
            <button
              onClick={handleSend}
              className="bg-primary px-3 py-2 rounded hover:opacity-90"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
