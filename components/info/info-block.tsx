import type {InfoItem} from "../../types/types";

export const InfoBlock = ({title, text, img}: InfoItem) => {
    return (
        <div className="relative w-full rounded-[25px] overflow-hidden">
            <img className="w-full h-full object-cover" src={img} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-[#191B1E]/60 p-6">
                <h3 className="text-[80px] text-white font-unbounded font-semibold">{title}</h3>
                <p className="text-[20px] text-[#FFFFFF99] font-golos leading-[24px]">{text}</p>
            </div>
        </div>
    )
}