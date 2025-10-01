import type { StreamerItem } from "../../types/types";
import { useState } from "react";
import { VideoCircleModal } from "./video-circle-modal";

export const BigStreamer = ({ name, logo, video }: StreamerItem) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-start gap-2">
                <h6 className="text-[32px] text-white font-semibold font-unbounded">{name}</h6>
                {logo === 'youtube' ? (
                    <img className="w-[21px] h-[24px]" src="/img/youtube.svg" alt="youtube" />
                ) : (
                    <img className="w-[21px] h-[24px]" src="/img/twitch.svg" alt="twitch" />
                )}
            </div>
            <video
                className="w-[216px] h-[216px] rounded-full object-cover cursor-pointer"
                src={video}
                autoPlay
                muted
                loop
                playsInline
                onClick={openModal}
            />
            <VideoCircleModal isOpen={isModalOpen} onClose={closeModal} src={video} />
        </div>
    );
};