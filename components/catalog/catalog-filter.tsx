import { SortPrice } from "./sort-price";
import { Tradeban } from "./tradeban";
import { PricePopup } from "./price-popup";
import { Popup } from "./popup";

export const CatalogFilter = () => {
    return (
        <div className="flex justify-between w-full rounded-[25px] font-golos bg-[#1717178C] border-[1px] border-[#312E40] items-center p-2">
            <div className="flex items-center px-3 py-2 border-[1px] border-[#312E40] rounded-[17px] bg-[#111111]">
                <input
                    placeholder="Поиск по названию"
                    className="text-[16px] text-white bg-transparent font-golos outline-0 ring-0 w-[200px]"
                    type="text"
                />
                <img src="/img/search-gray.svg" alt="search" className="ml-2" />
            </div>
            <Popup text="Нож" />
            <Popup text="Снайперская винтовка" />
            <Popup text="Перчатки" />
            <SortPrice />
            <Tradeban />
            <PricePopup />
        </div>
    );
};