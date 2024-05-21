const SummaryCard = () => {
    return(
        <div className="h-full w-full bg-gray-100 p-4 rounded-lg grid grid-rows-5 text-base font-thin text-blue-950">
            <div className="h-full w-full grid grid-cols-2">
                <div className="h-full w-full items-start justify-start flex">
                    From
                </div>
                <div className="h-full w-full items-start justify-start flex">
                    : İzmir
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Departure Date
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                        : 24 May, 2024
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <div className="h-full w-full grid grid-cols-2">
                    <div className="h-full w-full items-start justify-start flex">
                        Departure Time
                    </div>
                    <div className="h-full w-full items-start justify-start flex">
                        : 10.30 A.M.
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
            <div className="h-full w-full grid grid-cols-2">
                <div className="h-full w-full items-start justify-start flex">
                    Passangers
                </div>
                <div className="h-full w-full items-start justify-start flex">
                    : 1 Adult, 2 Child
                </div>
            </div>
            </div>
            <div className="h-full w-full">
            <div className="h-full w-full grid grid-cols-2">
                <div className="h-full w-full items-start justify-start flex">
                    Seats
                </div>
                <div className="h-full w-full items-start justify-start flex">
                    : G1, G2, G3
                </div>
            </div>
            </div>
        </div>
    )
}

export default SummaryCard;