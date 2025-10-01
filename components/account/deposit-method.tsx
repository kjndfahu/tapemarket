
export const DepositMethod = () => {
    return (
        <div className="flex items-center font-golos gap-[53px]">
            <div className="flex flex-col gap-2.5">
                <h5 className="text-[16px] text-white">Способ пополнения:</h5>
                <div className="grid grid-cols-3 grid-rows-2 gap-2.5">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200 w-[156px] h-[73px] rounded-[17px] gap-3.5 bg-[#111111] border-[1px] border-[#312E40]">
                            <img className="w-[40px] h-[31px]" src="/img/purple-card.svg" alt=""/>
                            <h6 className="text-[16px] text-[#FFFFFF99] font-golos">Карта</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}