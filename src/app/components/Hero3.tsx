import Image from "next/image";

export default function Hero3() {
  return (
    <div className="relative w-[83vw] h-[70vh] mt-13 mx-auto rounded-[40px] bg-[#F3F3F3]">
      <div className=" flex items-center justify-evenly gap-7 mr-9 ">
        <div className="flex items-center h-full mt-[100px]">
          <Image src="/mike.png" alt="ser" width={400} height={400} className="w-[27vw] " />
        </div>
        <div className="flex flex-col space-y-9 mt-[-40px]">
          <div className=" mt-30 w-fit bg-[#dbdbdc] text-[#8f8f8f] pt-1 pb-1 pr-2 pl-2 rounded-[9px]">Marketing Strategies</div>
          <div className="text-[40px]  font-semibold leading-[62px] ">
            <h1>
              PPC vs. Organic <br />
              Marketing: Which One Is <br />
              Right for Your Business?
            </h1>
          </div>
          <div>
            <p className="text-[20px] text-[#191A23]">
              PPC and organic marketing each offer unique <br />
              benefits for driving traffic and growing your <br />business. Discover which strategy aligns best with <br />your goals and how to strike the prfect balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}