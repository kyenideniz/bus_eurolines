import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CarouselSize() {
  return (
    <div className="grid grid-row-2 pt-6">
        <div className="pb-6 px-6 row-span-1 text-5xl ">
            Find The&nbsp;
            <div className="bg-gradient-to-r from-amber-400 to-red-400 inline-block text-transparent bg-clip-text">Cheapest Tickets!</div>
        </div>
        <div className="items-center justify-center flex max-w-6xl w-full pb-8 px-6 row-span-1">
            <Carousel
                opts={{
                align: "center",
                }}
                className="w-full max-w-6xl items-center justify-center place-content-center flex"
            >
            <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="w-[352px]">
                    <CardContent className="flex aspect-square items-center justify-center">
                        <div className="grid grid-rows-8 h-full w-full">
                            <div className="row-span-5 p-0">
                                <Image 
                                    src={'/nice.jpeg'}
                                    height={480}
                                    width={600}
                                    alt="nice"
                                    className="rounded-t-lg object-fill"
                                />
                            </div>
                            <div className="row-span-3 w-full border-b border-l border-r rounded-b-lg place-content-center flex text-blue-950">
                                <div className="grid grid-rows-5 border-t-2 border-dashed mx-5 w-full">
                                    <div className="row-span-2 grid-rows-3 text-center p-1">
                                        <div className="row-span-2 text-xl">
                                            Nice
                                        </div>
                                        <div className="row-span-1 text-sm">
                                            May, 2023
                                        </div>
                                    </div>
                                    <div className="row-span-3 items-center justify-center flex w-full">
                                        <Button className="text-blue-950 w-[312px] h-[60px] bg-amber-400 hover:bg-amber-500">
                                            <div className="grid grid-rows-2 m-4">
                                                <div className="text-xl">Buy Tickets</div>
                                                <div className="text-sm">Prices starting from 15EUR</div>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </div>
  )
}
