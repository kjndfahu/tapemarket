import {ProcessBlock} from "./process-block";
import {InfoProcess} from "./info-process";
import {INFO_PROCESS} from "../../constants/constants";
import { useEffect, useRef, useState } from "react";

export const RentProcess = () => {
    const baseRef = useRef<HTMLDivElement | null>(null);
    const tiltTargetRef = useRef<HTMLDivElement | null>(null);
    const [tiltXDeg, setTiltXDeg] = useState(0);
    const [tiltYDeg, setTiltYDeg] = useState(0);
    const targetTiltX = useRef(0);
    const targetTiltY = useRef(0);
    const rafId = useRef<number | null>(null);

    const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
        const rectHost = baseRef.current?.getBoundingClientRect();
        if (!rectHost) return;
        const x = e.clientX - rectHost.left;
        const y = e.clientY - rectHost.top;
        let ratioX = (x / rectHost.width) * 2 - 1;
        let ratioY = (y / rectHost.height) * 2 - 1;
        const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
        ratioX = clamp(ratioX, -0.98, 0.98);
        ratioY = clamp(ratioY, -0.98, 0.98);
        const ease = (t: number) => t * (2 - Math.abs(t));
        const easedX = ease(ratioX);
        const easedY = ease(ratioY);
        const maxDegX = 16;
        const maxDegY = 10;
        targetTiltX.current = easedX * maxDegX;
        targetTiltY.current = -easedY * maxDegY;
    };

    const handlePointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
        targetTiltX.current = 0;
        targetTiltY.current = 0;
    };

    useEffect(() => {
        const smoothStep = () => {
            const smoothing = 0.15;
            setTiltXDeg(prev => prev + (targetTiltX.current - prev) * smoothing);
            setTiltYDeg(prev => prev + (targetTiltY.current - prev) * smoothing);
            rafId.current = requestAnimationFrame(smoothStep);
        };
        rafId.current = requestAnimationFrame(smoothStep);
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div className="flex relative max-w-[1328px] w-full gap-10">
            <div className="flex flex-col z-[2] w-full gap-10">
                <div ref={baseRef} className="flex justify-between gap-10">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-[52px] text-white font-unbounded font-semibold">Процесс аренды<br/> скинов
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <ProcessBlock index={1} logo="/img/steam.svg" title="Авторизация"
                                              text="Ваш профиль и инвентарь в Steam должны быть открытыми"/>
                                <ProcessBlock index={2} logo="/img/search.svg" title="Выбор"
                                              text="Выберите скины которые хотите взять из нашего каталога"/>
                            </div>
                            <ProcessBlock index={3} logo="/img/card.svg" title="Оплата"
                                          text="Пополните баланс, оплатите аренду и получите скин в свой инвентарь, подтвердив отправленный вам трейд."/>
                        </div>
                    </div>
                    <div
                        ref={tiltTargetRef}
                        onPointerMove={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                        className="flex flex-col items-center gap-9 transform-gpu will-change-transform [transform-style:preserve-3d]"
                        style={{transform: `perspective(900px) rotateX(${tiltYDeg}deg) rotateY(${tiltXDeg}deg)`}}
                    >
                        <img className="animate-floatLg" src="/img/knife-banner.png" alt="knife-banner"/>
                        <div className="flex items-center h-[51px] gap-3">
                            <button
                                className="h-full cursor-pointer glow hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium text-[16px] bg-[#AFA3FD] rounded-full glow px-8">
                                Взять в аренду
                            </button>

                            <button
                                className="flex items-center hover:scale-105 transition-all duration-200 gap-4 h-full cursor-pointer text-[#D9D9D9] font-medium text-[16px] bg-[#171717] border-[1px] border-[#312E40] rounded-full px-8">
                                Больше в каталоге
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex mt-20 gap-[130px] w-full items-center justify-between">
                    {INFO_PROCESS.map((item, index) => (
                        <InfoProcess key={index} title={item.title} text={item.text}/>
                    ))}
                </div>
            </div>
            <div
                className="absolute z-[1] left-[100px] top-[200px] w-[900px] h-[1057px] blur-[216px] first-process-glow"></div>
            <div
                className="absolute z-[1] right-[-200px] w-[595px] h-[706px] blur-[216px] second-process-glow"></div>
        </div>
    )
}