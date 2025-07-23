import Image from "next/image";
export default function Slide2() {
    return (
        <div className="w-[80vw] h-fit mx-auto mt-20">
            <div className="flex justify-between items-center ml-10 mr-10 ">
                <div className="flex gap-5">
                    <div className="bg-black w-fit"><Image
                        src="/star.png"
                        alt="icon"
                        width={100}
                        height={100}
                        className="w-11 filter grayscale"
                    /></div>
                    <div>
                        <div>Sarah Kim</div>
                        <div>Content Creator</div>
                    </div>
                </div>
                <div className="space-x-1 cursor-pointer"><span className="text-[25px] text-[#9f9f9f]">A</span><span className="text-[21px]">A</span><span className="text-[17px] text-[#9f9f9f]">A</span></div>
            </div>
                <div className="h-[2px] bg-black mt-10"></div>
        </div>
    );
}