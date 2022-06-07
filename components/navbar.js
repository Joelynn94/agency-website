export default function Navbar() {
	return (
		<nav className="absolute z-50 w-full top-0 left-0 flex flex-wrap items-center justify-between px-4 py-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a href="/" className="text-white font-bold text-3xl">
						Dentist Marketing
					</a>
					<button
						class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
					>
						<i className="fas fa-bars fa-xl text-white"></i>
					</button>
				</div>
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
					<li>
						<a
							className="px-3 py-2 flex items-center uppercase text-white font-semibold hover:underline"
							href="/about_us.html"
						>
							About Us
						</a>
					</li>
					<li>
						<a
							className="px-3 py-2 flex items-center uppercase text-white font-semibold hover:underline"
							href="/pricing.html"
						>
							Pricing
						</a>
					</li>
					<li>
						<a
							className="px-3 py-2 flex items-center uppercase text-white font-semibold hover:underline"
							href="/marketing.html"
						>
							Marketing
						</a>
					</li>
					<li>
						<a
							className="px-3 py-2 flex items-center uppercase text-white font-semibold hover:underline"
							href="/blog.html"
						>
							Blog
						</a>
					</li>
					<li>
						<a
							className="px-3 py-2 flex items-center uppercase text-white font-semibold hover:underline"
							href="/contact_us.html"
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
