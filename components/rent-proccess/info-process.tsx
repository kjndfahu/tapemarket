import type {InfoProcessItem} from "../../types/types";

export const InfoProcess = ({title, text}:InfoProcessItem) => {
    return (
        <div className="flex gap-6">
            <div style={{aspectRatio: 1/1}} className="flex items-center justify-center w-10 h-10 rounded-full bg-purple">
                <div className="w-1 h-1 rounded-full bg-[#AFA3FD] border-[12px] border-[#111111]"></div>
            </div>
            <div className="flex flex-col gap-3">
                <h5 className="text-[24px] leading-[28px] font-medium font-unbounded text-white">{title}</h5>
                <p className="text-[16px] leading-[19px] text-[#FFFFFF99]">{text}</p>
            </div>
        </div>
    )
}