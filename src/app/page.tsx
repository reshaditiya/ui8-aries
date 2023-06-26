import Image from "next/image"
import { ArrowButton, Navbar } from "@/components"
import { HeroTitle, Program } from "@/sections/home"

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroTitle />
			<Program />

			{/* invest program */}
			<section className="relative mx-auto mt-[6.25rem] max-w-[72.5rem] items-center px-[1.25rem] md:mt-[25.19rem] md:px-[2.5rem]">
				<div className="flex flex-col gap-[1.88rem] md:flex-row md:items-center md:gap-[3.37rem]">
					<h2 className="text-h2 md:flex-1">
						We invest $27 Billion per year into AI startups.
					</h2>
					<p className="text-secondary-title md:max-w-[27.62rem] md:flex-1">
						They are showing researches and writting regularly about
						the consequnces happening on AI. Our unique program is
						designed for startups, combining hands-on help from a
						deeply experienced product development team and a total
						investment package of $270,000.
					</p>
				</div>

				{/* invest card */}
				<div className="relative mt-[3.75rem] flex flex-col gap-[3.12rem] md:flex-row md:items-center">
					<div className="relative md:flex-1">
						<figure className="relative mr-[1.88rem] h-[13.75rem] md:mr-[6.25rem] md:h-[30rem]">
							<Image
								src="/images/home/invest-program/kawaski-1.webp"
								fill
								alt="Sphere Texture"
								className="object-cover"
							/>
						</figure>
						<figure className="absolute right-0 top-[1.88rem] h-[13.75rem] w-[9.37rem] md:h-[23rem] md:w-[16.75rem]">
							<Image
								src="/images/home/invest-program/kawaski-2.webp"
								fill
								alt="AI Developer"
							/>
						</figure>
					</div>
					<div className="flex flex-1 flex-col gap-[1.75rem] md:max-w-[32.62rem] md:gap-[2.83rem]">
						<header className="flex flex-col gap-[0.38rem]">
							<span className="font-display tracking-[0.3rem] text-secondary-title/70">
								KAWASKI
							</span>
							<h2 className="text-h3">
								Corporobo Design Interview with Ben Lukas.
							</h2>
						</header>
						<p className="text-secondary-title">
							We spoke to Robotic and sound designer Ben Lukas
							Boysen about the evolution of robot soundtracks and
							some of his top picks.
						</p>
						<ArrowButton title="VIEW PROJECT" />
					</div>
				</div>
			</section>
		</main>
	)
}
