import Image from "next/image";

export default function Hero1() {
  return (
    <div className="relative w-[83vw] h-[70vh] mt-13 mx-auto rounded-[40px] bg-[#F3F3F3]">
      <div className=" flex items-center justify-evenly gap-7 mr-9 ">
        <div className="flex items-center h-full mt-[100px]">
          <Image src="/trophy.svg" alt="ser" width={400} height={400} className="w-[27vw] " />
        </div>
        <div className="flex flex-col space-y-9 mt-[-40px]">
          <div className="text-[63px]  font-semibold leading-[75px] ">
            <h1>
              Together For <br /> Success{" "}
            </h1>
          </div>
          <div>
            <p>
              At Positivus , we help businesses grow by <br /> combining
              creativity, innovation, and data- <br />
              driven strategies. Together, we build a future <br /> of shared
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
