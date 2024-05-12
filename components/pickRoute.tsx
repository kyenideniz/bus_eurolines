"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Country = {
  value: string
  label: string
}

const countries: Country[] = [
  {
    value: "nice",
    label: "Nice",
  },
  {
    value: "brussels",
    label: "Brussels",
  },
  {
    value: "dusseldorf",
    label: "Dusseldorf",
  },
  {
    value: "paris",
    label: "Paris",
  },
  {
    value: "madrid",
    label: "Madrid",
  },
]

interface PickRouteProps {
  placeholder: String;
}

const PickRoute:React.FC<PickRouteProps> = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    
      <Select open={open} onOpenChange={setOpen}>
        <SelectTrigger className="w-full border-0 py-0.5 items-start justify-start flex text-lg text-blue-950">
          <SelectValue placeholder={props.placeholder}/>
        </SelectTrigger>
        <SelectContent className="p-0" side="bottom" align="start" >
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.label} className="w-full hover:bg-gray-100 rounded-lg text-lg text-blue-950">
              <div >{country.label}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  )
}

export default PickRoute;