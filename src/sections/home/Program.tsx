import Image from "next/image"
import { ArrowButton } from "@/components"

export function Program({}) {
	return (
		<section className="relative mx-auto mt-[2rem] max-w-[72.5rem] px-[1.25rem] md:px-[2.5rem]">
			<div className="relative">
				<figure className="relative mr-[1.88rem] h-[10rem] max-w-[55.81rem] md:mx-auto md:h-[30.5rem]">
					<Image
						src="/images/home/program-section/program-1.webp"
						fill
						alt="Artificial Face"
						className="object-cover"
					/>
				</figure>
				<figure className="absolute right-0 top-[1.27rem] h-[7.25rem] w-[5.31rem] md:top-[3.75rem] md:h-[23rem] md:w-[16.75rem]">
					<Image
						src="/images/home/program-section/program-2.webp"
						fill
						alt="AI Developer"
					/>
				</figure>
			</div>
			<div className="mt-[2.5rem] flex flex-col gap-[1.88rem] md:absolute md:top-[19.44rem] md:mt-0 md:max-w-[32.62rem] md:gap-[3.75rem]">
				<h2 className="text-h2">building faster, smarter,together.</h2>
				<p className="text-secondary-title">
					ARIES is a part of PIXIRHY, a global venture capital firm
					providing multi stage investment to develop and scale our
					founders’ big ideas. SOSV invests in every HAX program
					startup with follow-on through pre-iPO.
				</p>
				<ArrowButton title="VIEW PROGRAM" />
			</div>
		</section>
	)
}
