const impactData = [
  {
    value: "8+",
    label: "Years of Experience",
    border: "border-t border-r rounded-r-[20px]",
  },
  {
    value: "50+",
    label: "Experts",
    border: "border-l border-t border-r rounded-l-[20px] rounded-r-[20px]",
  },
  {
    value: "100+",
    label: "Successful Campaigns",
    border: "border-l border-t border-r rounded-l-[20px] rounded-r-[20px]",
  },
  {
    value: "20+",
    label: "Industry Awards",
    border: "border-l border-t border-r rounded-l-[20px] rounded-r-[20px]",
  },
  {
    value: "500%",
    label: "ROI for our clients",
    border: "border-t border-l rounded-l-[20px]",
  },
];

export default function Impact() {
  return (
    <div className="h-fit w-[82vw] mx-auto mt-[120px]">
      <div className="flex items-center gap-8">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Our Impact in Numbers
        </div>
        <div className="text-[17px]">
          A snapshot of the milestones and achievements <br />
          that drive our success
        </div>
      </div>

      <div className="mt-[60px] flex">
        {impactData.map((item, index) => (
          <div key={index} className="">
            <div className="relative  w-[255px] h-[40px] overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full h-[100px] ${item.border} border-black`}
              ></div>
            </div>
            <div className="pl-8">
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="text-[#191A23]">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
