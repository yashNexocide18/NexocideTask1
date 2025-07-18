import Image from "next/image";

const journeyData = [
  {
    year: "2019",
    title: "The Beginning",
    description: `Positivus was founded to help 
businesses navigate the digital 
world and achieve online 
success`,
    icon: "/star.png",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: `Positivus was named among  
the top 50 global  digital
agencies, affirming our 
leadership.`,
    icon: "/star.png",
  },
  {
    year: "2023",
    title: "Innovation and Growth",
    description: `With over 50 experts,we
continue to deliver cutting-
edge solutions to help
businesses thrive.`,
    icon: "/star.png",
  },
  {
    year: "2024",
    title: "Leading the Future",
    description: `This year, Positivus is pioneering the use of AI
and automation to deliver even more
personalized, data-driven strategies and 
setting new standards in digital marketing.`,
    icon: "/star.png",
  },
];

export default function Journey() {
  return (
    <div className="h-fit w-[82vw] mx-auto mt-[120px]">
      <div className="flex items-center gap-8 mb-12">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Our Journey
        </div>
        <div className="text-[17px]">
          From humble beginnings to industry leaders, discover how Positivus has{" "}
          <br /> evolved to drive success for businesses worldwide.
        </div>
      </div>

      <div className="space-y-20 mt-19">
        {journeyData.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === journeyData.length - 1;

          return (
            <div
              key={index}
              className={`flex gap-9 ${
                isEven ? "justify-start" : "justify-end"
              }`}
            >
              <div className="text-[55px] font-bold">{item.year}</div>

              <div className="relative border p-9 flex gap-9 w-[550px] h-[220px] rounded-[45px] bg-[#191A23] text-white">
                {!isLast && (
                  <div
                    className={`absolute border-[#B9FF66] border-b-[5px] border-l-[5px]   w-[537px] h-[190px] z-10 top-[90px] 
                    ${
                      isEven
                        ? "left-13 -rounded-br-[2px]"
                        : "-left-119 scale-x-[-1]"
                    } 
                    rounded-bl-2xl`}
                  ></div>
                )}

                <div className="relative">
                  {index !== 0 && (
                    <div
                      className={`absolute border-[#B9FF66] border-t-[5px] w-8 h-[60px] -top-[61px] ${
                        isEven
                          ? "border-l-[5px] -right-2 rounded-tl-2xl"
                          : "border-r-[5px] -left-2 rounded-tr-2xl"
                      }`}
                    ></div>
                  )}
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={100}
                    height={100}
                    className="w-11"
                  />
                </div>
                <div className="mt-2 space-y-4 ">
                  <div className="text-3xl font-semibold">{item.title}</div>
                  <div className="text-[15px] whitespace-pre-line">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
