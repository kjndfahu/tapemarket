import type {ProcessItem} from "../../types/types";

export const ProcessBlock = ({title, text, logo, index}:ProcessItem) => {
    return (
        <div className="flex flex-col h-[154px] rounded-[25px] border-[1px] border-[#312E40] bg-[#1717178C] backdrop-blur-2xl gap-3 px-6 py-[35px]">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center z-[2] text-black font-unbounded font-bold w-8 h-8 rounded-full bg-white">{index}</div>
                <div className="flex items-center justify-center z-[1] ml-[-23px] w-8 h-8 rounded-full bg-[#312E40]">
                    <img src={logo} alt="logo"/>
                </div>
                <h5 className="font-unbounded font-bold text-white text-[24px] leading-[27px]">{title}</h5>
            </div>
            <p className="text-[16px] text-[#FFFFFF99] w-[65%] leading-[20px]">{text}</p>
        </div>
    )
}