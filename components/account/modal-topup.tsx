import { useEffect } from 'react';
import { DepositAmount } from "./deposit-amount";
import { DepositMethod } from "./deposit-method";
import { DepositHistory } from "./deposit-history";
import type {ModalProps} from "../../types/types";

export const ModalTopup = ({setIsOpen, isOpen}: ModalProps) => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md">
            <div className="flex flex-col gap-4 font-golos p-4 sm:p-6 backdrop-blur-3xl bg-[#1717178C] border-[1px] border-[#312E40] rounded-[25px] w-[min(90vw,745px)] max-h-[min(90vh,839px)]">
                <h3 className="text-[clamp(16px,2vw,18px)] sm:text-[20px] text-white leading-[1.1] font-semibold">Пополнение счета</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[53px]">
                    <DepositAmount />
                    <DepositMethod />
                </div>
                <div className="flex flex-col gap-3.5 w-full">
                    <button
                        className="cursor-pointer h-[clamp(40px,5vh,51px)] hover:scale-105 transition-all duration-200 text-[#1A1A1A] font-medium text-[clamp(14px,1.8vw,16px)] bg-[#AFA3FD] rounded-full glow px-4 sm:px-8">
                        Пополнить баланс
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center hover:scale-105 transition-all duration-200 gap-4 h-[clamp(40px,5vh,51px)] cursor-pointer text-[#D9D9D9] font-medium text-[clamp(14px,1.8vw,16px)] bg-[#171717] border-[1px] border-[#312E40] rounded-full px-4 sm:px-8">
                        Закрыть
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[40vh]">
                    <DepositHistory />
                </div>
            </div>
        </div>
    );
};