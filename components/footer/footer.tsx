import {FOOTER_LINKS} from "../../constants/constants";
import {useNavigate} from "react-router";

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className="flex justify-between w-full pt-[75px] pb-[57px]">
			<div className="flex flex-col">
				<h3 className="text-[48px] font-unbounded font-semibold text-white uppercase">Tapemarket</h3>
				<h6 className="text-[24px] font-medium text-white">© ООО TAPEMARKET</h6>
				<div className="mt-3">
					<p className="text-[20px] text-[#FFFFFF99] leading-6">
						TAPEMARKET LLC<br/>
						TIN: 9763654120<br/>
						OGRN: 3248236095583<br/>
					</p>
				</div>
			</div>
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-2">
					{FOOTER_LINKS.slice(0, 2).map((item, index) => (
						<a href={item.link} key={index}
						   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{item.title}</a>
					))}
				</div>
				<a href={FOOTER_LINKS[2].link}
				   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{FOOTER_LINKS[2].title}</a>
			</div>
			<div className="flex flex-col space-y-6">
				<div className="flex flex-col space-y-2">
					{FOOTER_LINKS.slice(3, 5).map((item, index) => (
						<a href={item.link} key={index}
						   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{item.title}</a>
					))}
				</div>
				<a href={FOOTER_LINKS[5].link}
				   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{FOOTER_LINKS[5].title}</a>
			</div>
			<div className="flex flex-col space-y-1">
				{FOOTER_LINKS.slice(6, 9).map((item, index) => (
					<p key={index}
					   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{item.title}</p>
				))}
			</div>
			<div className="flex flex-col space-y-1">
				{FOOTER_LINKS.slice(9, 13).map((item, index) => (
					<p key={index}
					   className="text-[20px] leading-[28px] text-[#FFFFFF99]">{item.title}</p>
				))}
			</div>
		</footer>
	)
}