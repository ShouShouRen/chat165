import makeRequest from "./request";

interface Message {
  from: "user" | "bot";
  text: string;
  time: string;
}

export const sendChatMessage = async (question: string): Promise<Message> => {
  try {
    const res = await makeRequest<{ answer: string }>("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { question },
    });

    return {
      from: "bot",
      text: res?.answer ?? "⚠️ 回覆錯誤",
      time: new Date().toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      from: "bot",
      text: "⚠️ 發生錯誤",
      time: new Date().toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  }
};
