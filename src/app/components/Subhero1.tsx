import Image from "next/image";


export default function Subhero1() {
  return (
    <div className=" w-[80vw] h-[50vh] mx-auto mt-40  grid grid-cols-2 items-start gap-[80px] rounded-[40px] bg-[#191A23]  ">
      <div>
        <Image
          src="/sub1.svg"
          alt="Subhero Image"
          width={400}
          height={300}
          className="w-[27vw] overflow-visible ml-17 mt-[-30px]"
        />
      </div>
      <div className="flex flex-col items-start gap-5 mt-15 w-full">
        <div className="text-white text-4xl">
          <p>
          &apos;&apos; At Positivus, we believe that <br /> success is built on <br /> innovation, collaboration, <br /> and a relentless focus on <br /> delivering results. &apos;&apos;
          </p>
        </div>
         <div className="text-[20px] text-white">
          - John Smith, Founder of Positivus
        </div>
      </div>
    </div>
  );
}
