"use client"

import React from 'react';

import { User, CirclePlus, CircleMinus, Calendar as CalendarIcon } from "lucide-react"

import { Button } from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface TravellerPopoverInterface {
    adult: number, 
    child: number, 
    infant: number,
    onAdultChange: any, 
    onChildChange: any, 
    onInfantChange: any
}
export default function TravellerPopover(props: TravellerPopoverInterface) {
    const [open, setOpen] = React.useState(false);

    const renderGuestSummary = () => {
        if (props.adult > 0 && props.child > 0 && props.infant > 0) {
            return (
                <div className='text-sm'>
                {`${props.adult} Adult${props.adult > 1 ? 's' : ''}, ${props.child} Child${props.child > 1 ? 'ren' : ''}, ${props.infant} Infant${props.infant > 1 ? 's' : ''}`}
                </div>
            );
        }
        if ((props.adult > 0 && props.child > 0) || (props.adult > 0 && props.infant > 0) || (props.child > 0 && props.infant > 0)) {
            return `${props.adult > 0 ? `${props.adult} Adult${props.adult > 1 ? 's' : ''}, ` : ''}${props.child > 0 ? `${props.child} Child${props.child > 1 ? 'ren' : ''}, ` : ''}${props.infant > 0 ? `${props.infant} Infant${props.infant > 1 ? 's' : ''}` : ''}`;
        }
        if (props.adult > 0 || props.child > 0 || props.infant > 0) {
            return (
                `${props.adult > 0 ? `${props.adult} Adult${props.adult > 1 ? 's' : ''}` : ''}${props.child > 0 ? `, ${props.child} Child${props.child > 1 ? 'ren' : ''}` : ''}${props.infant > 0 ? `, ${props.infant} Infant${props.infant > 1 ? 's' : ''}` : ''}`
            );
        }
        return 'Guests';
    };

    return(
        <div className='border-b-2 border-blue-950 w-full m-4 hover:opacity-80'>
            <Popover open={open} onOpenChange={setOpen} >
                <PopoverTrigger className="w-full hover:opacity-80" asChild >
                    <Button variant="outline" className="w-full text-lg text-blue-950 text-left flex items-start justify-start bottom-1/3 hover:bg-transparent">
                        <div className="">
                            <div className=" items-center justify-center flex">
                                <User className="flex items-start justify-start text-lg mb-1.5 pr-1" />
                                {renderGuestSummary()}
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="start">
                    <div className='grid place-content-center justify-center grid-cols-6 w-full h-full'>
                        <div className='items-start justify-start my-auto flex col-span-4'>
                            <div className="">Adult</div>
                        </div>
                        <div className="grid grid-cols-3 col-span-2">
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CircleMinus />} 
                                    onClick={() => {
                                        if (props.adult > 0) {
                                            props.onAdultChange(props.adult - 1);
                                            setOpen(true);
                                        }
                                    }}
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {props.adult}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        props.onAdultChange(props.adult + 1);
                                        setOpen(true);
                                    }} 
                                />
                            </div> 
                        </div>
                    </div>
                    <div className='grid place-content-center justify-center grid-cols-6 w-full h-full'>
                        <div className='items-start justify-start my-auto flex col-span-4'>
                            <div className="">Child (2-12 age)</div>
                        </div>
                        <div className="grid grid-cols-3 col-span-2">
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CircleMinus />} 
                                    onClick={() => {
                                        if (props.child > 0) {
                                            props.onChildChange(props.child - 1);
                                            setOpen(true);
                                        }
                                    }} 
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {props.child}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        props.onChildChange(props.child + 1);
                                        setOpen(true);
                                    }}
                                />
                            </div> 
                        </div>
                    </div>
                    <div className='grid place-content-center justify-center grid-cols-6 w-full h-full'>
                        <div className='items-start justify-start my-auto flex col-span-4'>
                            <div className="">Infant (0-2 age)</div>
                        </div>
                        <div className="grid grid-cols-3 col-span-2">
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CircleMinus />} 
                                    onClick={() => {
                                        if (props.infant > 0) {
                                            props.onInfantChange(props.infant - 1);
                                            setOpen(true);
                                        }
                                    }}
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {props.infant}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        props.onInfantChange(props.infant + 1);
                                        setOpen(true);
                                    }}
                                />
                            </div> 
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}