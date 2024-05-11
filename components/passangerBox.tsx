import { FaPlus, FaMinus } from "react-icons/fa";
import IconButton from "./ui/icon-button";
import { useState } from "react";

const PassangerNum: React.FC= (props) => {
    const [num, setNum] = useState(1);

    return (
        <div className='grid bg-gray-400 place-content-center justify-center grid-cols-3 font-thin m-4 h-28 hover:bg-gray-500'>
            <div className='items-center'>
                <IconButton icon={<FaMinus />} onClick={() => setNum(num - 1)}  />
            </div>
            
            <div className='text-center '>
                <div>{num} Adults</div>
            </div>
            <div className='items-center'>
                <IconButton icon={<FaPlus />} onClick={() => setNum(num + 1)}/>
            </div>
         
        </div>
    );
};
  
export default PassangerNum;