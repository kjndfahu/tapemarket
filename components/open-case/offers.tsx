import {Cases} from "../cases/cases";

export const Offers = () => {
    return (
        <div className="flex flex-col gap-7">
            <h3 className="text-[24px] text-white font-unbounded font-bold">Посмотрите также:</h3>
            <Cases />
        </div>
    )
}