import {SimilarItemsFilter} from "./similar-items-filter";

export const SimilarItems = () => {
    return (
        <div className="flex flex-col gap-[27px]">
            <h3 className="text-[24px] text-white font-bold font-unbounded">Такие же предметы для аренды:</h3>
            <SimilarItemsFilter />
        </div>
    )
}