"use client"

import React from 'react';
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { format } from "date-fns"

import PickRoute from '@/components/pickRoute';
import IconButton from '@/components/ui/icon-button';

import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { User, CirclePlus, CircleMinus, ArrowRightLeft, Calendar as CalendarIcon } from "lucide-react"
import TicketPopover from '@/components/ticketPopover';
import { AspectRatio } from './ui/aspect-ratio';

export default function Billboard() {
  const [open, setOpen] = React.useState(false);
  
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const [mock, setMock] = React.useState("");
  const [mockTo, setMockTo] = React.useState("");

  const [dateFrom, setDateFrom] = React.useState<Date>()
  const [dateReturn, setDateReturn] = React.useState<Date>()

  const [adult, setAdult] = React.useState(0);
  const [child, setChild] = React.useState(0);
  const [infant, setInfant] = React.useState(0);

  const guestNum:Array<Number> = [adult,child,infant];
  const data:Array<any> = ["From: ",from, "To: ", to, "Date From: ", dateFrom, "Date Return: ", dateReturn, "Adult Number: ", adult,"Child Number: ", child,"Infant Number: ", infant];

  return(
    <div className='contain relative w-full'>
      <div className="grid bg-green-100  rounded-2xl mx-4 mt-4 border-green-100 ">
        <div className='w-full fill flex place-content-center items-center justify-center'>
          <Image 
            src="/buseurolines.png" 
            width={1080}
            height={1920}
            alt="logo"
            className="bg-contain max-w-6xl"
          />
        </div>
        <br></br>
        <div className='w-full flex items-center justify-center place-content-center '>
          <div className='items-center justify-center flex relative h-full w-full mx-8 '>
            <div className='grid grid-cols-6 bg-white w-full shadow-md absolute rounded-lg max-w-6xl items-center justify-center gap-8 place-content-center h-28'>
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
                  <Popover>
                    <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start hover:bg-transparent",
                          !dateFrom && "text-left text-lg text-blue-950"
                        )}
                      >
                        <CalendarIcon className="mr-1 h-5 w-5" />
                        {dateFrom ? format(dateFrom, "PPP") : <span>Depart Date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" side="bottom" align="start">
                      <Calendar
                        mode="single"
                        selected={dateFrom}
                        onSelect={setDateFrom}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {/* Pick Return Date */}
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                  <Popover>
                    <PopoverTrigger className="text-left text-lg text-blue-950" asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start hover:bg-transparent",
                          !dateReturn && "text-left text-lg text-blue-950"
                        )}
                      >
                        <CalendarIcon className="mr-1 h-5 w-5" />
                        {dateReturn ? format(dateReturn, "PPP") : <span>Return date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" side="bottom" align="start">
                      <Calendar
                        mode="single"
                        selected={dateReturn}
                        onSelect={setDateReturn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              {/* Pick Travellers */}
              <div className='border-b-2 border-blue-950 w-full m-4 hover:opacity-80'>
                <Popover open={open} onOpenChange={setOpen} >
                  <PopoverTrigger className="w-full hover:opacity-80" asChild >
                    <Button variant="outline" className="w-full text-lg text-blue-950 text-left flex items-start justify-start bottom-1/3 hover:bg-transparent">
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
                            }else if (adult>0 ||  child>0 || infant>0) {  
                              return (
                                <>
                                    <User className="flex items-start justify-start col-span-1 text-lg"/>
                                    <div className="text-lg">
                                        {adult>0 ? ( <>{adult}&nbsp; Adult,&nbsp;</> ):(<></>)}{child>0 ? ( <>{child}&nbsp;Child,&nbsp;</> ):(<></>)}{infant>0 ? ( <>{infant}&nbsp;Infant</> ):(<></>)}
                                    </div>
                                </>
                              )
                              }else {
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
                                      guestNum[0] = adult
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
                                      guestNum[0] = adult
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
                                        guestNum[1] = child
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
                                    guestNum[1] = child
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
                                        guestNum[2] = infant
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
                                    guestNum[2] = infant
                                    setOpen(true)
                                }}
                            />
                        </div> 
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
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
    <br></br><br></br><br></br><br></br>
  </div>
  )
}

function dayjs(): Date | (() => Date) {
  throw new Error('Function not implemented.');
}
