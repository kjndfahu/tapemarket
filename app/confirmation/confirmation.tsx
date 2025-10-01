import {Cases} from "../../components/cases/cases";
import {CatalogFilter} from "../../components/catalog/catalog-filter";
import {CatalogItem} from "../../components/catalog/catalog-item";
import {CapitalizeText} from "../../components/capitalize-text";
import {ConfirmationSkin} from "../../components/confirmation/confirmation-skin";
import {ConfirmationBtns} from "../../components/confirmation/confirmation-btns";

export default function Confirmation() {
    return (
        <div className="relative flex flex-col mt-[50px] gap-6 pt-[75px]">
            <div aria-hidden className="fixed inset-0 -z-[1] pointer-events-none bg-no-repeat bg-center bg-cover"
                 style={{backgroundImage: "url('/img/bg-landing.png')"}}/>
            <div className="w-[585px]">
                <CapitalizeText text="Подтверждение аренды"/>
            </div>
            <div className="flex items-center gap-6">
                <ConfirmationSkin/>
                <ConfirmationBtns/>
            </div>
            <img className="absolute z-[3] top-[180px] left-[120px]" src="/img/grey-arrow.png" alt="grey-arrow"/>
            <img className="absolute z-[3] top-[320px] left-[340px]" src="/img/purple-arrow.png" alt="grey-arrow"/>
            <div className="flex flex-col gap-4">
                <h5 className="text-[24px] font-unbounded font-semibold text-white">Почему стоимость
                    аренды<br/> отличается?</h5>
                <div
                    className="text-[16px] text-[#1A1A1A] font-golos rounded-[25px] w-[585px] border-[1px] border-[#312E40] bg-[#AFA3FD] py-4 px-7">
                    Если же вы не хотите чтобы ваш трейд был заблокирован на 30 дней, то Мы отменим трейд через 168
                    часов после взятия Вами скина в аренду и никакой блокировки Вашего трейда за этим не последует.
                </div>
                <div
                    className="text-[16px] text-[#FFFFFF99] font-golos rounded-[25px] w-[585px] border-[1px] border-[#312E40] bg-[#1717178C] py-4 px-7">
                    Если вы хотите взять скин в аренду дешевле - то вам нужно будет отменить трейд через 168 часов после
                    взятия скина в аренду и вы получите блокировку трейда на 30 дней.
                </div>
            </div>
            <div className="flex flex-row w-full z-[2]">
                <img className="absolute top-[170px] right-[80px] animate-float" style={{animationDelay: '0.15s'}}
                     src="/img/knife-green.png" alt="ak"/>
                <img className="absolute top-[-20px] right-[-100px] animate-floatLg" style={{animationDelay: '0.6s'}}
                     src="/img/knife-purple.png" alt="knife"/>
                <img className="absolute bottom-[-70px] right-[-130px] animate-float" style={{animationDelay: '1s'}}
                     src="/img/aug.png" alt="m4"/>
                <img className="absolute top-[-120px] right-[-70px] animate-floatLg" style={{animationDelay: '1.4s'}}
                     src="/img/mp9.png" alt="awp"/>
            </div>
            <div
                className="absolute z-[1] left-[-400px] top-[200px] w-[583px] h-[704px] blur-[216px] faq-glow"></div>

            <div
                className="absolute z-[1] right-[-400px] top-[100px] w-[583px] h-[704px] blur-[216px] faq-second-glow"></div>
        </div>
    )
}
