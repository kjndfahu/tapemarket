import {ConfirmationSkin} from "../confirmation/confirmation-skin";

export const CaseSkins = () => {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-[24px] text-white font-unbounded font-bold">Что может выпасть</h3>
            <div className="grid grid-cols-5 gap-5">
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
                <ConfirmationSkin/>
            </div>
        </div>
    )
}