import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[85vw] grid grid-cols-2 gap-30 mx-auto mt-5 h-[50vh] p-[20px]">
      <div className="space-y-9">
        <div>
          <h2 className="text-[3rem]">
            Navigating the <br /> digital landscape <br /> for success
          </h2>
        </div>
        <div>
          <p className="text-[17px]">
            Our digital marketing agency helps businesses <br /> grow and
            succeed online through a range of <br /> services including SEO,
            PPC, social media marketing,
            <br /> and content creation.
          </p>
        </div>
        <div className="mt-2">
          <button className="border bg-[#191A23] border-[#f3f3f3] rounded-[10px] px-10 py-4 text-[18px] text-white font-medium hover:opacity-80">
            Book a consulation
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/mike.png"
          alt="hero.png"
          width={550}
          height={90}
        />
      </div>
    </div>
  );
}
