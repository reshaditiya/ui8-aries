import Image from "next/image"
import Link from "next/link"
import { ArrowButton } from "@/components"

export default function Home() {
	return (
		<main>
			{/* navbar */}
			<nav className="fixed top-0 z-10 w-full md:top-[1.88rem] md:px-[2.5rem]">
				<div className="mx-auto flex max-w-[72.5rem] items-center bg-secondary-dark px-[1.25rem] py-[2rem] md:px-[3.75rem] md:py-[1.25rem]">
					<span className="hidden md:flex md:gap-[1.88rem]">
						<Link href="program">PROGRAM</Link>
						<Link href="program">FUNDING</Link>
					</span>
					<span className="flex flex-1 md:justify-center">
						<figure className="relative h-[1.56rem] w-[5.31rem] md:h-[2.5rem] md:w-[8.62rem]">
							<Image src="/logo.svg" alt="Aries Logo" fill />
						</figure>
					</span>
					<span className="hidden md:flex md:gap-[1.88rem]">
						<Link href="program">JOBS</Link>
						<span className="flex items-center gap-[0.5rem]">
							<Link href="program">MENU</Link>
							<figure className="relative h-[0.75rem] w-[0.75rem]">
								<Image
									src="/icon/menu.svg"
									alt="Aries Logo"
									fill
								/>
							</figure>
						</span>
					</span>
					{/* menu icon mobile */}
					<figure className="relative h-[1.25rem] w-[1.25rem] md:hidden">
						<Image src="/icon/menu.svg" alt="Aries Logo" fill />
					</figure>
				</div>
			</nav>

			{/* hero title */}
			<section className="relative mx-auto pb-[11.88rem] pt-[11.88rem] md:pb-[13rem] md:pt-[13rem]">
				<div className="mx-auto max-w-[72.5rem] px-[1.25rem] md:px-[2.5rem]">
					<h1 className="text-h1 md:text-center">
						We Are Here For Your{" "}
						<div className="angular-gradient inline-block bg-clip-text text-transparent">
							Artificial Intelligence
						</div>{" "}
						Startup.
					</h1>
					<figure className="relative mx-auto hidden h-[3.62rem] w-[0.75rem] animate-bounce md:mt-[3rem] md:block">
						<Image
							src="/icon/scroll-arrow.svg"
							fill
							alt="Artificial Face"
						/>
					</figure>
				</div>
				<Image
					src="/images/hero-pattern.webp"
					fill
					alt=""
					className="-z-10 object-cover"
				/>
			</section>

			{/* program section */}
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
					<h2 className="text-h2">
						building faster, smarter,together.
					</h2>
					<p className="text-secondary-title">
						ARIES is a part of PIXIRHY, a global venture capital
						firm providing multi stage investment to develop and
						scale our founders’ big ideas. SOSV invests in every HAX
						program startup with follow-on through pre-iPO.
					</p>
					<ArrowButton title="VIEW PROGRAM" />
				</div>
			</section>

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
