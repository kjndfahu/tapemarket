import {RentSkinBlock} from "./rent-skin-block";

export const RentHistory = () => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-[24px] leading-[26px] font-unbounded font-bold">История аренд</h4>
            <div className="grid grid-cols-4 gap-4">
                <RentSkinBlock/>
                <RentSkinBlock/>
                <RentSkinBlock/>
                <RentSkinBlock/>
            </div>
        </div>
    )
}