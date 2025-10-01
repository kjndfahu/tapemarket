export const ConfirmationSkin = () => {
    return (
        <div className="flex flex-col font-golos z-[2] w-[250px] h-[282px] border-[1px] border-[#312E40] items-center px-2 py-[11px] rounded-[18px] bg-[#1717178C]">
            <div className="flex items-center justify-between w-full">
                <div
                    className="flex items-center justify-center py-1.5 px-3.5 bg-[#1717178C] border-[1px] border-[#AFA3FD] rounded-[18px]">
                    399₽
                </div>
                <p className="text-[16px] z-[2] text-[#FFFFFF99]">за 7 дней</p>
            </div>
            <div className="relative mt-[-24px] w-[208px] h-[215px]">
                <div className="absolute inset-0 z-[1] rounded-full bg-[#1E1E2F] blur-2xl" />
                <img
                    className="relative w-[208px] h-[215px] z-[2]"
                    src="/img/mac.png"
                    alt="MAC-10 Neon Rider"
                />
            </div>
            <h6 className="font-golos z-[2] text-[#FFFBFF] text-[20px]">MAC-10 | Neon Rider <span className="text-[14px]">(FN)</span></h6>
        </div>
    );
};