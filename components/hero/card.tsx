export const Card = ({rotate}: {rotate?: string}) => {
    return (
        <div
            className={`flex flex-col z-[1] ${rotate} relative card-bg border-[1px] border-white w-[395px] h-[477px] gap-7 p-3.5 rounded-[14px]`}>
            <div className="w-full bg-white z-[5] h-[282px] rounded-[9px]"></div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-3.5 px-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[20px] font-unbounded leading-7 text-black">AWP Gungnir</h4>
                        <p className="text-[18px] leadig-[28px] text-[#000000B2]">450₽</p>
                        <div className="flex flex-row">
                            <div className="py-[5px] border-[1px] cursor-pointer border-[#0000001A] px-[17px] rounded-l-full">
                                <img className="rotate-180" src="/img/right-arrow.svg" alt="arrow"/>
                            </div>
                            <div className="py-[5px] border-[1px] cursor-pointer border-[#0000001A] px-[17px] rounded-r-full">
                                <img src="/img/right-arrow.svg" alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] line"></div>
                </div>
            </div>
            <button
                className="flex items-center justify-center border-[1px] border-white gap-2 cursor-pointer text-[18px] font-clash font-medium leading-7 text-black card-bg rounded-[11px] w-[260px] h-[46px]">
                Добавить в корзину
                <img src="/img/arrow-black.svg" alt="arrow"/>
            </button>

            <div
                className="absolute z-[4] left-[-10px] top-[-10px] blur-[70px] w-[280px] faq-glow rounded-full h-[322px]"/>
        </div>
    )
}