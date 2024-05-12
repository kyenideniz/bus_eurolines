"use client"

import Image from 'next/image'
import DateSelect from '@/components/dateBox';
import { Button } from '@/components/ui/button';
import PassangerBox from '@/components/passangerBox';
import { PickRoute } from '@/components/pickRoute';
import { ArrowRightLeft, Calendar } from 'lucide-react'
import IconButton from '@/components/ui/icon-button';

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
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                  <PickRoute />
                </div>
                <IconButton icon={<ArrowRightLeft/>}  className='inline-block'/>
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                  <PickRoute />
                </div>
              </div>

              <div className='col-span-2 grid-cols-4 grid mx-4 w-full h-full items-center justify-items-center gap-4'>
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                  <DateSelect placeholder={"Departure Date"}/>
                </div>
                <div className='col-span-2 border-b-2 border-blue-950 mx-4 items-start justify-items-start place-content-start w-full hover:opacity-80'>
                  <DateSelect placeholder={"Return Date"}/>
                </div>
              </div>

              <div className='border-b-2 border-blue-950 w-full m-4 hover:opacity-80'>
                <PassangerBox />
              </div>
              <div className='grid grid-cols-4'>
                <div className=''></div>
                <div className='col-span-3 w-full h-28 items-center justify-center flex hover:bg-gray-100 hover:opacity-80 rounded-r-lg '>
                    <Button variant={"outline"} className='w-full h-full text-blue-950 text-lg border-l-2 border-dashed rounded-none bg-transparent hover:bg-transparent'>Search</Button>
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