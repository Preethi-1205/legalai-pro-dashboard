import React, { useState } from "react";
import SectionCard from "./SectionCard";
import { Send } from "lucide-react";
import { aiChatSeed } from "../data/mockData";

export default function ChatAssistant() {
  const [messages, setMessages] = useState(aiChatSeed);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: `🤖 Analyzing "${input}"... ✅ Done.` },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <SectionCard title="AI Assistant">
      <div className="chat-box">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "ai" ? "text-slate-700" : "text-slate-900 font-medium"}
          >
            {m.from === "ai" ? "AI: " : "You: "} {m.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          className="input"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </SectionCard>
  );
}
