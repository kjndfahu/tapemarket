export const DepositAmount = () => {
    return (
        <div className="flex items-center font-golos gap-[53px]">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2.5">
                    <h5 className="text-[16px] text-white">Сумма пополнения:</h5>
                    <div className="border-[1px] w-[156px] rounded-[17px] border-[#312E40] bg-[#111111] p-3">
                        <input className="text-[#FFFFFF99] bg-transparent outline-0 ring-0" placeholder="₽ 0" type="text"/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[16px] text-[#FFFFFF99]">Мин. сумма: 500₽</p>
                        <p className="text-[16px] text-[#FFFFFF99]">Комиссия: 0₽</p>
                    </div>
                </div>

                <p className="text-[14px] leading-[18px] text-[#FFFFFF99]">Я принимаю <span className="underline">условия</span></p>
            </div>
        </div>
    )
}