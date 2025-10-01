"use client"

import {useState} from "react";
import {ModalTopup} from "./modal-topup";
import { AnimatePresence } from "framer-motion";

export const TopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between bg-[#1717178C] rounded-full border-[1px] border-[#312E40] h-[51px]">
            <p className="font-golos font-medium ml-6 text-[16px]">194,59 ₽</p>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-purple font-golos font-medium text-[16px] text-[#1A1A1A] rounded-full w-[154px] h-full">
                Пополнить
            </button>

            <AnimatePresence>
                {isOpen && (
                    <ModalTopup setIsOpen={setIsOpen} isOpen={isOpen} />
                )}
            </AnimatePresence>
        </div>
    )
}
