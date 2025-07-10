import Image from "next/image";


export default function Subhero() {
  return (
    <div className=" w-[80vw] h-[40vh] mx-auto mt-30  grid grid-cols-2 items-start gap-[100px] rounded-[40px] bg-[#F4F4F4]  ">
      <div className="flex flex-col items-start gap-5 m-18 w-full">
        <div>
          <h2 className="text-[25px] font-semibold">Let’s make things happen</h2>
        </div>
        <div>
          <p>
            Contact us today to learn more about how our digital <br />{" "}
            marketing services can help your business grow and <br /> succeed
            online.
          </p>
        </div>
         <div className="w-fit bg-[#191A23] text-white font-space-grotesk font-medium text-[20px] px-7 py-4 rounded-2xl cursor-pointer">
          Get your free proposal
        </div>
      </div>
      <div>
        <Image
          src="/sub.svg"
          alt="Subhero Image"
          width={100}
          height={300}
          className="w-90 h-100  overflow-visible ml-20 mt-[-30px]"
        />
      </div>
    </div>
  );
}
