"use client"

import React from "react";
import Image from 'next/image'
import Navbar from '@/components/navbar';
import { ArrowRightLeft } from 'lucide-react';
import PickRoute from '@/components/pickRoute';
import IconButton from '@/components/ui/icon-button';
import TicketPopover from '@/components/ticketPopover';
import DatePick from '@/components/pickRouteComponents/datePick';
import TravellerPopover from '@/components/pickRouteComponents/travellerNumber';
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

type billboardArrType = {
  source: string
}

const billboardArr: billboardArrType[] = [
  { source: "/billboardSlides/s-2.jpeg" },
  { source: "/billboardSlides/s-4.jpeg" },
  { source: "/billboardSlides/s-5.jpeg" },
  { source: "/billboardSlides/s-6.jpeg" },
]

export default function Billboard() {
  const { toast } = useToast()
  
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [selectedRange, setSelectedRange] = React.useState<DateRange>({from: new Date(),to: addDays(new Date(), 4)});

  const dateFrom = selectedRange?.from;
  const dateTo = selectedRange?.to;

  const [adult, setAdult] = React.useState(0);
  const [child, setChild] = React.useState(0);
  const [infant, setInfant] = React.useState(0);

  const travellers = [adult, child, infant];

  const [allFieldsFilled, setAllFieldsFilled] = React.useState(false);

  React.useEffect(() => {
    if (from && to && dateFrom && dateTo && (adult + child + infant > 0)) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [from, to, dateFrom, dateTo, adult, child, infant]);

  const handleDateRangeChange = (range: DateRange) => {
    setSelectedRange(range);
  };

  console.log(selectedRange)

  const handleSearch = () => {
    if (allFieldsFilled && from !== to) {
      return (
        <Dialog>
          <DialogTrigger className='w-full h-full text-blue-950 text-lg border-l-2 border-dashed rounded-none'>
              Search
          </DialogTrigger>
          <DialogContent className='h-full w-[80%] items-center justify-center flex bg-transparent border-0'>
            <div className='h-lvh w-full items-center justify-center flex'>
              <TicketPopover from={from} to={to} dateFrom={dateFrom!} dateTo={dateTo!} travellers={travellers} />
            </div>
          </DialogContent>
        </Dialog>
      );
    } else if (allFieldsFilled) {
      return (
        <Button onClick={() => {
          console.log("toastar")
          toast({
            variant: "destructive",
            title: "Please pick different places!",
            description: "Your choice of destination and departure places must be different.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
          className='w-full h-full text-blue-950 text-lg border-l-2 border-dashed rounded-none bg-transparent hover:bg-transparent'>
            Search
        </Button>
      );
    } else {
      return (
        <Button onClick={() => {
          console.log("toast")
          toast({
            variant: "destructive",
            title: "All boxes must be filled!",
            description: "You must fill all boxes in order to complete the request",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
          className='w-full h-full text-blue-950 text-lg border-l-2 border-dashed rounded-none bg-transparent hover:bg-transparent'>
            Search
        </Button>
      );
    }
  };

  return (
    <div>
      <div className='contain relative w-full'>
        <Navbar />
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
                                  <h1 className="text-3xl font-bold text-gray-200">BusEurolines</h1>
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
          <br />
          <div className='w-full flex items-center justify-center place-content-center '>
            <div className='items-center justify-center flex relative h-full w-full mx-8 '>
              <div className='grid grid-cols-6 bg-white w-full shadow-md absolute rounded-lg max-w-6xl items-center justify-center gap-8 place-content-center h-28'>
                <div className='col-span-2 grid-cols-5 grid w-full h-full justify-items-center items-center mx-4'>
                  {/* Pick Route */}
                  <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                      <PickRoute placeholder="From" onValueChange={setFrom} />
                  </div>
                  <IconButton icon={<ArrowRightLeft />} className='inline-block' />
                  <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                      <PickRoute placeholder="To" onValueChange={setTo} />
                  </div>
                </div>

                {/* Pick Depart Date */}
                <div className='col-span-2 grid items-center justify-items-center'>
                  <div className='border-b-2 border-blue-950 w-full h-full items-start justify-items-start place-content-start hover:opacity-80'>
                    <DatePick 
                      value={selectedRange} 
                      onDateChange={handleDateRangeChange} 
                      placeholderText="date range" 
                    />
                  </div>
                </div>
                
                {/* Pick Travellers */}
                <TravellerPopover 
                  adult={adult}
                  child={child}
                  infant={infant}
                  onAdultChange={setAdult}
                  onChildChange={setChild}
                  onInfantChange={setInfant}
                />
                
                <div className='grid grid-cols-4'>
                  <div className=''></div>
                  <div className='col-span-3 w-full h-28 items-center justify-center flex hover:bg-gray-100 hover:opacity-80 rounded-r-lg '>
                    {handleSearch()}
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}
