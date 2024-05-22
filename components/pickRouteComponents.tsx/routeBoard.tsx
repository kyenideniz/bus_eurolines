"use client"

import PickRoute from '@/components/pickRoute';
import IconButton from '@/components/ui/icon-button';

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { ArrowRightLeft } from 'lucide-react';
import TravellerPopover from '@/components/pickRouteComponents.tsx/travellerNumber';
import TicketPopover from '@/components/ticketPopover';
import React from "react";
import DatePick from '@/components/pickRouteComponents.tsx/datePick';

export default function RouteBox() {
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");

    return(
        <div className='w-full flex items-center justify-center place-content-center'>
        <div className='items-center justify-center flex h-full w-full mx-12 p-8'>
            <div className='p-12 items-center justify-center flex'>
            <div className='grid grid-cols-6 bg-white w-full shadow-md border rounded-lg max-w-6xl mx-12  items-center justify-center gap-8 place-content-center h-28'>
                <div className='col-span-2 grid-cols-5 grid w-full h-full justify-items-center items-center mx-4'>
                {/* Pick Route */}
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                    <PickRoute placeholder="From" onValueChange={setFrom} />
                </div>
                <IconButton icon={<ArrowRightLeft/>}  className='inline-block' />
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                    <PickRoute placeholder="To" onValueChange={setTo} />
                </div>
                </div>

                {/* Pick Depart Date */}
                <div className='col-span-2 grid-cols-4 grid mx-4 w-full h-full items-center justify-items-center gap-4'>
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                    <DatePick />
                </div>
                {/* Pick Return Date */}
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                    <DatePick />
                </div>
                </div>
                
                {/* Pick Travellers */}
                <TravellerPopover />
                
                <div className='grid grid-cols-4'>
                    <div className=''></div>
                    <div className='col-span-3 w-full h-28 items-center justify-center flex hover:bg-gray-100 hover:opacity-80 rounded-r-lg '>
                        <Dialog>
                        <DialogTrigger className='w-full h-full text-blue-950 text-lg border-l-2 border-dashed rounded-none'>
                            Search
                        </DialogTrigger>
                        <DialogContent className='h-full w-lvw items-center justify-center flex bg-transparent border-0'>
                            <div className='h-lvh w-lvw items-center justify-center flex '>
                                <TicketPopover />
                            </div>
                        </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
          </div>
        </div> 
      </div>
    )
}