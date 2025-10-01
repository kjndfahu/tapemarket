export const Popup = ({text}: {text: string}) => {
    return (
        <div className="flex items-center cursor-pointer max-w-[108px] text-[16px] leading-[16px] text-white gap-2">
            <p>{text}</p>
            <img className="w-[13px] h-[13px]" src="/img/arrow.svg" alt="arrow"/>
        </div>
    )
}