import * as React from "react"

import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type billboardArrType = {
    source: string
}

const billboardArr: billboardArrType[] = [
    {source: "/billboardSlides/s-1.jpeg"},
    {source: "/billboardSlides/s-2.jpeg"},
    {source: "/billboardSlides/s-3.jpeg"},
    {source: "/billboardSlides/s-4.jpeg"},
]

export function BillboardSlider() {
  return (
    <div className="items-center justify-center flex">
    <Carousel className="w-full max-w-[1520px] max-h-[720px] ">
      <CarouselContent>
        {billboardArr.map((card, index) => (
          <CarouselItem key={index}>
            <div className="object-contain">
              <Card className="object-contain ">
                <CardContent className="object-contain">
                    <Image 
                        src={card.source}
                        height={720}
                        width={1520}
                        alt={card.source}
                        className="rounded-lg object-fill max-w-[1520px] max-h-[720px]"
                    />
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
  )
}
