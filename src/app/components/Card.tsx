import Image from "next/image";

type CardProps = {
  titleLines: string[];
  accentColor?: string;
  bgColor?: string;
  shadow?: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
  iconBgColor?: string;
  iconColor?: string;
  textColor?: string;
};

export default function Card({
  titleLines,
  accentColor = "#B9FF66",
  bgColor = "#f4f4f4",
  shadow = "0 8px 0px 0px #191A23",
  icon = "/Arrow 1.svg",
  imageSrc = "/search.png",
  imageAlt = "Illustration",
  iconBgColor = "#000000",
  iconColor = "#B9FF66",
  textColor = "#000000",
}: CardProps) {
  return (
    <div
      className={`w-[39vw] p-8 rounded-[35px] flex justify-between items-center border-[#191A23] border`}
      style={{
        backgroundColor: bgColor,
        boxShadow: shadow,
      }}
    >
      <div className="flex flex-col justify-between h-full gap-15 p-5 space-y-6">
        <div className="text-3xl font-semibold leading-tight mt-1 ">
          {titleLines.map((line, i) => (
            <div
              key={i}
              className="inline-block rounded-[10px] px-2"
              style={{ backgroundColor: accentColor }}
            >
              {line}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div
            className="bg-black p-3 rounded-full"
            style={{ backgroundColor: iconBgColor, color: iconColor }}
          >
            <Image src={icon} alt="arrow" width={20} height={20} />
          </div>
          <span
            className="text-black text-lg group-hover:underline"
            style={{ color: textColor }}
          >
            Learn more
          </span>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={80}
          height={80}
          className="w-75 h-auto"
        />
      </div>
    </div>
  );
}
