import { useEffect, useRef, useState } from "react";

type VideoCircleModalProps = {
    isOpen: boolean;
    onClose: () => void;
    src: string;
};

export const VideoCircleModal = ({ isOpen, onClose, src }: VideoCircleModalProps) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            const el = videoRef.current;
            if (el) {
                el.muted = false;
                const playPromise = el.play();
                if (playPromise && typeof playPromise.then === 'function') {
                    playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
                }
            }
        });

        return () => {
            document.body.style.overflow = previousOverflow;
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const togglePlay = () => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) {
            el.play();
            setIsPlaying(true);
        } else {
            el.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        const el = videoRef.current;
        if (!el) return;
        el.muted = !el.muted;
        setIsMuted(el.muted);
    };

    return (
        <div className="fixed inset-0 z-[100]">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                <div className="relative max-w-[90vw] max-h-[90vh] pointer-events-auto">
                    <button
                        className="absolute -top-6 -right-6 z-10 text-white text-3xl font-bold drop-shadow"
                        onClick={onClose}
                        aria-label="Закрыть"
                    >
                        &times;
                    </button>
                    <div className="w-[80vmin] h-[80vmin] max-w-[80vw] max-h-[80vh] rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            src={src}
                            autoPlay
                            playsInline
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 rounded-full px-4 py-2">
                            <button
                                className="text-white text-sm font-medium"
                                onClick={togglePlay}
                                aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
                            >
                                {isPlaying ? 'Пауза' : 'Пуск'}
                            </button>
                            <span className="w-px h-4 bg-white/30" />
                            <button
                                className="text-white text-sm font-medium"
                                onClick={toggleMute}
                                aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
                            >
                                {isMuted ? 'Без звука' : 'Со звуком'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


