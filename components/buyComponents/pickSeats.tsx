"use client"

import React from "react"

import { ArrowRight, CircleChevronRight } from "lucide-react"

export function PickSeats() {

  return (
    <div className="w-full py-6 h-full relative bg-zinc-50 rounded-lg shadow-md ">
        <div className="w-full px-4 h-fit p-4">
            <div className="text-xl text-blue-950 font-semibold px-8 py-4 relative h-fit">
                <span className="px-4 inline-block">İzmir</span>
                <ArrowRight className="inline-block text-amber-400" />
                <span className="px-4 inline-block">İstanbul</span>
            </div>
        <div className="w-full h-full p-4 px-12 text-base text-blue-950">
            <div className="grid-cols-4 grid py-4">
                <div className="col-start-1">Depart Date: 24 May, 2024</div>
                <div className="col-start-2">Depart Time: 10.30 A.M.</div>
            </div>
            <div className="py-4 bg-slate-200 rounded-lg h-full">
                
            </div>
        </div>  
        </div>
    </div>
  )
}
