"use client"

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';
import React from 'react';
import { dataArray } from '@/components/buyComponents/dayTab';
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlightSearchResults = () => {
  const [num, setNum]  = React.useState(0);

  function getNextDays(dayCount:number) {
    const days = [];
    let day = new Date();

    for (let i = 0; i < dayCount; i++) {
        days.push(new Date(day));
        day.setDate(day.getDate() + 1);
    }

    return days;
  }

  return (
    <div className='grid grid-cols-1 w-full h-full items-center justify-center bg-gray-200'>
      <div className='items-center justify-center flex w-full py-6 h-full'>
          <div className='max-w-2xl rounded-full border w-full h-full py-1 px-4 bg-white'>
              <div className='px-3 py-1 grid grid-cols-4 text-[16px] w-full items-center justify-center font-sans'>
                  <div className='border-r pr-2 py-1 font-thin'>ADB - ADA</div>
                  <div className='border-r pr-2 py-1 font-thin'>Sun, 9 Jun-Tue, 18 Jun</div>
                  <div className='border-r pr-2 py-1'>1 passenger</div>
                  <div className='pr-2 py-1'>Modiify Search</div>
              </div>
          </div>
      </div>
      
    
        <div className='h-full w-full'>
          <div className='p-12 w-full grid grid-rows-2 text-6xl font-extralight'>
              
              <div>
                Select your departure ticket
              </div>
              <div>
                <div className='inline-block'>from&nbsp;</div>
                <div className='inline-block text-amber-400'>Izmir&nbsp;</div>
                <div className='inline-block'>to&nbsp;</div>
                <div className='inline-block text-amber-400'>Izmir</div>
              </div>
            
          </div>
        </div>
  

      <Tabs defaultValue="0" className="w-full px-12">
        <div className='items-center justify-center flex w-full'>
          <div className='border h-24 bg-white rounded-2xl w-full grid grid-cols-7 px-2'>
          {getNextDays(7).map((date, index) => (
            <TabsList className="w-full h-full ">
                <TabsTrigger value={index.toString()} onClick={() => (setNum(index))} className='p-4 data-[state=active]:text-amber-400 data-[state=active]:border-b-amber-400 data-[state=active]:border-b'>         
                  <div className=''>{format(date, "PPP")}</div>
                </TabsTrigger>
            </TabsList>
          ))}
          </div>
        </div>
        <div className='w-full items-center jusitfy-center py-8 text-lg '>
          <div className='font-medium w-4/5 h-full inline-block'>
            8 results
          </div>
          
        </div>
        <TabsContent value={num.toString()} className="w-full h-full col-span-4">
          <div className="" key={dataArray[num].id.toString()}> 
            {dataArray[num].flights.map((flight) => (
            <div className='w-full h-full pb-4'>
              <div className='bg-white rounded-3xl h-56 grid grid-cols-6 w-full'>
                <div className='col-span-2 rounded-3xl h-full w-full p-4 items-center justify-center flex'>
                    <div className='px-2 grid grid-rows-3 h-full w-full relative'>
                      
                      <div className=' h-full'>
                        <div className='top-0 py-2 absolute'>
                          Lowest Fare
                        </div>
                      </div>

                      <div className='grid grid-cols-10 h-full w-full py-2 relative items-center justify-center text-2xl font-light'>
                        <div className='col-start-1 col-span-2 w-full absolute left-0'>17.40</div>
                        <div className='col-start-3 col-span-5 h-full w-full items-center justify-center flex'>-----</div>
                        <div className='col-start-8 col-span-3 w-full absolute right-0'>12.40</div>
                      </div>

                      <div className='h-full'>
                        <div className='absolute bottom-0 py-2'>
                        <Drawer direction="right">
                          <DrawerTrigger>Flight Information</DrawerTrigger>
                          <DrawerContent className="h-full w-1/3 p-8">
                          <div>
                            <div className="h-1/8 w-full items-center justify-center flex relative ">
                              <div className="inline-block font-[400] text-lg h-full">
                                Travel Details 
                              </div>
                              <DrawerClose className="inline-block absolute right-0 h-full">
                                <Button variant="outline" className="font-thin text-lg aspect-square h-full hover:bg-transparent">X</Button>
                              </DrawerClose>
                              
                              </div>
                          </div>
                          </DrawerContent>
                        </Drawer>
                        </div>
                      </div>

                    </div>
                </div>
                <div className='col-span-1 rounded-3xl py-4'>
                    
                </div>
                <div className='col-span-3 rounded-3xl p-8 h-full w-full'>
                  <div className='h-full w-full grid grid-cols-2 gap-8'>
                
                    <div className='h-full w-full border-2 p-4 rounded-3xl grid grid-rows-3'>
                      <div className='h-full w-full row-start-1 relative items-center jusitfy-center flex'>
                        <div className='a'>aaa</div>
                      </div>
                      <div className='h-full w-full row-start-2 text-2xl relative items-center jusitfy-center flex'>
                        <div className='a'>200 EUR</div>
                      </div>
                      <div className='h-full w-full row-start-3 relative items-center jusitfy-center flex'>
                        <div className='a'>aaa</div>
                      </div>
                    </div> 

                    <div className='h-full w-full border-2 p-4 rounded-3xl grid grid-rows-3'>
                      <div className='h-full w-full row-start-1 relative items-center jusitfy-center flex'>
                        <div className='a'>aaa</div>
                      </div>
                      <div className='h-full w-full row-start-2 relative items-center jusitfy-center flex'>
                        <div className='a'>200 EUR</div>
                      </div>
                      <div className='h-full w-full row-start-3 relative items-center jusitfy-center flex'>
                        <div className='a'>aaa</div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
      </TabsContent>
    </Tabs>
  </div>
  );
};

export default FlightSearchResults;
