import {RefLink} from "./ref-link";
import {RentProcent} from "./rent-procent";
import {RefCount} from "./ref-count";
import {TotalEarned} from "./total-earned";
import {WithdrawBtn} from "./withdraw-btn";

export const RefSystem = () => {
    return (
        <div className="flex flex-col gap-4 w-[269px]">
            <h4 className="text-[24px] leading-[26px] font-unbounded font-bold">Реферальная система</h4>
            <div className="flex flex-col gap-2.5 p-4 rounded-[25px] border-[1px] border-[#312E40] bg-[#1717178C]">
                <RentProcent/>
                <RefLink/>
                <div
                    className="flex flex-col gap-1 py-4 px-6 rounded-[25px] border-[1px] border-[#312E40] w-full h-[70px]">
                    <h6 className="text-[14px] leading-[14px] text-white font-golos">Ваш баланс:</h6>
                    <p className="text-[14px] leading-[14px] font-medium text-[#FFFFFF99] font-golos">567,23 ₽</p>
                </div>
                <RefCount/>
                <TotalEarned/>
                <WithdrawBtn/>
            </div>

        </div>
    )
}