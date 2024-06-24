"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Image from 'next/image'

type billboardArrType = {
    source: string
}
  
const billboardArr: billboardArrType[] = [
    { source: "/billboardSlides/s-2.jpeg" },
    { source: "/billboardSlides/s-4.jpeg" },
    { source: "/billboardSlides/s-5.jpeg" },
    { source: "/billboardSlides/s-6.jpeg" },
]

export default function TravellPage() {
    return(
        <div className='contain relative w-full'>
            <Navbar />
            <div className="items-center justify-center flex">
            <div className="bg-[#DCDCDC] rounded-2xl mx-20 mt-8 max-w-[1520px] max-h-[720px] ">
                <div className="items-center justify-center flex object-contain relative">
                    <Carousel className="w-full object-contain" opts={{ loop: true }}>
                    <CarouselContent>
                        {billboardArr.map((card, index) => (
                        <CarouselItem key={index}>
                            <div className="object-contain">
                            <Card className="object-contain">
                                <CardContent className="object-contain relative">
                                    <Image 
                                        src={card.source}
                                        height={720}
                                        width={1520}
                                        alt={card.source}
                                        className="rounded-2xl object-fill max-w-[1520px] max-h-[720px]"
                                    />
                                    <div className="absolute inset-0 items-center justify-center flex">
                                    <div className="bg-amber-400 top-0 absolute bg-opacity-75 p-4 w-1/2 text-center rounded-b-2xl">
                                        <h1 className="text-3xl font-bold text-gray-200">About BusEurolines</h1>
                                        <p className="mt-2 text-gray-600">Explore Europe with BusEurolines</p>
                                    </div>
                                    </div>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </div>
                </div>
            </div>

            <div className="items-center justify-center flex">
                <div className="grid grid-cols-1">
                    <div className="max-w-6xl w-full">
                        <div className="pt-8 text-black text-xl font-bold">
                            City 1
                        </div>
                        <div className="w-full h-full py-6 items-center justify-center grid grid-cols-2 gap-8">
                            <div className="h-[430px] w-full bg-gray-200 rounded-lg text-gray-200">
                                tt
                            </div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui tortor, id finibus lorem interdum auctor. Nulla facilisi. Vivamus laoreet dolor nisl, at accumsan nunc accumsan sit amet. Maecenas aliquet ex dapibus lorem vulputate dictum. Donec a arcu dignissim, tristique nulla eu, congue ante. Nullam nulla magna, porttitor a condimentum quis, iaculis quis leo. Donec mollis velit ac bibendum placerat. Suspendisse potenti. Proin in nisi aliquam, suscipit arcu non, laoreet felis. Sed pulvinar et dolor a dictum.
                            Nam ac gravida nulla. Ut nisl metus, dictum vitae dignissim quis, volutpat sed ipsum. Mauris et sodales sapien, vel accumsan velit. Proin pulvinar ligula purus. Nullam vulputate sem in ipsum sollicitudin, quis blandit odio hendrerit. Vivamus felis lorem, feugiat in dictum ac, dictum id nunc. Vivamus dui orci, condimentum non diam sed, venenatis suscipit nisl. Donec dignissim porttitor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl w-full">
                        <div className="pt-8 text-black text-xl font-bold">
                            City 2
                        </div>
                        <div className="w-full h-full py-6 items-center justify-center grid grid-cols-2 gap-8">
                            
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui tortor, id finibus lorem interdum auctor. Nulla facilisi. Vivamus laoreet dolor nisl, at accumsan nunc accumsan sit amet. Maecenas aliquet ex dapibus lorem vulputate dictum. Donec a arcu dignissim, tristique nulla eu, congue ante. Nullam nulla magna, porttitor a condimentum quis, iaculis quis leo. Donec mollis velit ac bibendum placerat. Suspendisse potenti. Proin in nisi aliquam, suscipit arcu non, laoreet felis. Sed pulvinar et dolor a dictum.
                            Nam ac gravida nulla. Ut nisl metus, dictum vitae dignissim quis, volutpat sed ipsum. Mauris et sodales sapien, vel accumsan velit. Proin pulvinar ligula purus. Nullam vulputate sem in ipsum sollicitudin, quis blandit odio hendrerit. Vivamus felis lorem, feugiat in dictum ac, dictum id nunc. Vivamus dui orci, condimentum non diam sed, venenatis suscipit nisl. Donec dignissim porttitor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="h-[430px] w-full bg-gray-200 rounded-lg text-gray-200">
                                tt
                            </div>
                        </div>
                        
                    </div>

                    <div className="max-w-6xl w-full">
                        <div className="pt-8 text-black text-xl font-bold">
                            City 3
                        </div>
                        <div className="w-full h-full py-6 items-center justify-center grid grid-cols-2 gap-8">
                            <div className="h-[430px] w-full bg-gray-200 rounded-lg text-gray-200">
                                tt
                            </div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui tortor, id finibus lorem interdum auctor. Nulla facilisi. Vivamus laoreet dolor nisl, at accumsan nunc accumsan sit amet. Maecenas aliquet ex dapibus lorem vulputate dictum. Donec a arcu dignissim, tristique nulla eu, congue ante. Nullam nulla magna, porttitor a condimentum quis, iaculis quis leo. Donec mollis velit ac bibendum placerat. Suspendisse potenti. Proin in nisi aliquam, suscipit arcu non, laoreet felis. Sed pulvinar et dolor a dictum.
                            Nam ac gravida nulla. Ut nisl metus, dictum vitae dignissim quis, volutpat sed ipsum. Mauris et sodales sapien, vel accumsan velit. Proin pulvinar ligula purus. Nullam vulputate sem in ipsum sollicitudin, quis blandit odio hendrerit. Vivamus felis lorem, feugiat in dictum ac, dictum id nunc. Vivamus dui orci, condimentum non diam sed, venenatis suscipit nisl. Donec dignissim porttitor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}