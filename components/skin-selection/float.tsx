import { useState } from 'react';

export const Float = () => {
    const [fromFocused, setFromFocused] = useState(false);
    const [toFocused, setToFocused] = useState(false);

    return (
        <div className="flex items-center text-[16px] text-white gap-2">
            <p>Float</p>
            <div className="flex items-center gap-3">
                <div className="bg-[#111111] w-[85px] h-[46px] rounded-[17px] border-[1px] border-[#312E40] p-3 relative">
                    <input
                        className={`w-full bg-transparent outline-0 ring-0 text-white placeholder:text-[#FFFFFF99] transition-all duration-200 ease-in-out `}
                        placeholder="От"
                        type="text"
                    />
                </div>
                <p>—</p>
                <div
                    className="bg-[#111111] w-[85px] h-[46px] rounded-[17px] border-[1px] border-[#312E40] p-3 relative">
                    <input
                        className={`w-full bg-transparent outline-0 ring-0 text-white placeholder:text-[#FFFFFF99] transition-all duration-200 ease-in-out `}
                        placeholder="До"
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
};