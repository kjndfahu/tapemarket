export const RentSkinBlock = () => {
    return (
        <div
            className="flex flex-col font-golos z-[2] w-[250px] border-[1px] border-[#312E40] items-center rounded-[18px] bg-[#1717178C]">
            <div className="flex items-center justify-between py-[11px] px-[14px] w-full">
                <div
                    className="flex items-center justify-center z-[2] text-white py-1.5 px-3.5 bg-[#1717178C] border-[1px] border-[#AFA3FD] rounded-[18px]">
                    Возвращено
                </div>
                <p className="text-[16px] z-[2] text-[#FFFFFF99]">ID: 453</p>
            </div>
            <div className="relative mt-[-24px] w-[208px] h-[215px]">
                <div className="absolute inset-0 z-[1] rounded-full bg-[#1E1E2F] blur-2xl"/>
                <img
                    className="relative w-[208px] h-[215px] z-[2]"
                    src="/img/mac.png"
                    alt="MAC-10 Neon Rider"
                />
            </div>
            <h6 className="font-golos z-[2] text-[#FFFBFF] text-[20px]">MAC-10 | Neon Rider <span
                className="text-[14px]">(FN)</span></h6>
            <div className='flex items-center mt-4 w-full gap-2 p-3 border-t-[1px] border-b-[1px] border-[#312E40]'>
                <img src="/img/calendar.svg" alt="calendar"/>
                <p className="text-[16px] font-golos text-[#FFFFFF99]">Истекла: <span
                    className="font-medium">25/09/2025</span></p>
            </div>
            <div className='flex items-center rounded-b-[18px] w-full gap-2 p-3 border-[#312E40]'>
                <img src="/img/gray-card.svg" alt="calendar"/>
                <p className="text-[16px] font-golos text-[#FFFFFF99]">Сумма: <span
                    className="font-medium">1,355 ₽</span></p>
            </div>
        </div>
    )
}