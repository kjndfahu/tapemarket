import type {FaqItem} from "../../types/types";
import {useState} from "react";

export const FaqBlock = ({title, text, className = ""}: FaqItem & {className?: string}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <div onClick={() => setIsClicked(!isClicked)} className={`flex flex-col cursor-pointer duration-200 transition-all bg-[#1B1B1B] gap-7 p-7 ${className}`}>
            <div className="flex flex-row items-center justify-between">
                <h3 className={`font-golos font-medium text-[24px] duration-200 transition-all ${isClicked ? 'text-[#FFFFFF]' : 'text-[#FFFFFF99]'} leading-[26px]`}>{title}</h3>
                <img className={`${isClicked && ('-rotate-90 duration-200 transition-all')}`} src="/img/arrow.svg" alt="arrow"/>
            </div>
            {isClicked && (
                <p className="text-[20px] font-golos leading-[24px] text-[#FFFFFF99]">{text}</p>
            )}
        </div>
    )
}