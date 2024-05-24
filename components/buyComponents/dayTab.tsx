"use client"

import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CircleChevronRight } from "lucide-react"

type flightInfo = {
    id: Number,
    price: String,
    departTime: String,
    landTime: String,
    duration: String
}

type dataArrayType = {
    id: Number,
    date: String,
    flights: flightInfo[]
}

const dataArray: dataArrayType[] = [
    {
        id: 1,
        date: "20 May, Friday",
        flights: [{
            id: 10,
            price: "15,00",
            departTime: "10:30",
            landTime: "11.30",
            duration: "1"
        },{
            id: 11,
            price: "13,75",
            departTime: "12.00",
            landTime: "14.00",
            duration: "2"
        },{
            id: 12,
            price: "15,00",
            departTime: "10:30",
            landTime: "11.30",
            duration: "1"
        },{
            id: 13,
            price: "13,75",
            departTime: "12.00",
            landTime: "14.00",
            duration: "2"
        }]
    },
    {
        id: 2,
        date: "21 May, Saturday",
        flights: [{
            id: 20,
            price: "12,00",
            departTime: "01.10",
            landTime: "02.55",
            duration: "1.45"
        },{
            id: 21,
            price: "15,00",
            departTime: "15.00",
            landTime: "16.30",
            duration: "1.30"
        }]
    },{
        id: 3,
        date: "22 May, Sunday",
        flights: [{
            id: 30,
            price: "13,00",
            departTime: "09.00",
            landTime: "11.30",
            duration: "2.30"
        },{
            id: 31,
            price: "15,00",
            departTime: "12.00",
            landTime: "13.45",
            duration: "1.45"
        }]
    },{
        id: 4,
        date: "23 May, Monday",
        flights: [{
            id: 40,
            price: "13,75",
            departTime: "08.30",
            landTime: "10.30",
            duration: "2"
        },{
            id: 41,
            price: "15,00",
            departTime: "09.30",
            landTime: "11.00",
            duration: "1.30"
        }]
    },{
        id: 5,
        date: "24 May, Tuesday",
        flights: [{
            id: 50,
            price: "10,00",
            departTime: "04.30",
            landTime: "06.00",
            duration: "1.30"
        },{
            id: 51,
            price: "11,00",
            departTime: "00.55",
            landTime: "02.00",
            duration: "1.05"
        },{
            id: 52,
            price: "9,30",
            departTime: "05.00",
            landTime: "07.30",
            duration: "2.30"
        }]
    },
];

export function TicketDayTabs({from, to}: {from:String, to: String} ) {
  const [num, setNum]  = React.useState(0);

  return (
    <div className="w-full py-6 h-full relative bg-zinc-50 rounded-lg shadow-md ">
        <div className="w-full px-4 h-fit p-4">
            <div className="text-xl text-blue-950 font-semibold px-8 py-4 relative h-fit">
                <span className="px-4 inline-block">{from}</span>
                <ArrowRight className="inline-block text-amber-400" />
                <span className="px-4 inline-block">{to}</span>
            </div>
            <Tabs defaultValue="0" className="w-full h-fit px-12">
                <Carousel >
                    <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-12">
                            <TabsList className="w-full h-full">
                                <TabsTrigger value={index.toString()} onClick={() => (setNum(index))}>
                                    <div className="text-xl text-blue-950 h-full">
                                        <div>{dataArray[index].date}</div>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                        </CarouselItem>  
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="">
                    <TabsContent value={num.toString()} className="h-full">
                        <div className="w-full h-fit rounded-lg bg-gray-100 py-2" key={dataArray[num].id.toString()}>
                            {dataArray[num].flights.map((flight) => (
                                <div className="items-center justify-center flex px-4 h-full" key={flight.id.toString()}>
                                    <div className="h-full py-8 grid grid-cols-10 w-full bg-transparent text-2xl relative text-blue-950 border-dashed border-y border-gray-200">
                                        <div className="col-span-2 items-center justify-center flex my-auto h-full">{flight.departTime}</div>
                                        <div className="col-span-2 items-center justify-center flex h-full">
                                            <div className="grid grid-cols-3 items-center jusitfy-center w-full">
                                                <Separator className=" bg-gray-300 items-start justify-start flex w-full pr-2" />
                                                <div className="text-sm aspect-square items-center justify-center flex font-extralight text-gray-400 italic w-full">{flight.duration} hours</div>
                                                <Separator className=" bg-gray-300 items-start justify-start flex w-full pl-2" />
                                            </div>
                                        </div>
                                        <div className="col-span-2 items-center justify-center flex h-full">{flight.landTime}</div>
                                        <div className="col-span-2 w-full"></div>
                                        <div className="col-span-2 items-center justify-center flex">{flight.price.toString()} EUR</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </Tabs>   
        </div>
    </div>
  )
}
