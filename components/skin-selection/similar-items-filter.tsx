import {SortPrice} from "../catalog/sort-price";
import {Tradeban} from "../catalog/tradeban";
import {PricePopup} from "../catalog/price-popup";
import {Float} from "./float";


export const SimilarItemsFilter = () => {
    return (
        <div className="flex justify-between w-full rounded-[25px] font-golos bg-[#1717178C] border-[1px] border-[#312E40] items-center p-4">
            <h4 className="text-[20px] font-golos font-semibold">Найдено 3 предложения</h4>
            <div className="flex items-center gap-8">
                <SortPrice />
                <Tradeban />
                <Float/>
                <PricePopup />
            </div>
        </div>
    );
};