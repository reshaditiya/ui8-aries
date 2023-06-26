import Image from "next/image"
import Link from "next/link"

export function Navbar({}) {
	return (
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
							<Image src="/icon/menu.svg" alt="Aries Logo" fill />
						</figure>
					</span>
				</span>
				{/* menu icon mobile */}
				<figure className="relative h-[1.25rem] w-[1.25rem] md:hidden">
					<Image src="/icon/menu.svg" alt="Aries Logo" fill />
				</figure>
			</div>
		</nav>
	)
}
