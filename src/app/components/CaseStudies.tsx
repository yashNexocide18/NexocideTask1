import Image from "next/image";

export default function CaseStudies() {
  return (
    <div className="h-fit w-[80vw] mx-auto mt-30 ">
      <div className="flex items-center  gap-8 ">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Case Studies
        </div>
        <div className="text-[17px]">
          Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
          Success through Our Case Studies
        </div>
      </div>
      <div className="w-full h-[40vh] bg-[#191A23] mt-20 border rounded-[48px] px-8 py-6 flex justify-between items-center">
        <div className="flex-1 px-6">
          <p className="mb-4 text-white">
            For a local restaurant, we <br /> implemented a targeted PPC <br />{" "}
            campaign that resulted in a 50% <br /> increase in website traffic
            and a <br /> 25% increase in sales.
          </p>
          <a
            href="#"
            className="text-[#A3FF12] font-medium flex items-center gap-2"
          >
            Learn more
            <span className="text-lg">
              <Image
                src="/Arrow 1.svg"
                alt="arrow.svg"
                width={20}
                height={20}
              />
            </span>
          </a>
        </div>

        <div className="h-[80%] w-px bg-gray-600 mx-4"></div>

        <div className="flex-1 px-6">
          <p className="mb-4 text-white">
            For a B2B software company, we <br /> developed an SEO strategy that{" "}
            <br />
            resulted in a first page ranking <br /> for key keywords and a 200%{" "}
            <br />
            increase in organic traffic.
          </p>
          <a
            href="#"
            className="text-[#A3FF12] font-medium flex items-center gap-2"
          >
            Learn more
            <span className="text-lg">
              <Image
                src="/Arrow 1.svg"
                alt="arrow.svg"
                width={20}
                height={20}
              />
            </span>
          </a>
        </div>

        <div className="h-[80%] w-px bg-gray-600 mx-4"></div>

        <div className="flex-1 px-6">
          <p className="mb-4 text-white">
            For a national retail chain, we <br /> created a social media <br /> marketing
            campaign that <br /> increased followers by 25% and <br /> generated a 20%
            increase in <br /> online sales.
          </p>
          <a
            href="#"
            className="text-[#A3FF12] font-medium flex items-center gap-2"
          >
            Learn more
            <span className="text-lg">
              <Image
                src="/Arrow 1.svg"
                alt="arrow.svg"
                width={20}
                height={20}
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
