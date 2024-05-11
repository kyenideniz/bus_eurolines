import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
    disabled?: boolean;
    type?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className,
    disabled,
    type
}) => {
    return ( 
        <button 
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center p-2 ", 
                className
            )}
        >
            {icon}
        </button>
     );
}
 
export default IconButton;