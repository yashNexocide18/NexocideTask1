import Card2 from "./Card2";

export default function Insights() {
    return (
        <div className="h-fit w-[80vw] mx-auto mt-30 ">
            <div className="flex items-center  gap-8 ">
                <div className="w-fit bg-[#B9FF66] text-black font-space-grotesk font-bold text-4xl px-4 py-2 rounded-lg cursor-pointer">
                    Explore More Insights
                </div>
                <div className="text-[17px]">
                    Discover expert tips, strategies, and stories to keep you ahead in the <br /> digital landscape
                </div>
            </div>
             <Card2 />

        </div>
    );
}