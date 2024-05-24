"use client"

import React from 'react';
import Image from "next/image"
import { format } from "date-fns"
import { ArrowLeftRight, Bus } from "lucide-react";

import { TicketDayTabs } from "@/components/buyComponents/dayTab";
import { ScrollArea } from "@/components/ui/scroll-area";

import { message, Steps, theme } from 'antd';
import { Button } from "@/components/ui/button";
import PickSeats from '@/components/buyComponents/pickSeats';
import CheckOut from '@/components/buyComponents/checkout';

const steps = [
    {
      title: 'Choose Tickets',
      content: 
        <div className="h-full w-full">
            <div className="w-full h-full text-black items-center justify-center flex pb-4">
                <div className=" w-full max-w-6xl h-full">
                    <TicketDayTabs />
                </div>
            </div>
            <div className="w-full h-full text-black items-center justify-center flex">
                <div className="w-full max-w-6xl h-full">
                    <TicketDayTabs />
                </div>
            </div>
        </div>
    },
    {
      title: 'Pick Seats',
      content: 
        <div className="h-full w-full">
            <div className="w-full h-full text-black items-center justify-center flex pb-4">
                <div className=" w-full max-w-6xl h-full">
                    <PickSeats />
                </div>
            </div>
            <div className="w-full h-full text-black items-center justify-center flex">
                <div className="w-full max-w-6xl h-full">
                    <PickSeats />
                </div>
            </div>
        </div>
    },
    {
      title: 'Checkout',
      content: 
        <div className="h-full w-full">
            <div className="w-full h-full text-black items-center justify-center flex pb-4">
                <div className=" w-full max-w-6xl h-full">
                    <CheckOut />
                </div>
            </div>
        </div>
    },
  ];

interface TicketPopoverInterface {
    from: String,
    to: String, 
    dateFrom: Date | undefined,
    dateTo: Date | undefined,
    travellers: Array<number>,
}

export default function TicketPopover(props: TicketPopoverInterface) {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    
    const prev = () => {
    setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const formatLabel = (value: number, index: number): string => {
        if (value === 1) {
          return index === 0 ? "Adult" : index === 1 ? "Child" : "Infant";
        } else {
          return index === 0 ? "Adults" : index === 1 ? "Children" : "Infants";
        }
    };
    
    const renderTravellers = (): string => {
        let result = "";
        let isFirst = true;
    
        props.travellers.forEach((value, index) => {
        if (value > 0) {
            const label = formatLabel(value, index);
            if (isFirst) {
            result += `${value} ${label}`;
            isFirst = false;
            } else {
            result += `, ${value} ${label}`;
            }
        }
        });
    
        return result;
    };
    
    return(
        <div className="w-lvw h-full py-4 pt-4 items-center justify-center flex">
            <div className="w-[80%] h-full bg-white rounded-lg grid grid-rows-10">
                
                <div className="bg-[#DCDCDC] w-full grid grid-rows-6 h-full rounded-t-lg row-span-3 relative">
                <Image 
                    src={"/berlin.jpeg"}
                    height={480}
                    width={600}
                    alt={"1"}
                    className="rounded-t-lg w-full h-full object-cover absolute z-0" 
                />
                    <div className="w-full h-full items-center justify-center flex row-span-2 z-1">
                        <div className="max-w-6xl h-full w-full mx-4 items-center justify-center flex ">
                            <Steps current={current} items={items} className='text-white'/>
                        </div>
                    </div>
                    <div className="w-full h-full items-center justify-center flex row-span-4 z-1">
                        <div className="w-full mx-4 h-full max-w-6xl bg-white shadow-md rounded-lg z-10 opacity-90">
                            <div className="row-span-3 grid text-blue-950 w-full relative ">
                                <div className="py-3 px-6 relative bg-amber-400 rounded-t-lg items-center justify-center flex ">
                                    <span className="text-xl text-white font-bold h-full italic bg-transparent">BusEurolines</span>
                                    <span className=" h-full w-full px-2 inline ">
                                        <Bus className=" inline-block text-white h-full" />
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 items-start justify-start w-1/4 text-xl font-semibold p-1 pt-4">
                                    <div className="items-start justify-start flex mx-auto ">{props.from}</div>
                                    <ArrowLeftRight className="items-start justify-start mx-auto flex text-amber-400" />
                                    <div className="items-start justify-start flex mx-auto ">{props.to}</div>
                                </div>
                                <div className="grid grid-cols-2 my-4 font-lg px-6 pb-4">
                                    <div className="items-start jusitfy-start  grid grid-cols-2">
                                        <div>Depart Date: {format(props.dateFrom, "PPP")}</div>
                                        <div>Return Date: {format(props.dateTo, "PPP")}</div>
                                    </div>
                                    <div className="items-end justify-end flex pr-12">
                                        {renderTravellers()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full row-span-7">
                    <ScrollArea className="h-[100%] rounded-lg w-full">
                        <div>{steps[current].content}</div>
                        <div className='items-center justify-center flex w-full'>
                            <div className='max-w-6xl py-4 w-full'>
                                {current == 0 && (
                                    <div className='flex w-full'>
                                        <Button onClick={() => next()} className='w-full text-xl bg-amber-400 hover:bg-amber-500 h-full p-1'>
                                            Next
                                        </Button>
                                    </div>
                                )}
                                {current == 1 && (
                                    <div className='grid-cols-2 grid gap-4 w-full'>
                                        <div className='flex w-full'>
                                            <Button onClick={() => prev()} className='w-full text-xl bg-amber-400 hover:bg-amber-500 h-full p-1'>
                                                Previous
                                            </Button>
                                        </div>
                                        <div className='flex w-full'>
                                            <Button onClick={() => next()} className='w-full text-xl bg-amber-400 hover:bg-amber-500 h-full p-1'>
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                {current === 2 && (  
                                    <div className='grid-cols-2 grid gap-4 w-full'>
                                        <div className='flex w-full'>
                                            <Button onClick={() => prev()} className='w-full text-xl bg-amber-400 hover:bg-amber-500 h-full p-1'>
                                                Previous
                                            </Button>
                                        </div>
                                        <div className='flex w-full'>
                                            <Button onClick={() => message.success('Processing complete!')} className='w-full text-xl bg-amber-400 hover:bg-amber-500 h-full p-1'>
                                                Done
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}