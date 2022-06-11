import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex flex-wrap items-center justify-between py-6">
			<div className="md:w-auto">
				<Link href="/">
					<a className="text-gray-800 font-bold text-2xl">
						Dentist Marketing
					</a>
				</Link>
			</div>

			<div>
				<button id="nav_toggle" className="h-8 w-8 md:hidden">
					<svg
						className="h-full w-auto"
						xmlns="http://www.w3.org/2000/svg"
						width="192"
						height="192"
						fill="white"
						viewBox="0 0 256 256"
					>
						<rect width="256" height="256" fill="none"></rect>
						<line
							x1="40"
							y1="128"
							x2="216"
							y2="128"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></line>
						<line
							x1="40"
							y1="64"
							x2="216"
							y2="64"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></line>
						<line
							x1="40"
							y1="192"
							x2="216"
							y2="192"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></line>
					</svg>
				</button>

				<div
					id="nav_content"
					className="absolute right-0 hidden md:block md:relative w-full md:w-auto"
				>
					<nav className="w-full rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
						<ul className="md:flex items-center">
							<li className="md:ml-4">
								<Link href="/about">
									<a className="py-2 inline-block md:text-gray-800 md:hidden lg:block font-semibold hover:underline visited:text-gray-800">
										About Us
									</a>
								</Link>
							</li>
							<li className="md:ml-4">
								<Link href="/pricing">
									<a className="py-2 inline-block md:text-gray-800 md:px-2 font-semibold hover:underline">
										Pricing
									</a>
								</Link>
							</li>
							<li className="md:ml-4">
								<Link href="/marketing">
									<a className="py-2 inline-block md:text-gray-800 md:px-2 font-semibold hover:underline">
										Marketing
									</a>
								</Link>
							</li>
							<li className="md:ml-4 md:hidden lg:block">
								<Link href="/blog">
									<a className="py-2 inline-block md:text-gray-800 md:px-2 font-semibold hover:underline">
										Blog
									</a>
								</Link>
							</li>
							<li className="md:ml-6 mt-3 md:mt-0">
								<Link href="/contact">
									<a className="inline-block font-semibold px-4 py-2 text-gray-800 bg-blue-600 md:bg-transparent md:text-gray-800 border border-gray-800 rounded hover:bg-gray-800 hover:text-green-400">
										Contact Us
									</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
