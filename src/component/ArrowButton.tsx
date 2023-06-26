import Image from "next/image"

export function ArrowButton({ title }: { title: string }) {
	return (
		<button className="flex items-center gap-[0.63rem] font-display font-[100] uppercase italic">
			{title + " "}
			<figure className="relative h-[0.75rem] w-[1.5rem]">
				<Image src="/icon/arrow.svg" fill alt="" />
			</figure>
		</button>
	)
}
