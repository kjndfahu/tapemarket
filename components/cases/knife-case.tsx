export const KnifeCase = () => {
    return (
        <div className="flex flex-col relative items-center">
            <h4 className="text-[24px] leading-[28px] z-[2] font-bold font-unbounded">Ножевой кейс</h4>
            < >
                <img className="z-[2]" src="/img/knife-case.png" alt="knife-case"/>
                <img className="absolute top-0 z-[1] blur-3xl" src="/img/knife-case.png" alt="knife-case"/>
            </>
            <button
                className="text-[16px] font-golos glow hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium h-[51px] bg-[#AFA3FD] rounded-full w-full">
                Открыть за 349₽
            </button>
        </div>
    )
}