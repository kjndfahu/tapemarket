import { HeroBtns } from "./hero-btns"

export const Hero = () => {
	return (
		<div className="flex items-center justify-between z-[2] mb-[157px] w-full">
			<div className="flex flex-col gap-6">
				<h1 className="text-primary text-[52px] font-unbounded font-bold">Арендуй скины CS2<br/> быстро и недорого</h1>
				<p className="text-[24px] text-[#D9D9D9] font-golos">Арендуй скины в пару кликов пока другие парятся с покупкой и продажой</p>
				<HeroBtns/>
			</div>
			<img src="/img/cards.png" alt="cards" />
		</div>
	)
}