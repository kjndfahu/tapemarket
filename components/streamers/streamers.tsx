import {BIG_STREAMERS, SMALL_STREAMERS} from "../../constants/constants";
import {BigStreamer} from "./big-streamer";
import {SmallStreamer} from "./small-streamer";

export const Streamers = () => {
    return (
        <div className="flex flex-col items-center gap-[60px]">
            <h2 className="font-unbounded font-semibold text-[52px]">Они уже с нами</h2>
            <div className="flex relative flex-col items-center gap-[35px]">
                <div className="flex items-center z-[2] gap-[90px]">
                    {BIG_STREAMERS.map((item, index) => (
                        <BigStreamer key={index} name={item.name} logo={item.logo} video={item.video}/>
                    ))}
                </div>
                <div className="flex flex-wrap z-[2] items-center justify-center gap-6">
                    {SMALL_STREAMERS.map((item, index) => (
                        <SmallStreamer name={item.name} logo={item.logo} video={item.video}/>
                    ))}
                </div>
                <div className="absolute z-[1] top-[100px] right-[-700px] w-[1000px] h-[1000px] blur-[216px] streamers-glow"/>
            </div>
        </div>
    )
}