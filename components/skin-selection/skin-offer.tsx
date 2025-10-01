import {CatalogItem} from "../catalog/catalog-item";

export const SkinOffer = () => {
    return (
        <div className="flex flex-col gap-6">
            <h5 className="text-[24px] font-unbounded font-semibold text-white">Вам может понравится:</h5>
            <div className="flex items-center justify-between">
                {Array.from({length: 5}).map((_, index) => (
                    <CatalogItem rent={index < 7.5} key={index}/>
                ))}
            </div>
        </div>
    )
}