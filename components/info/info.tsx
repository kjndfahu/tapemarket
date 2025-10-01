import {INFO_ITEMS} from "../../constants/constants";
import {InfoBlock} from "./info-block";

export const Info = () => {
    return (
        <div className="flex flex-col max-w-[1328px] gap-4">
            {INFO_ITEMS.map((item, index) => (
                <InfoBlock title={item.title} key={index} text={item.text} img={item.img} />
            ))}
        </div>
    )
}