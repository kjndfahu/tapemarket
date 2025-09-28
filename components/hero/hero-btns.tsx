export const HeroBtns = () => {
	return (
		<div className="flex mt-4 h-[51px] items-center gap-3">
			<button className="h-full cursor-pointer text-[#1A1A1A] font-medium text-[16px] bg-[#AFA3FD] rounded-full glow px-8">
				Взять в аренду
			</button>

			<button className="flex items-center gap-4 h-full cursor-pointer text-[#D9D9D9] font-medium text-[16px] bg-[#171717] border-[1px] border-[#312E40] rounded-full px-8">
				Как это работает?
				<img src="/img/question-logo.svg" alt="question"/>
			</button>
		</div>
	)
}