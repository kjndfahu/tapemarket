import {Rating} from "./rating";
import {TopUp} from "./top-up";

export const AccountInfo = () => {
    return (
        <div className="flex flex-col w-[269px] gap-4">
            <div className="flex items-center relative overflow-hidden gap-4 bg-[#1717178C] rounded-[25px] border-[1px] border-[#312E40] px-6 py-4 h-[82px]">
                <div className="h-[50px] z-[2] rounded-full bg-white w-[50px]"/>
                <div className="flex flex-col z-[2]">
                    <h6 className="text-[16px] leading-[16px] text-white font-medium font-golos">YourName</h6>
                    <p className="font-golos text-[#FFFFFF99] leading-[14px] text-[14px]">Уровень: Легенда</p>
                </div>
                <div className="absolute rotate-[60deg] top-[1px] left-[-80px] z-[1] bg-[#AFA3FD] glow w-[117px] h-[142px]"/>
            </div>
            <TopUp/>
            <Rating/>
        </div>
    )
}