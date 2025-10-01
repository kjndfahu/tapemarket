export const CatalogItem = ({ rent }: { rent: boolean }) => {
    return (
        <div className="flex flex-col font-golos justify-between w-[240px] h-[325px] rounded-[18px] border-[1px] border-[#312E40] overflow-hidden">
            <div className="flex flex-col items-center px-3 py-[11px] rounded-t-[18px] bg-[#1717178C]">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center py-1.5 px-3.5 bg-[#1717178C] border-[1px] border-[#AFA3FD] rounded-[18px]">
                        399₽
                    </div>
                    <p className="text-[16px] text-[#FFFFFF99]">за 7 дней</p>
                </div>
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-[1] rounded-full w-[198px] h-[198px] blur-2xl bg-[#1E2A3C]/50" />
                    <img
                        className="relative w-[198px] h-[198px] object-cover z-[2]"
                        src="/img/mac.png"
                        alt="mac"
                    />
                </div>
                <h6 className="font-golos text-[#FFFBFF] text-[18px] whitespace-normal w-full">
                    MAC-10 | Neon Rider <span className="text-[14px]">(FN)</span>
                </h6>
            </div>
            <button
                className={`flex items-center border-[1px] border-[#312E40] h-[43px] font-golos font-medium text-[16px] gap-2 px-4 py-3 ${
                    rent ? 'bg-[#B7000324] text-[#FFFFFF99]' : 'bg-[#AFA3FD] text-[#1A1A1A]'
                } rounded-b-[18px]`}
            >
                {rent ? (
                    <img src="/img/gray-card.svg" alt="gray-card" />
                ) : (
                    <img src="/img/black-card.svg" alt="black-card" />
                )}
                Арендовать
            </button>
        </div>
    );
};