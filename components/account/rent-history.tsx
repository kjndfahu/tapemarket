import {RentSkinBlock} from "./rent-skin-block";

export const RentHistory = () => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-[24px] leading-[26px] font-unbounded font-bold">История аренд</h4>
            <div className="grid grid-cols-4 relative gap-4">
                <RentSkinBlock/>
                <RentSkinBlock/>
                <RentSkinBlock/>
                <RentSkinBlock/>

                <div className="absolute bg-[#1717178C] w-[50px] h-[370px] right-0"/>
            </div>
        </div>
    )
}