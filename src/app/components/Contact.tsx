import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative h-[90vh] w-[80vw] mx-auto mt-[120px] overflow-visible">
      <div className="flex items-center gap-8">
        <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
          Contact Us
        </div>
        <div className="text-[17px]">
          <p>
            Connect with Us: Let&apos;s Discuss Your <br /> Digital Marketing
            Needs
          </p>
        </div>
      </div>

      <div className="relative w-full h-[90%] mt-20 rounded-[40px] bg-[#F3F3F3] z-10">
        <div className="flex items-center text-[20px] gap-8 px-10 pt-8 w-[90%] mx-auto">
          <label className="flex items-center gap-2 mt-9">
            <input
              type="radio"
              name="Sayhi"
              className="w-5 h-5 accent-[#B9FF66]"
            />
            Say hi
          </label>
          <label className="flex items-center gap-2 mt-9">
            <input
              type="radio"
              name="Sayhi"
              className="w-5 h-5 accent-[#B9FF66]"
            />
            Get a Quote
          </label>
        </div>

        <form className="flex flex-col items-start gap-7 px-10 py-6 w-[90%] mx-auto">
          <div className="w-[50%]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-3 border bg-white rounded-lg"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-3 border bg-white rounded-lg"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="message">Message*</label>
            <textarea
              placeholder="Message"
              className="w-full px-6 py-3 border bg-white rounded-lg h-[159px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#191A23] text-white font-space-grotesk font-medium text-[20px] px-7 py-4 rounded-2xl cursor-pointer w-[50%]"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="absolute bottom-0 right-[-289px]  z-20 overflow-hidden">
        <Image
          src="/contact.svg"
          alt="contact image"
          width={800}
          height={700}
          className="h-[68vh] w-auto overflow-hidden "
        />
      </div>
    </div>
  );
}
