import {FaqBlock} from "./faq-block";
import {FAQ_ITEMS} from "../../constants/constants";
import {CapitalizeText} from "../capitalize-text";

export const Faq = () => {
    return (
        <div className="flex flex-row w-full items-start justify-start max-w-[1328px] relative">
            <div className="flex flex-col z-[2] mt-30 gap-10">
                <CapitalizeText text="Вопросы, ответы"/>
                <div className="flex flex-col w-[692px] gap-[2px] first:rounded-t-[10px] last:rounded-b-[10px]">
                    {FAQ_ITEMS.map((item, index) => (
                        <FaqBlock
                            title={item.title}
                            key={index}
                            text={item.text}
                            className={
                                index === 0
                                    ? "rounded-t-[25px]"
                                    : index === FAQ_ITEMS.length - 1
                                        ? "rounded-b-[25px]"
                                        : ""
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full  z-[1]">
                <img className="absolute top-[10px] right-[180px] animate-float" style={{animationDelay: '0.15s'}} src="/img/ak.png" alt="ak"/>
                <img className="absolute top-[-120px] right-[-70px] animate-floatLg" style={{animationDelay: '0.6s'}} src="/img/knife.png" alt="knife"/>
                <img className="absolute bottom-[-240px] right-[-70px] animate-float" style={{animationDelay: '1s'}} src="/img/m4.png" alt="m4"/>
                <img className="absolute top-[-320px] right-[-80px] animate-floatLg" style={{animationDelay: '1.4s'}} src="/img/awp.png" alt="awp"/>
            </div>
        </div>
    )
}