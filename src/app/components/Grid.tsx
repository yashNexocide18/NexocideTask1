export default function Grid() {
    return (
        <div className="w-[80vw] mx-auto mt-20">
            <h1 className="w-[50vw] mx-auto text-3xl font-semibold mb-6 text-black tracking-wide"><p>By the Numbers: Facts About PPC and Organic Marketing</p></h1>
            <div className="grid grid-cols-12 gap-6 p-6">
                <div className="bg-white border rounded-[20px] shadow-[0_5px_0px] p-4 col-span-4 h-[20vh]   ">
                    <div className="flex items-start justify-center flex-col mx-5 my-6">
                        <p className="text-gray-500 text-sm">Businesses earn an average of</p>
                        <h2 className="text-xl font-bold mt-1">$2 for every $1 spent</h2>
                        <p className="text-gray-600 text-sm mt-1">on PPC advertising.</p>

                    </div>
                </div>

                <div className="bg-[#B9FF66] shadow-[0_5px_0px_#B9FF66] rounded-[20px] p-4 col-span-8  ml-4 h-[20vh]">
                    <div className="w-130 flex flex-col items-start justify-center mx-10 mt-5">

                        <h2 className="text-[30px] font-bold text-black">41% of clicks</h2>
                        <p className="text-sm text-black mt-1">
                            on search engines go to the top three organic results, showing the importance of ranking highly.
                        </p>
                    </div>
                </div>
                <div className="bg-[#F3F3F3]  rounded-[20px] shadow-[0_5px_0px_#f3f3f3] p-4 col-span-7 h-[20vh]   ">
                    <div className="flex items-start justify-center flex-col mx-5 my-6">
                        <p className="text-black text-sm ">Content marketing costs <span className="ml-5 text-3xl text-black font-semibold">62% less than paid ads</span></p>
                        <p className="text-black text-sm">but generates <span className="ml-5 text-3xl text-black font-semibold">3x as many leads</span></p>


                    </div>
                </div>
                <div className="bg-[#191A23] shadow-[0_5px_0px_#191A23] rounded-[20px] p-4 col-span-5 ml-4 h-[20vh]">
                    <div className="w-130 flex flex-col items-start justify-center mx-10 mt-5 space-y-2">
                        <p className="text-white text-sm ">Organic search drives</p>
                        <p className="text-3xl text-white font-semibold"><span className="text-[#B9FF66]">53%</span> of all website traffic,</p>
                        <p className="text-sm text-white mt-1">
                            making it the largest single source of traffic.
                        </p>
                    </div>
                </div>



            </div>
        </div>
    );
}