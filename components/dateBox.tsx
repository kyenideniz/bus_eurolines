import React from 'react';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Calendar, theme } from 'antd';
import { Button } from "@/components/ui/button"

interface DateSelectProps{
    name: String;
    day?: String;
    month?: String;
    year?: String;
    content?: any;
} 
const currentDay = new Date().toLocaleString("en-US", { day: "2-digit" })
const currentWD = new Date().toLocaleString("en-US", { weekday: "long" })
const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
const currentYear = new Date().toLocaleString("en-US", { year: "2-digit" })

const DateSelect: React.FC<DateSelectProps> = (props) => {
    const [day, setDay] = useState<String>(currentDay);
    const [WD, setWD] = useState<String>(currentWD);
    const [month, setMonth] = useState<String>(currentMonth);
    const [year, setYear] = useState<String>(currentYear);

    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='grid bg-gray-400 items-center justify-center grid-cols-1 font-thin m-4 h-28'>
                    <div className='text-center'>
                        {props.name}
                    </div>
                    <div className='flex m-1 items-center text-lg text-center jusity-center'>
                        <div className='border w-full'>
                            <div>{day} {month} {WD}</div>
                        </div>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="contain flex w-full">     
                <div style={wrapperStyle}>
                <Calendar 
                    fullscreen={false} 
                    onSelect={(value:Dayjs, { source }) => {
                    if (source === 'date') {
                        setDay(value.format('DD'));
                        setWD(value.format("dddd"));
                        setMonth(value.format("MMMM"));
                        setYear(value.format('YY'));
                    }
                    }}                   
                />
                </div>
            </PopoverContent>
        </Popover>
    );
};
  
export default DateSelect;