import type {StreamerItem} from "../../types/types";
import { useState } from "react";
import { VideoCircleModal } from "./video-circle-modal";

export const SmallStreamer = ({name, video, logo}: StreamerItem) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
        <div className="flex flex-col items-center z-[2] gap-[5px]">
            <div className="w-20 h-20 relative bg-white z-[2] rounded-full cursor-pointer" onClick={open}>
                {logo === 'youtube' ? (
                    <img className="absolute bottom-[8px] left-1/2 right-1/2 -translate-x-1/2 w-[17px] h-[12px]"
                         src="/img/youtube.svg" alt="youtube"/>
                ) : (
                    <img className="absolute bottom-[8px] left-1/2 right-1/2 -translate-x-1/2 w-[16px] h-[19px]"
                         src="/img/twitch.svg" alt="twitch"/>
                )}

                {/*<video*/}
                {/*    className="w-[80px] h-[80px] rounded-full object-cover cursor-pointer"*/}
                {/*    src={video}*/}
                {/*    autoPlay*/}
                {/*    muted*/}
                {/*    loop*/}
                {/*    playsInline*/}
                {/*    onClick={open}*/}
                {/*/>*/}
            </div>
            <h6 className="font-unbounded font-semibold text-white text-[16px]">{name}</h6>
            <VideoCircleModal isOpen={isOpen} onClose={close} src={video}/>
        </div>
    )
}