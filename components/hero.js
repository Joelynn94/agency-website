export default function Hero() {
	return (
		<div className="rounded-br-3xl md:rounded-br-40xl overflow-hidden">
			<section
				className="cover relative bg-gradient-to-r from-blue-500 to-green-400 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center"
			>
				<div className="h-full absolute top-0 left-0 right-0 z-0">
					<img
						src="images/agency_hero.jpg"
						alt=""
						className="w-full h-full object-cover opacity-20"
					/>
				</div>

				<div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
					<div>
						<h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
							Are you ready for a ton more patients?
						</h1>
						<p className="text-blue-50 text-xl md:text-2xl leading-snug mt-4">
							We specialize in marketing for a focused cause to
							bring you results - more business.
						</p>
						<a
							href="/marketing.html"
							className="uppercase px-8 py-4 shadow-sm rounded inline-block mt-8 font-semibold hover:bg-blue-500 bg-blue-600 text-white"
						>
							Learn How
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
