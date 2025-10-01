import ArcSlider from "./arc-slider";

export const ActiveRent = () => {
    return (
        <div className="flex flex-col gap-[30px]">
            <h3 className="text-[24px] leading-[28px] font-unbounded font-bold">Активная аренда</h3>
            <div className="flex gap-10 justify-between items-center">
                <div className="flex items-center relative h-[350px] w-[505px]">
                    <div className="w-[400px] h-[400px]">
                        <img className="absolute z-[2]" src="/img/knife-gold.png" alt="knife"/>
                        <div className="z-[1] w-[400px] h-[400px] gold-glow rounded-full blur-[30px]"></div>
                    </div>
                </div>

                <div className="flex flex-col h-full text-[16px] font-golos justify-between">
                    <div className="flex flex-col leading-4 text-[#FFFFFF99] gap-1.5">
                        <h2 className="text-[32px] text-white leading-[48px] font-unbounded font-bold">Talon Knife
                            |<br/> Marble Fade</h2>
                        <p>Взят в аренду: <span className="font-medium">26/09/2025</span></p>
                        <p>Качество: <span className="font-medium">Field-Tested</span></p>
                        <p>Float: <span className="font-medium">324234242</span></p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-white">Всего до конца аренды: <span className="font-medium">5 дней</span></p>

                        <button
                            className="flex items-center justify-center w-[421px] h-[52px] hover:scale-105 transition-all duration-200 gap-4 cursor-pointer text-[#D9D9D9] font-medium text-[16px] bg-[#171717] border-[1px] border-[#312E40] rounded-full px-8">
                            Вернуть сейчас
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}