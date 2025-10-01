import { HEADER_HEIGHT } from "constants/constants"
import { Logo } from "./logo"
import { NavButtons } from "./nav-buttons"
import { AuthBtn } from "./auth-btn"

export const Header = () => {
	return (
		<div style={{height: `${HEADER_HEIGHT}px`}} className="relative flex w-full max-w-[1328px] items-center bg-transparent justify-between z-[2]">
			<div className="flex items-center space-x-14">
				<Logo/>
				<NavButtons/>
			</div>
			<AuthBtn/>
		</div>
	)
}