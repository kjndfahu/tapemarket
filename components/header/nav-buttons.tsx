import { NAV_ITEMS } from "constants/constants"
import { Button } from "./button"

export const NavButtons = () => {
	return (
		<div className="space-x-14">
			{NAV_ITEMS.map((btn) => (
      <Button key={btn.to} {...btn} />
    ))}
		</div>
	)
}