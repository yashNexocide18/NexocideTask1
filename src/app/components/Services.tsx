import Card from "./Card";

export default function Services() {
  return (
    <div className="h-fit w-[80vw] mx-auto mt-30 ">
      <div className="flex items-center  gap-8 ">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Services
        </div>
        <div className="text-[17px]">
          At our digital marketing agency, we offer a range of services to{" "}
          <br /> help businesses grow and succeed online. These services
          include:
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-13 mt-22">
          <Card
            titleLines={["Search engine", "optimization"]}
            accentColor="#B9FF66"
            bgColor="#f4f4f4"
            shadow="0 8px 0px 0px rgba(0, 0, 0, 3)"
            icon="/Arrow 1.svg"
            imageSrc="/search.png"
            imageAlt="SEO Illustration"
          />
          <Card
            titleLines={["Pay-per-click", "advertising"]}
            accentColor="#ffffff"
            bgColor="#B9FF66"
            shadow="0 8px 0px 0px rgba(0, 0, 0, 3)"
            icon="/Arrow 1.svg"
            imageSrc="/pay.svg"
            imageAlt="SEO Illustration"
          />
          <Card
            titleLines={["Social Media", "Marketing"]}
            accentColor="#ffffff"
            bgColor="#191A23"
            shadow="0 8px 0px 0px  #191A23"
            icon="/Arrow 3.svg"
            imageSrc="/social.svg"
            imageAlt="SEO Illustration"
            iconBgColor="#ffffff"
            iconColor="#000000"
            textColor="#ffffff"
          />
          <Card
            titleLines={["Email", "Marketing"]}
            accentColor="#B9FF66"
            bgColor="#f4f4f4"
            shadow="0 8px 0px 0px rgba(0, 0, 0, 3)"
            icon="/Arrow 1.svg"
            imageSrc="/email.svg"
            imageAlt="SEO Illustration"
          />
          <Card
            titleLines={["Content", "Creation"]}
            accentColor="#ffffff"
            bgColor="#B9FF66"
            shadow="0 8px 0px 0px rgba(0, 0, 0, 3)"
            icon="/Arrow 1.svg"
            imageSrc="/content.svg"
            imageAlt="SEO Illustration"
          />
          <Card
            titleLines={["Analytics and", "Tracking"]}
            accentColor="#ffffff"
            bgColor="#191A23"
            shadow="0 8px 0px 0px #191A23"
            icon="/Arrow 3.svg"
            imageSrc="/analytics.svg"
            imageAlt="SEO Illustration"
             iconBgColor="#ffffff"
            iconColor="#000000"
            textColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}
