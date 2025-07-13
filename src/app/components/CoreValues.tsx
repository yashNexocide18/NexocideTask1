import Image from "next/image";

export default function CoreValues() {
  return (
    <div className="h-[90vh] w-[82vw] mx-auto mt-[120px]">
      <div className="flex items-center gap-8 mb-12">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Core Values
        </div>
        <div className="text-[17px]">
          At the heart of everything we do <br />
          are our core values:
        </div>
      </div>
      <div className="w-[80vw] mx-auto mt-20 grid grid-cols-2 gap-4 space-y-10">
        <div className="border w-[590px] h-[320px] p-10 rounded-4xl shadow-[0_6px_0_0_#191A23] space-y-8 overflow-hidden">
          <div className="text-3xl font-semibold">Client Success First</div>
          <div className="mx-auto w-full h-[2px] bg-black my-2"></div>
          <div className="mt-8 mb-13">
            We are dedicated to achieving measurable results for our <br />
            clients. Each strategy is tailored to meet unique <br />
            businesses goals and drive long-term success.
          </div>
        </div>
        <div className="border w-[590px] h-[320px] p-10 rounded-4xl shadow-[0_6px_0_0_#191A23] space-y-8 overflow-hidden">
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <div className="text-3xl font-semibold">
                Innovation
              </div>
              <div className="mx-auto w-full h-[2px] bg-black my-6"></div>
              <div className="mt-8 mb-13">
                We constantly strive to <br /> stay ahead of industry <br /> trends.
              </div>
            </div>
            <div>
              <Image src="/mike.png" alt="img" width={250} height={250} className="mt-2" />
            </div>
          </div>
        </div>
        <div className="border w-[590px] h-[320px] p-10 rounded-4xl shadow-[0_6px_0_0_#191A23] space-y-8 overflow-hidden">
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <div className="text-3xl font-semibold">
                Collaboration
              </div>
              <div className="mx-auto w-full h-[2px] bg-black my-6"></div>
              <div className="mt-8 mb-13">
                We believe in the power <br /> of teamwork and <br /> partnership.
              </div>
            </div>
            <div>
              <Image src="/mike.png" alt="img" width={250} height={250} className="mt-2" />
            </div>
          </div>
        </div>
         <div className="border w-[590px] h-[320px] p-10 rounded-4xl shadow-[0_6px_0_0_#191A23] space-y-8 overflow-hidden">
          <div className="text-3xl font-semibold">Transparency</div>
          <div className="mx-auto w-full h-[2px] bg-black my-2"></div>
          <div className="mt-8 mb-13">
            Open and honest communication is key to our success. <br />
            We keep our clients informed every step of the way to <br />
            ensure trust and clarity.
          </div>
        </div>
      </div>
    </div>
  );
}
