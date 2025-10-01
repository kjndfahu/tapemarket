import { useState } from 'react';

export const PricePopup = () => {
    const [fromFocused, setFromFocused] = useState(false);
    const [toFocused, setToFocused] = useState(false);

    return (
        <div className="flex items-center text-[16px] text-white gap-2">
            <p>Стоимость</p>
            <div className="flex items-center gap-3">
                <div className="bg-[#111111] w-[85px] h-[46px] rounded-[17px] border-[1px] border-[#312E40] p-3 relative">
                    <span
                        className={`absolute left-3 top-0 text-[10px] text-white transition-opacity duration-200 ease-in-out ${
                            fromFocused ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Цена от
                    </span>
                    <input
                        className={`w-full bg-transparent outline-0 ring-0 text-white placeholder:text-[#FFFFFF99] transition-all duration-200 ease-in-out ${
                            fromFocused ? 'placeholder:opacity-0' : 'placeholder:opacity-100'
                        }`}
                        placeholder="Цена от"
                        type="text"
                        onFocus={() => setFromFocused(true)}
                        onBlur={() => setFromFocused(false)}
                    />
                    <span
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-200 ease-in-out ${
                            fromFocused ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        ₽
                    </span>
                </div>
                <p>—</p>
                <div className="bg-[#111111] w-[85px] h-[46px] rounded-[17px] border-[1px] border-[#312E40] p-3 relative">
                    <span
                        className={`absolute left-3 top-0 text-[10px] text-white transition-opacity duration-200 ease-in-out ${
                            toFocused ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Цена до
                    </span>
                    <input
                        className={`w-full bg-transparent outline-0 ring-0 text-white placeholder:text-[#FFFFFF99] transition-all duration-200 ease-in-out ${
                            toFocused ? 'placeholder:opacity-0' : 'placeholder:opacity-100'
                        }`}
                        placeholder="Цена до"
                        type="text"
                        onFocus={() => setToFocused(true)}
                        onBlur={() => setToFocused(false)}
                    />
                    <span
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-200 ease-in-out ${
                            toFocused ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        ₽
                    </span>
                </div>
            </div>
        </div>
    );
};