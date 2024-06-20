"use client"

import React, { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { Route } from "@/types";
import getRoutes from "@/actions/get-routes";
import qs from 'query-string';

type flightInfo = {
    id: Number,
    price: String,
    departTime: String,
    landTime: String,
    duration: String
}

interface Query {
    day?: string;
    startCityId?: string;
    endCityId?: string;
    stopsId?: string[];
    price?: number;
}

export function TicketDayTabs(
    {
        from, fromName, to, toName, dateFrom
    }:{
        from: string, 
        fromName: string | undefined, 
        to: string, 
        toName: string | undefined, 
        dateFrom: Date | string | number 
    }){

    const [num, setNum]  = React.useState(0);

    const [routes, setRoutes] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchRoutes = async (query: Query = {}) => {
        const url = qs.stringifyUrl({
          url: '/api/routes',
          query: {
            day: query.day,
            startCityId: query.startCityId,
            endCityId: query.endCityId,
            stopsId: query.stopsId,
            price: query.price,
          }
        });
    
        //console.log('Fetching URL:', url);
        const res = await fetch(url);
    
        if (!res.ok) {
          const errorText = await res.text();
          //console.log('Fetch error:', errorText);
          throw new Error(errorText);
        }
    
        const data = await res.json();
        //console.log('Fetch successful:', data);
        return data;
      }
    
      useEffect(() => {
        const query: Query = {
          startCityId: from,
          endCityId: to,
          //day: dateFrom ? dateFrom.toString() : undefined,
        };
    
        fetchRoutes(query)
          .then((data) => {
            setRoutes(data);
          })
          .catch((error) => {
            setError(error.message);
          });
    }, [from, to, dateFrom]);
    
    function getNextDays(dayCount:number) {
        const days = [];
        let day = new Date(dateFrom);

        for (let i = 0; i < dayCount; i++) {
            days.push(new Date(day));
            day.setDate(day.getDate() + 1);
        }

        //fetchRoutes();
        return days;
    }

    return (
        <div className="w-full py-6 h-full relative bg-zinc-50 rounded-lg shadow-md ">
            <div className="w-full px-4 h-fit p-4">
                <div className="text-xl text-blue-950 font-semibold px-8 py-4 relative h-fit">
                    <span className="px-4 inline-block">{fromName}</span>
                    <ArrowRight className="inline-block text-amber-400" />
                    <span className="px-4 inline-block">{toName}</span>
                </div>
                <Tabs defaultValue="0" className="w-full px-12">
                <div className='items-center justify-center flex w-full'>
                    <div className='border h-24 bg-white rounded-2xl w-full grid grid-cols-4 px-2'>
                    {getNextDays(4).map((date, index) => (
                        <TabsList className="w-full h-full" key={index}>
                            <TabsTrigger value={index.toString()} onClick={() => (setNum(index))} className='p-4 data-[state=active]:text-amber-400 data-[state=active]:border-b-amber-400 data-[state=active]:border-b'>         
                            <div className=''>{format(date, "PPP")}</div>
                            </TabsTrigger>
                        </TabsList>
                    ))}
                    </div>
                    </div>
                    <div className='w-full items-center jusitfy-center py-8 text-lg '>
                    <div className='font-medium w-4/5 h-full inline-block'>
                        {routes.length}
                    </div>
                    
                    </div>
                    <TabsContent value={num.toString()} className="w-full h-full col-span-4">
                    <div> 
                        {routes.map((route: Route, index: number) => (
                        <div className='w-full h-full pb-4' key={route.id?.toString() || index.toString()}>
                        <div className='bg-white rounded-3xl h-56 grid grid-cols-6 w-full'>
                            <div className='col-span-2 rounded-3xl h-full w-full p-4 items-center justify-center flex'>
                                <div className='px-2 grid grid-rows-3 h-full w-full relative'>
                                
                                <div className=' h-full'>
                                    <div className='top-0 py-2 absolute'>
                                    Lowest Fare
                                    </div>
                                </div>

                                <div className='grid grid-cols-10 h-full w-full py-2 relative items-center justify-center text-2xl font-light'>
                                    <div className='col-start-1 col-span-2 w-full absolute left-0'>{format(route.day, "HH:mm")}</div>
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
        </div>
    )
}
