import {CapitalizeText} from "../capitalize-text";

export const NotFoundQuestion = () => {
    return (
        <div className="flex flex-col pb-[50px] gap-6 items-center justify-center">
            <CapitalizeText text="Не нашли свой вопрос?"/>
            <p className="font-golos text-center w-[692px] text-[#FFFFFFA6] text-[24px]">
                Если у вас остались вопросы вы всегда можете задать их прямо
                в <span className="text-white">чат с поддержкой</span> и мы с радостью вам поможем!
            </p>
            <div className="flex items-center h-[51px] gap-[14px]">
                <button
                    className="flex items-center gap-2.5 h-full cursor-pointer hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium text-[16px] bg-[#AFA3FD] rounded-full glow px-8">
                    <img src="/img/live-chat.svg" alt="tg"/>
                    Live чат
                </button>

                <button
                    className="flex items-center hover:scale-105 transition-all duration-200 gap-2.5 h-full cursor-pointer text-[#D9D9D9] font-medium text-[16px] bg-[#171717] border-[1px] border-[#312E40] rounded-full px-8">
                    <img src="/img/tg.svg" alt="tg"/>
                    Telegram
                </button>
            </div>
        </div>
    )
}