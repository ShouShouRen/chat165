import { useState } from "react";

const imageList = [
  {
    src: "https://picsum.photos/id/10/400/300",
    alt: "Interaction Robot",
    content: "simple-answer",
    description: "簡單回答您的問題，快速解決疑惑。",
  },
  {
    src: "https://picsum.photos/id/11/400/300",
    alt: "Risk Assessment",
    content: "risk-assessment",
    description: "快速評估潛在的詐騙風險。",
  },
  {
    src: "https://picsum.photos/id/12/400/300",
    alt: "Risk Evaluation",
    content: "risk-evaluation",
    description: "深入分析風險等級與建議。",
  },
];

const InteractionSection = () => {
  const [activeContent, setActiveContent] = useState("simple-answer");

  return (
    <section className="py-[70px] px-5 bg-[#f9f9f9]">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center max-w-[1200px] mx-auto gap-[40px]">
        <div className="w-full md:w-1/2 max-w-[400px] h-[300px] relative">
          {imageList.map((img) => (
            <img
              key={img.content}
              src={img.src}
              alt={img.alt}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 rounded-2xl ${
                activeContent === img.content
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-[3.5rem] font-bold mb-[25px]">即時互動</h2>
          <p className="text-[1.5rem] text-[#666] mb-[20px]">
            與 Chat165 機器人對話即時聊天：
          </p>
          <ul className="list-none md:w-10/12">
            {imageList.map(({ content, alt, description }) => (
              <li
                key={content}
                onClick={() => setActiveContent(content)}
                className={`text-[1.2rem] mb-[10px] text-[#666] cursor-pointer p-[10px] rounded-[5px] transition-all duration-300 ${
                  activeContent === content
                    ? "bg-[#ff6347] text-white"
                    : "hover:bg-[#ff6347] hover:text-white"
                }`}
              >
                {alt} {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InteractionSection;
