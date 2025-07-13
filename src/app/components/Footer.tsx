import Image from "next/image";

export default function Footer() {
  return (
    <div className=" w-[80vw] h-[65vh] mx-auto border-3 mt-30 rounded-t-[60px] border-b-0 bg-[#191A23]">
      <div className="w-[90%] mx-auto h-fit flex items-center justify-between mt-12 ">
        <div>
          <Image src="/pw.svg" alt="possitivus" width={200} height={200} />
        </div>
        <div className="ml-20">
          <ul className="text-[#F3F3F3] underline grid grid-cols-5 gap-7">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Use Cases</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="text-white flex gap-4 ">
          <div className="border bg-white w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <i className="bx bxl-linkedin text-[#191A23]  relative z-10 text-xl"></i>

          </div>
          <div className="border bg-white w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <i className="bx bxl-facebook text-[#191A23] relative z-10 text-xl"></i>

          </div>
          <div className="border bg-white w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <i className="bx bxl-twitter text-[#191A23] relative z-10 text-xl"></i>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mx-auto w-[90%]">
        <div className="text-[#F3F3F3] w-[90%] mx-auto h-fit mt-20 space-y-5 ml-1">
          <div className="bg-[#B9FF66] w-fit p-[4px_9px] rounded-[10px] text-[#191A23] font-semibold">
            Contact us:
          </div>
          <div>Email: info@positivus.com</div>
          <div>Phone: 555-567-8901</div>
          <div>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 1234
          </div>
        </div>
        <div className="rounded-3xl bg-[#2b2d35] w-[40vw] mt-20 -ml-15 text-center flex items-center justify-center gap-3 ">
          <div className=" ">
            <input
              type="email"
              className=" bg-transparent block w-fit rounded-[15px] border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-[16px_24px] text-white"
              placeholder="Email"
            />
          </div>
          <div className="border-white bg-[#B9FF66] w-[230px] h-fit p-[16px_24px] rounded-[15px] ">
            <button>Subscribe to news</button>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[3px] bg-[#F3F3F3] mt-20"></div>
      <div className=" w-[90%] mx-auto mt-10 flex items-start text-[#F3F3F3] space-x-9">
        <div>@ 2023 Positivus.All Rights Reserved.</div>
        <div className=" underline">Privacy Policy</div>
      </div>
    </div>
  );
}
