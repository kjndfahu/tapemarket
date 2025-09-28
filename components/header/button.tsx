import { useNavigate } from "react-router";
import type { NavItem } from "types/types"

export const Button = ({label, to}:NavItem) => {
	return (
		<a className="text-[16px] font-golos font-medium text-secondary underline" href={to}>{label}</a>
	)
}