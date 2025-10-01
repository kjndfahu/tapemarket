import {Cases} from "../../components/cases/cases";
import {CatalogFilter} from "../../components/catalog/catalog-filter";
import {CatalogItem} from "../../components/catalog/catalog-item";
import {CapitalizeText} from "../../components/capitalize-text";
import {ConfirmationSkin} from "../../components/confirmation/confirmation-skin";
import {ConfirmationBtns} from "../../components/confirmation/confirmation-btns";
import {FAQ_ITEMS} from "../../constants/constants";
import {FaqBlock} from "../../components/faq/faq-block";

export default function FAQPage() {
    return (
        <div className="relative flex flex-col mt-[50px] gap-6 pt-[75px]">
            <div aria-hidden className="fixed inset-0 -z-[1] pointer-events-none bg-no-repeat bg-center bg-cover"
                 style={{backgroundImage: "url('/img/bg-landing.png')"}}/>
            <div className="w-[585px]">
                <div className="flex flex-col z-[3] mt-30 gap-10">
                    <CapitalizeText text="Вопросы, ответы"/>
                    <div className="flex flex-col w-[692px] z-[3] gap-[2px] first:rounded-t-[10px] last:rounded-b-[10px]">
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
            </div>

            <div className="flex flex-row w-full z-[2]">
                <img className="absolute top-[80px] right-[80px] animate-float" style={{animationDelay: '0.15s'}}
                     src="/img/ak.png" alt="ak"/>
                <img className="absolute top-[-70px] right-[-100px] animate-floatLg" style={{animationDelay: '0.6s'}}
                     src="/img/knife.png" alt="knife"/>
                <img className="absolute bottom-[-150px] right-[-130px] animate-float" style={{animationDelay: '1s'}}
                     src="/img/m4.png" alt="m4"/>
                <img className="absolute top-[-270px] right-[-70px] animate-floatLg" style={{animationDelay: '1.4s'}}
                     src="/img/awp.png" alt="awp"/>
            </div>
            <div
                className="absolute z-[1] left-[-400px] top-[200px] w-[583px] h-[704px] blur-[216px] faq-glow"></div>

            <div
                className="absolute z-[1] right-[-400px] top-[100px] w-[583px] h-[704px] blur-[216px] faq-second-glow"></div>
        </div>
    )
}
