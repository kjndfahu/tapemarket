export const CaseBanner = () => {
    return (
        <div className="flex items-center justify-between">
            {/*<div className="flex flex-col items-center flex-1 relative gap-5">*/}
            {/*    <img className="absolute w-[719px] h-[538px] top-[10px]" src="/img/arch.png" alt="arch"/>*/}
            {/*    <p className="font-golos text-[22px] text-[#7E83B0]">Ножевой кейс</p>*/}
            {/*    < >*/}
            {/*        <img className="z-[2] w-[441px] h-[441px]" src="/img/knife-case.png" alt="knife-case"/>*/}
            {/*        <img className="absolute top-0 z-[1] blur-3xl" src="/img/knife-case.png" alt="knife-case"/>*/}
            {/*    </>*/}
            {/*</div>*/}
            <div className="flex flex-col w-[421px] gap-6">
                <h3 className="text-[32px] font-bold font-unbounded">Five-SeveN | Coolant</h3>
                <h3 className="text-[50px] font-semibold font-golos">549 ₽</h3>
                <button
                    className="text-[16px] font-golos glow hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium h-[51px] bg-[#AFA3FD] rounded-full w-full">
                    Открыть кейс
                </button>
            </div>
        </div>
    )
}