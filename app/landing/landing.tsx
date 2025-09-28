import { Header } from "components/header/header";
import { Hero } from "components/hero/hero";

export default function Landing() {
	return (
		<div className="px-14">
			<Header/>
			<Hero/>

			{/* <img className="absolute top-0 w-[100vw] z-[1]" src="/img/bg-landing.png" alt="bg" /> */}
		</div>
	);
}