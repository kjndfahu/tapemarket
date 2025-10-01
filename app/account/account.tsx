import {AccountInfo} from "../../components/account/account-info";
import {RefSystem} from "../../components/account/ref-system";
import {Settings} from "../../components/account/settings";

export default function Account() {
    return (
        <div className="flex mt-6 gap-[60px]">
            <div className="flex flex-col gap-6">
                <AccountInfo/>
                <RefSystem/>
            </div>
            <Settings/>
        </div>
    )
}