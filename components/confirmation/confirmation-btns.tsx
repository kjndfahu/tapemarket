export const ConfirmationBtns = () => {
    return (
        <div className="flex flex-col items-center w-[311px] gap-1.5">
            <button
                className="z-[4] text-[16px] hover:scale-105 transition-all duration-200 cursor-pointer font-golos font-medium text-[#FFFFFF99] w-full h-[51px] rounded-full bg-[#312E40]">
                Оплатить 599₽
            </button>
            <div className="flex items-center gap-2">
                <div className="w-[135px] h-[1px] bg-[#FFFFFF99]"/>
                <p className="text-[14px] text-[#FFFFFF99] font-golos font-medium">или</p>
                <div className="w-[135px] h-[1px] bg-[#FFFFFF99]"/>
            </div>
            <button
                className="z-[4] text-[16px] hover:scale-105 transition-all duration-200 cursor-pointer font-golos font-medium text-[#1A1A1A] w-full h-[51px] rounded-full glow bg-[#AFA3FD]">
                Оплатить 599₽
            </button>
        </div>
    )
}