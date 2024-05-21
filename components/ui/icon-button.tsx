import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes, MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
    disabled?: boolean;
    type?: string;
    style?: CSSProperties | undefined;
}
const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className,
    disabled,
    type,
    style,
}) => {
    return ( 
        <button 
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center p-2 ", 
                className
            )}
            style={style}
        >
            {icon}
        </button>
     );
}
 
export default IconButton;