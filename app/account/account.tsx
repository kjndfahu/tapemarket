import {AccountInfo} from "../../components/account/account-info";
import {RefSystem} from "../../components/account/ref-system";
import {Settings} from "../../components/account/settings";
import {RentHistory} from "../../components/account/rent-history";
import {ActiveRent} from "../../components/account/active-rent";

export default function Account() {
    return (
        <div className="flex mt-6 gap-[50px]">
            <div className="flex flex-col gap-6">
                <AccountInfo/>
                <RefSystem/>
            </div>
            <div className="flex flex-col gap-4">
                <Settings/>
                <ActiveRent/>
                <RentHistory/>
            </div>
        </div>
    )
}