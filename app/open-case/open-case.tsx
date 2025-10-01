import {Offers} from "../../components/open-case/offers";
import {CaseSkins} from "../../components/open-case/case-skins";
import {CaseBanner} from "../../components/open-case/case-banner";

export default function OpenCase(){
    return (
        <div className="flex flex-col gap-[35px] mt-[72px]">
            <CaseBanner/>
            <CaseSkins/>
            <Offers/>
        </div>
    )
}