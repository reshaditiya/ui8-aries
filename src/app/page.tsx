import { Navbar } from "@/components"
import { HeroTitle, Program, InvestProgram } from "@/sections/home"

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroTitle />
			<Program />
			<InvestProgram />
		</main>
	)
}
