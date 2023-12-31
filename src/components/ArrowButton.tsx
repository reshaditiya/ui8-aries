import Image from "next/image"

export default function ArrowButton({ title }: { title: string }) {
	return (
		<div className="">
			<button className="group/arrowbtn flex items-center gap-[0.63rem] font-display font-[100] uppercase italic text-primary">
				{title + " "}
				<figure className="relative h-[0.75rem] w-[1.5rem] transition-all group-hover/arrowbtn:translate-x-[0.5rem]">
					<Image src="/icon/arrow.svg" fill alt="" />
				</figure>
			</button>
		</div>
	)
}
