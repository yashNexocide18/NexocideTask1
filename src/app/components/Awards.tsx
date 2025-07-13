import Image from "next/image";

const awards = [
  {
    image: "/a1.svg",
    label: `Best Small Business Digital
     Marketing Agency of the
      Year`,
    description: `Celebrating our success in
     delivering innovative
      strategies and measurable
       results for small business
        clients.`,
  },
  {
    image: "/a2.svg",
    label: `Innovative Website Design`,
    description: `Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand's essence and boost conversions.`,
  },
  {
    image: "/a3.svg",
    label: `Top Performing PPC Campaign of the Year`,
    description: `Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results.`,
  },
  {
    image: "/a4.svg",
    label: `Expertise in Social Media Marketing`,
    description: `Recognizing our 
     exceptional skills in crafting
      effective social media strategies, managing accounts, and creating engaging content.`,
  },
];

export default function Awards() {
  return (
    <div className="h-fit w-[80vw] mx-auto mt-[110px]">
      <div className="flex items-center gap-8 flex-wrap">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Awards & Recognition
        </div>
        <div className="text-[17px]">
          At Positivus, our commitment to excellence has been recognized
          <br />
          by industry leaders. Here are some of our proudest achievements:
        </div>
      </div>

      <div className="mt-34 flex justify-between flex-wrap gap-y-10">
        {awards.map((item, index) => (
          <div
            key={index}
            className="w-[19vw] p-9 rounded-[50px] bg-[#F3F3F3] flex-shrink-0"
          >
            <div className="flex items-center justify-center">
              <Image src={item.image} alt="award" width={200} height={200} />
            </div>
            <div className="space-y-4 mt-4">
              <div className="text-[16px] font-semibold whitespace-pre-line">
                {item.label}
              </div>
              <div className="whitespace-pre-line">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
