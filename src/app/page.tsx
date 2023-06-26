import { Navbar } from "@/components"
import {
	HeroTitle,
	Program,
	InvestProgram,
	InvestPortfolios,
} from "@/sections/home"

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroTitle />
			<Program />
			<InvestProgram />
			<InvestPortfolios />
		</main>
	)
}
