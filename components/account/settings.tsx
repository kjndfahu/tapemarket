export const Settings = () => {
    return (
        <div className="flex flex-col w-full gap-4">
            <h4 className="text-[24px] leading-[26px] font-unbounded font-bold">Настройки</h4>
            <div className="flex items-center rounded-[25px] gap-[14px] p-4 border-[1px] border-[#312E40] bg-[#1717178C]">
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <img src="/img/link.svg" alt="link"/>
                        <h6 className="text-[14px] text-white font-golos font-medium">Trade URL</h6>
                    </div>
                    <div className="flex items-center justify-center rounded-full bg-[#312E408C] font-golos font-medium text-[14px] text-[#FFFFFF99] leading-[14px] px-[14px] py-1.5">
                        Где взять?
                    </div>
                </div>
                <div
                    className="flex items-center justify-between gap-2 bg-[#1717178C] rounded-full border-[1px] border-[#312E40] h-[51px]">
                    <p className="font-golos font-medium ml-6 text-[#FFFFFF99] leading-[14px] text-[16px]">https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_acce...</p>
                    <button
                        className="flex items-center justify-center px-5 gap-2.5 text-[16px] leading-[16px] font-golos hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium h-[51px] bg-[#AFA3FD] rounded-full w-full">
                        Сохранить ссылку
                        <img src="/img/save-link.svg" alt="save-link"/>
                    </button>
                </div>
            </div>
        </div>
    )
}