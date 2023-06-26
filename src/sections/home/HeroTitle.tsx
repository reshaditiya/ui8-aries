import Image from "next/image"

export default function HeroTitle({}) {
	return (
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
						src="/images/home/scroll-arrow.svg"
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
	)
}
