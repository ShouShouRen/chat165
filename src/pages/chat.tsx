import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { sendChatMessage } from "../api/chat";
import AnimatedPage from "../components/utils/AnimatedPage";
interface Message {
  from: "user" | "bot";
  text: string;
  time: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const chatboxRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const scrollToBottom = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendQuestion = async () => {
    const trimmed = question.trim();
    if (!trimmed) {
      toast.warning("請輸入問題");
      return;
    }

    const newUserMessage: Message = {
      from: "user",
      text: trimmed,
      time: getCurrentTime(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setQuestion("");

    try {
      const botMessage = await sendChatMessage(trimmed);
      setMessages((prev) => [...prev, botMessage]);
      setTimeout(scrollToBottom, 0);
    } catch (error) {
      const errorMessage: Message = {
        from: "bot",
        text: "⚠️ 發生錯誤",
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error sending message:", error);
    }
  };

  return (
    <AnimatedPage>
      <div className="p-[160px_20px_70px]">
        <div className="max-w-[1200px] mx-auto bg-[#1a1a1a] text-white rounded-[15px] shadow-lg flex flex-col h-[70vh]">
          <div className="flex items-center p-4 bg-black/80 rounded-t-[15px] text-white">
            <div
              className="w-[50px] h-[50px] rounded-full bg-center bg-cover mr-4"
              style={{ backgroundImage: "url('/robot.png')" }}
            ></div>
            <div className="flex-1">
              <div className="font-bold text-xl mb-1">詐騙問答助手</div>
              <div className="text-gray-400 text-sm">
                這是一個協助判斷詐騙風險的聊天機器人
              </div>
            </div>
            <div title="這是一個聊天機器人" className="hidden">
              <i>ℹ️</i>
            </div>
          </div>

          <div
            ref={chatboxRef}
            className="flex-1 p-4 overflow-y-auto bg-white/10 text-white flex flex-col gap-6"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex max-w-[70%] ${
                  msg.from === "user"
                    ? "self-end flex-col items-end"
                    : "self-start flex-row gap-2"
                }`}
              >
                {msg.from === "bot" && (
                  <div
                    className="w-[40px] h-[40px] rounded-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/robot.png')" }}
                  />
                )}
                <div
                  className={`w-full p-4 rounded-[15px] text-base leading-relaxed break-words ${
                    msg.from === "user"
                      ? "bg-[#00c300] text-white rounded-br-[5px]"
                      : "bg-white text-black rounded-bl-[5px]"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\n/g, "<br />"),
                  }}
                />
                <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                {msg.from === "user" && (
                  <div className="text-xs text-gray-400 mt-1">已讀</div>
                )}
              </div>
            ))}
          </div>

          <div className="flex p-4 bg-black/80 rounded-b-[15px]">
            <input
              type="text"
              placeholder="請輸入你的問題..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendQuestion();
                }
              }}
              className="flex-1 p-2 rounded-l-[25px] text-black text-base focus:outline-none bg-white"
            />
            <button
              onClick={sendQuestion}
              className="px-10 py-3 rounded-r-[25px] bg-[#ff6347] text-white text-lg transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ChatPage;
