import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { User, CirclePlus, CircleMinus } from "lucide-react"

import IconButton from "@/components/ui/icon-button";
import { Button } from "@/components/ui/button"
import { useState } from "react";

const PassangerNum: React.FC= () => {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState< Number>(0)
    
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full hover:opacity-80" asChild>
            <Button
                variant="outline"
                className="w-full text-lg text-blue-950 text-left flex items-start justify-start bottom-1/3 hover:bg-transparent"
            >
                <div className="">
                    <div className=" items-center justify-center flex">
                        {(() => {
                            if (adult>0 && child>0 && infant>0) {
                                return (
                                    <>
                                        <User className="flex items-start justify-start text-lg mb-1.5 pr-1"/>
                                        <div className="text-sm">{adult} Adult, {child} Child, {infant} Infant</div>
                                    </>
                                )
                            } else if (adult>0 ||  child>0 || infant>0) {
                                return (
                                    <>
                                        <User className="flex items-start justify-start col-span-1 text-lg"/>
                                        <div className="text-lg">
                                            {adult>0 ? ( <>{adult}&nbsp; Adult,&nbsp;</> ):(<></>)}{child>0 ? ( <>{child}&nbsp;Child,&nbsp;</> ):(<></>)}{infant>0 ? ( <>{infant}&nbsp;Infant</> ):(<></>)}
                                        </div>
                                    </>
                                    )
                            } else {
                                return (
                                    <>
                                        <User className="flex items-start justify-start col-span-1 text-lg"/>
                                        Guests
                                    </>
                                )
                            }
                            })()}
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
                                        //if else yap aq
                                        if(adult>0){
                                            setAdult(adult - 1)
                                            setOpen(true)
                                        }
                                    }} 
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {adult}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        setAdult(adult + 1),
                                        setOpen(true)  
                                        
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
                                        if(child>0){
                                            setChild(child - 1)
                                            setOpen(true)
                                        }
                                    }}  
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {child}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        setChild(child + 1)
                                        setOpen(true)
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
                                        if(infant>0){
                                            setInfant(infant - 1)
                                            setOpen(true)
                                        }
                                    }}
                                />
                            </div>
                            <div className="place-content-center my-auto flex w-full">
                                {infant}
                            </div>
                            <div className='items-center justify-center flex w-full hover:opacity-80'>
                                <IconButton 
                                    icon={<CirclePlus />} 
                                    onClick={() => {
                                        setInfant(infant + 1)
                                        setOpen(true)
                                    }}
                                />
                            </div> 
                        </div>
                    </div>
            </PopoverContent>
        </Popover>
    );
};
  
export default PassangerNum;