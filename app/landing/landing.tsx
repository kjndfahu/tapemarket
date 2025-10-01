
import { Hero } from "components/hero/hero";
import {Faq} from "../../components/faq/faq";
import {Info} from "../../components/info/info";
import {Streamers} from "../../components/streamers/streamers";
import {RentProcess} from "../../components/rent-proccess/rent-process";

export default function Landing() {
	return (
		<div className="flex flex-col mt-[75px] items-center gap-[120px] z-10">
			<Hero/>
			<RentProcess/>
			<Streamers/>
			<Info/>
			<Faq/>
		</div>
	);
}