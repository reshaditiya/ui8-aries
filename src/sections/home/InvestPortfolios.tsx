import Image from "next/image"

export default function InvestPortfolios({}) {
	return (
		<section className="mx-auto mt-[6.25rem] max-w-[72.5rem] px-[1.25rem] md:mt-[12.5rem] md:px-[2.5rem]">
			<div className="linier-gradient h-[1px]" />
			<h2 className="text-h2 mt-[1.25rem] md:mt-[1.88rem]">
				our Investment Portfolios.
			</h2>
			<ul className="mt-[2.5rem] flex flex-wrap justify-around gap-[2.5rem] md:mt-[3.5rem]">
				{portfolios.map((portfolio) => (
					<li className="group/portfolio flex w-[12rem] items-center justify-center gap-[0.5rem] py-[1rem] transition-all hover:bg-tertiary-dark/20 md:w-[15rem] md:py-[1.5rem]">
						<figure className="relative h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem]">
							<Image
								src={portfolio.logo}
								fill
								alt={portfolio.company}
								className="object-contain"
							/>
						</figure>
						<span className="group-hover/portfolio:linier-full font-display text-[1.62rem] font-[300] uppercase leading-[1.62rem] text-secondary-title group-hover/portfolio:bg-clip-text group-hover/portfolio:text-transparent md:text-[2.25rem] md:leading-[2.25rem]">
							{portfolio.company}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}

const portfolios: { company: string; logo: string }[] = [
	{ company: "ATOMIN", logo: "/images/home/portfolio-logo/atomin.svg" },
	{ company: "ORACLE", logo: "/images/home/portfolio-logo/oracle.svg" },
	{ company: "JARVICE", logo: "/images/home/portfolio-logo/jarvice.svg" },
	{ company: "RAXON", logo: "/images/home/portfolio-logo/raxon.svg" },
	{ company: "TINDO", logo: "/images/home/portfolio-logo/tindo.svg" },
	{ company: "KAWASKI", logo: "/images/home/portfolio-logo/kawaski.svg" },
	{ company: "CYPHER", logo: "/images/home/portfolio-logo/cypher.svg" },
	{ company: "ORDIX", logo: "/images/home/portfolio-logo/ordix.svg" },
]
