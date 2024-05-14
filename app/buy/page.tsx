import { ArrowLeftRight, Bus } from "lucide-react";

import { TabsDemo } from "@/components/buyComponents/dayTab";

export default function buyPage() {
    return(
       
            <div className="w-full">
            
                <div className="bg-green-200 max-h-52 w-full grid grid-rows-4 h-full">
                    <div className="w-full h-full items-center justify-center flex row-span-1">
                        <div className="max-w-6xl h-full w-full mx-4 ">
                           
                        </div>
                    </div>
                    <div className="w-full h-full items-center justify-center flex row-span-3">
                    <div className="w-full mx-4 h-full max-w-6xl bg-white shadow-md rounded-lg">
                        <div className="row-span-3 grid text-blue-950 w-full relative ">
                            <div className="py-3 px-6 relative bg-amber-400 rounded-t-lg items-center justify-center flex">
                                <span className="text-xl text-white font-bold h-full italic bg-transparent">BusEurolines</span>
                                <span className=" h-full w-full px-2 inline ">
                                <Bus className=" inline-block text-white h-full"/>
                                </span>
                            </div>
                            <div className="grid grid-cols-3 items-start justify-start w-1/4 text-xl font-semibold p-1 pt-4">
                                <div className="items-start justify-start flex mx-auto ">İzmir</div>
                                <ArrowLeftRight className="items-start justify-start mx-auto flex text-amber-400"/>
                                <div className="items-start justify-start flex mx-auto ">İstanbul</div>
                            </div>
                            <div className="grid grid-cols-2 my-4 font-lg px-6 pb-4">
                                <div className="items-start jusitfy-start  grid grid-cols-2">
                                    <div>Depart Date: 24 May, 2024</div>
                                    <div>Return Date: 28 May, 2024</div>
                                </div>
                                <div className="items-end justify-end flex">2 Adult, 1 Children</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full text-black items-center justify-center h-full flex">
                    <div className="grid grid-cols-1 w-full max-w-6xl mx-4">
                        <div className="w-full py-6 h-[690px] relative bg-zinc-50 rounded-lg shadow-md">
                            <TabsDemo />
                        </div>
                        <div>Some text</div>
                        <div className="w-full py-6 h-[690px] relative bg-zinc-50 rounded-lg shadow-md">
                            <TabsDemo />
                        </div>
                    </div>
                </div>
            </div>
    )
}