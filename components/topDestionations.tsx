import Image from "next/image"

export default function TopPlaces() {
    return(
    <section>
        <div className="py-16">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
                <div className="relative">
                    <div className="text-5xl pb-6 text-blue-950">
                        Top Destinations
                    </div>
                    <div className="relative z-10 grid gap-3 grid-cols-6">
                        <div className="col-span-full lg:col-span-2 overflow-hidden flex relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 group transition items-center justify-center ">
                            <div className="size-fit relative items-center justify-center flex place-content-center">
                                <Image src={'/brussels.jpg'} alt="brussels" height={400} width={680} className="h-full w-full z-0 scale-110 group-hover:scale-100 transition"/>
                                <div className="bottom-1 right-3 absolute text-white text-lg  transition-all">
                                    Brussels
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 group transition items-center justify-center flex">
                            <Image src={'/dusseldorf.jpg'} alt="dusseldorf" height={400} width={680} className="h-full w-full z-0 scale-110 group-hover:scale-100 transition"/>
                            <div className="bottom-1 right-3 absolute flex text-white text-lg">
                                Dusseldorf
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 group items-center justify-center flex">
                            <Image src={'/enschede.jpeg'} alt="enschede" height={400} width={680} className="h-full w-full z-0 scale-110 group-hover:scale-100 transition"/>
                            <div className="bottom-1 right-3 absolute flex text-white text-lg">
                                Enschede
                            </div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 group transition items-center justify-center flex">                        
                                <Image src={'/madrid.jpeg'} alt="madrid" height={400} width={680}className="h-full w-full z-0 scale-110 group-hover:scale-100 transition"/>
                                <div className="bottom-1 right-3 absolute flex text-white text-lg">
                                    Madrid
                                </div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 group transition items-center justify-center flex">
                                <Image src={'/paris.jpg'} alt="madrid" height={400} width={680} className="h-full w-full z-0 scale-110 group-hover:scale-100 transition"/>
                                <div className="bottom-1 right-3 absolute flex text-white text-lg">
                                    Paris
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}