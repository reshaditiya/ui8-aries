import Image from "next/image"
import { ArrowButton } from "@/components"

export default function InvestProgram({}) {
	return (
		<section className="relative mx-auto mt-[6.25rem] max-w-[72.5rem] items-center px-[1.25rem] md:mt-[25.19rem] md:px-[2.5rem]">
			<div className="flex flex-col gap-[1.88rem] md:flex-row md:items-center md:gap-[3.37rem]">
				<h2 className="text-h2 md:flex-1">
					We invest $27 Billion per year into AI startups.
				</h2>
				<p className="text-secondary-title md:max-w-[27.62rem] md:flex-1">
					They are showing researches and writting regularly about the
					consequnces happening on AI. Our unique program is designed
					for startups, combining hands-on help from a deeply
					experienced product development team and a total investment
					package of $270,000.
				</p>
			</div>

			<ul className="mt-[3.75rem] flex flex-col gap-[3.75rem]">
				{investPrograms.map((invest) => (
					<InvestCard
						company={invest.company}
						title={invest.title}
						description={invest.description}
						image1={invest.image1}
						image2={invest.image2}
					/>
				))}
			</ul>
		</section>
	)
}

const investPrograms: {
	company: string
	title: string
	description: string
	image1: string
	image2: string
}[] = [
	{
		company: "KAWASKI",
		title: "Corporobo Design Interview with Ben Lukas.",
		description:
			"We spoke to Robotic and sound designer Ben Lukas Boysen about the evolution of robot soundtracks and some of his top picks.",
		image1: "/images/home/invest-program/kawaski-1.webp",
		image2: "/images/home/invest-program/kawaski-2.webp",
	},
	{
		company: "ROXERIN",
		title: "Young Minds, Experience hand & Strong Command.",
		description:
			"We spoke to Robotic and sound designer Ben Lukas Boysen about the evolution of robot soundtracks and some of his top picks.",
		image1: "/images/home/invest-program/roxerin-1.webp",
		image2: "/images/home/invest-program/roxerin-2.webp",
	},
]

function InvestCard({
	company,
	title,
	description,
	image1,
	image2,
}: {
	company: string
	title: string
	description: string
	image1: string
	image2: string
}) {
	return (
		<div className="group relative flex flex-col gap-[3.12rem] md:flex-row md:items-center even:md:flex-row-reverse">
			<div className="relative md:flex-1">
				<figure className="relative mr-[1.88rem] h-[13.75rem] md:mr-[6.25rem] md:h-[30rem] group-even:md:ml-[6.25rem] group-even:md:mr-0">
					<Image
						src={image1}
						fill
						alt="Sphere Texture"
						className="object-cover"
					/>
				</figure>
				<figure className="absolute right-0 top-[1.88rem] h-[13.75rem] w-[9.37rem] md:h-[23rem] md:w-[16.75rem] group-even:md:left-0">
					<Image src={image2} fill alt="AI Developer" />
				</figure>
			</div>
			<div className="flex flex-1 flex-col gap-[1.75rem] md:max-w-[32.62rem] md:gap-[2.83rem]">
				<header className="flex flex-col gap-[0.38rem]">
					<span className="font-display tracking-[0.3rem] text-secondary-title/70">
						{company}
					</span>
					<h2 className="text-h3">{title}</h2>
				</header>
				<p className="text-secondary-title">{description}</p>
				<ArrowButton title="VIEW PROJECT" />
			</div>
		</div>
	)
}
