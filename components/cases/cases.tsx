import {KnifeCase} from "./knife-case";
import {GloveCase} from "./glove-case";
import {AWPCase} from "./awp-case";

export const Cases = () => {
    return (
        <div className="flex items-center justify-center w-full gap-[114px]">
            <KnifeCase/>
            <GloveCase/>
            <AWPCase/>
        </div>
    )
}