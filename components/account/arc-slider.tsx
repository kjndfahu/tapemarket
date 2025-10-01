import React, { useState } from "react";

const ArcSlider: React.FC = () => {
    const [percent, setPercent] = useState(80);
    const radius = 200;
    const strokeWidth = 10;
    const startAngle = 180;
    const endAngle = 0;
    const angle = startAngle + (endAngle - startAngle) * (percent / 100);
    const radians = (angle * Math.PI) / 180;
    const cx = 252.5; // Centered for 505 width (505/2)
    const cy = 260; // Increased cy to move arc lower

    const x = cx + radius * Math.cos(radians);
    const y = cy - radius * Math.sin(radians);

    const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - cx - rect.left;
        const dy = cy - (e.clientY - rect.top);
        let angleRad = Math.atan2(dy, dx);

        let deg = (angleRad * 180) / Math.PI;
        if (deg < 0) deg += 360;

        if (deg <= 180 && deg >= 0) {
            const newPercent = 100 - (deg / 180) * 100;
            setPercent(newPercent);
        }
    };

    return (
        <svg
            width="505"
            height="350"
            onMouseDown={(e) => {
                const move = (ev: MouseEvent) => handleMove(ev as any);
                const up = () => {
                    window.removeEventListener("mousemove", move);
                    window.removeEventListener("mouseup", up);
                };
                window.addEventListener("mousemove", move);
                window.addEventListener("mouseup", up);
            }}
        >
            <path
                d={`M ${cx - radius},${cy} A ${radius},${radius} 0 0 1 ${
                    cx + radius
                },${cy}`}
                stroke="#333540"
                strokeWidth={strokeWidth}
                fill="none"
            />
            <path
                d={`M ${cx - radius},${cy} A ${radius},${radius} 0 0 1 ${x},${y}`}
                stroke="#a78bfa"
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle cx={x} cy={y} r="12" fill="#a78bfa" />
        </svg>
    );
};

export default ArcSlider;