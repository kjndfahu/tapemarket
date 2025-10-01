export const RefLink = () => {
    return (
        <div
            className="flex items-center justify-between gap-2.5 p-4 rounded-[25px] border-[1px] border-[#312E40] w-full h-[70px]">
            <div className="flex flex-col gap-1">
                <h6 className="text-[14px] leading-[14px] text-white font-golos">Реферальная ссылка:</h6>
                <p className="text-[14px] leading-[14px] font-medium text-[#FFFFFF99] font-golos">https://steamcommt...</p>
            </div>
            <div className="flex items-center gap-2.5">
                <img className="cursor-pointer" src="/img/pen.svg" alt="pen"/>
                <img className="cursor-pointer" src="/img/copy.svg" alt="pen"/>
            </div>
        </div>
    )
}