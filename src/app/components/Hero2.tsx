import Image from "next/image";
export default function Hero2() {
  return (
    <div className=" w-[80vw]  h-fit mx-auto mt-30  grid grid-cols-2 items-start gap-[100px] rounded-[40px] bg-[#B6FF66] border-2 shadow-[0_8px_0_]  ">
      <div className="flex flex-col items-start gap-5 mt-20 ml-20 w-full">
        <div>
          <h2 className="text-[25px] font-semibold">Join Our Team</h2>
        </div>
        <div>
          {`At Positivus, we thrive on innovation and collaboration. We're always `}
          <br />
          {`looking for passionate individuals to join our team and help `}
          <br />
          {`businesses grow. Ready to make an impact?`}
        </div>

        <div className="w-fit bg-[#191A23] text-white font-space-grotesk font-medium text-[20px] px-7 py-4 rounded-2xl cursor-pointer">
          Explore Careers
        </div>
      </div>
      <div>
        <Image
          src="/h2.svg"
          alt="h2 Image"
          width={100}
          height={300}
          className="w-78 h-100  overflow-visible ml-20 mt-[-30px]"
        />
      </div>
    </div>
  );
}