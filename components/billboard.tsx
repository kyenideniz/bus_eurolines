"use client"

import Image from 'next/image'
import { DateSelect } from '@/components/dateBox';
import { Button } from '@/components/ui/button';
import PassangerBox from '@/components/passangerBox';
import { PickRoute } from '@/components/pickRoute';

const test:any = [
    {
      value: 'dusseldorf',
      label: 'Dusseldorf',
    },
    {
      value: 'amsterdam',
      label: 'Amsterdam',
    },
    {
      value: 'enschede',
      label: 'Enschede',
    },
  ]
export default function Billboard() {

    return(
        <div className='contain relative'>
        <div className="grid items-center justify-center bg-green-100 h-full shadow-sm rounded-2xl mx-4 mt-4 border-green-100">
            {/*<div className="pt-5 left-0 top-0 absolute">
                <Navbar />
    </div>*/}
        
            <div className='w-full fill'>
                <Image 
                    src="/buseurolines.png" 
                    width={1080}
                    height={1920}
                    alt="logo"
                    className="bg-contain"
                />
                </div>
            <br></br>
            <div className='items-center justify-center flex mx-auto px-4 relative h-full w-full '>
                <div className='grid grid-cols-6 bg-white mx-auto shadow-md absolute rounded-lg items-center justify-center'>
                    <PickRoute />
                    <PickRoute />
                    <DateSelect />
                    <DateSelect />
                    <PassangerBox />
                    <Button className='bg-gray-400 h-28 font-thin m-4 '>Search</Button>
                </div>
            </div> 
        </div>
        <br></br><br></br><br></br><br></br>
        </div>
    )
}