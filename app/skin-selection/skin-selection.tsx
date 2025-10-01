import {SimilarItems} from "../../components/skin-selection/similar-items";
import {SkinOffer} from "../../components/skin-selection/skin-offer";

export default function SkinSelection() {
    return (
        <div className="flex flex-col gap-[44px] mt-[72px]">
            <SimilarItems/>
            <SkinOffer/>
        </div>
    )
}