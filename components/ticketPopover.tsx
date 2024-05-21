"use client"

import React from 'react';
import { ArrowLeftRight, Bus } from "lucide-react";

import { TicketDayTabs } from "@/components/buyComponents/dayTab";
import { ScrollArea } from "@/components/ui/scroll-area";

import { message, Steps, theme } from 'antd';
import { Button } from "@/components/ui/button";
import PickSeats from './buyComponents/pickSeats';

export default function TicketPopover() {
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
          content: 'Last-content',
        },
      ];

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    
    const prev = () => {
    setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    

    return(
        <div className="w-lvw h-full py-4 pt-4 items-center justify-center flex">
            <div className="w-[80%] h-full bg-white rounded-lg grid grid-rows-10">
                <div className="bg-green-200 w-full grid grid-rows-6 h-full rounded-t-lg row-span-3">
                    <div className="w-full h-full items-center justify-center flex row-span-2">
                        <div className="max-w-6xl h-full w-full mx-4 items-center justify-center flex ">
                            <Steps current={current} items={items} className='text-white'/>
                        </div>
                    </div>
                    <div className="w-full h-full items-center justify-center flex row-span-4">
                        <div className="w-full mx-4 h-full max-w-6xl bg-white shadow-md rounded-lg">
                            <div className="row-span-3 grid text-blue-950 w-full relative ">
                                <div className="py-3 px-6 relative bg-amber-400 rounded-t-lg items-center justify-center flex">
                                    <span className="text-xl text-white font-bold h-full italic bg-transparent">BusEurolines</span>
                                    <span className=" h-full w-full px-2 inline ">
                                        <Bus className=" inline-block text-white h-full" />
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 items-start justify-start w-1/4 text-xl font-semibold p-1 pt-4">
                                    <div className="items-start justify-start flex mx-auto ">İzmir</div>
                                    <ArrowLeftRight className="items-start justify-start mx-auto flex text-amber-400" />
                                    <div className="items-start justify-start flex mx-auto ">İstanbul</div>
                                </div>
                                <div className="grid grid-cols-2 my-4 font-lg px-6 pb-4">
                                    <div className="items-start jusitfy-start  grid grid-cols-2">
                                        <div>Depart Date: 24 May, 2024</div>
                                        <div>Return Date: 28 May, 2024</div>
                                    </div>
                                    <div className="items-end justify-end flex pr-12">2 Adult, 1 Children</div>
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