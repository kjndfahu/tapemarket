import { Cases } from "../../components/cases/cases";
import { CatalogFilter } from "../../components/catalog/catalog-filter";
import { CatalogItem } from "../../components/catalog/catalog-item";

export default function Catalog() {
    return (
        <div className="flex flex-col w-full mt-[67px] gap-20">
            <Cases />
            <div className="flex flex-col gap-6">
                <CatalogFilter />
                <div className="grid grid-cols-5 gap-5 relative">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <CatalogItem rent={index < 7.5} key={index} />
                    ))}
                    <div className="absolute rounded-[18px] z-[3] h-[325px] custom-blur bottom-0 bg-black/20 w-full flex justify-center items-center">
                        <button className="text-[16px] hover:scale-105 transition-all duration-200 z-[2] rounded-full glow font-medium text-[#1a1a1a] bg-[#AFA3FD] w-[184px] h-[51px] shadow-lg">
                            Загрузить еще
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}