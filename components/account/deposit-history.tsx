export const DepositHistory = () => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from(Array(5).keys()).map((_, i) => (
                <div key={i}
                     className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 sm:py-[13px] px-3 sm:px-4 border-[1px] border-[#312E40] bg-[#1717178C]">
                    <h5 className="font-golos text-[clamp(14px,1.8vw,16px)] font-semibold">ID: 234125</h5>
                    <p className="text-[clamp(14px,1.8vw,16px)] text-white font-golos">24/09/2025 23:49</p>
                    <div
                        className="flex items-center justify-between w-full sm:w-[min(246px,30vw)] bg-[#1717178C] rounded-full border-[1px] border-[#312E40] h-[clamp(40px,5vh,51px)] mt-2 sm:mt-0">
                        <p className="font-golos font-medium ml-3 sm:ml-6 text-white text-[clamp(14px,1.8vw,16px)]">549 ₽</p>
                        <button
                            className="bg-[#312E40] text-white font-golos font-medium text-[clamp(14px,1.8vw,16px)] text-[#1A1A1A] rounded-full w-[min(154px,20vw)] h-full">
                            Карта РФ
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};