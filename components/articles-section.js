export default function ArticlesSection() {
	return (
		<section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 md:py-32">
			<div className="flex flex-col md:flex-row lg:-mx-8">
				<div className="w-full lg:w-1/2 lg:px-8">
					<h6 className="text-sm uppercase font-semibold tracking-widest text-gray-500">
						Improve Right Now
					</h6>
					<h2 className="text-3xl leading-tight font-bold mt-4">
						7 Lead Generation Tips for Dentist Websites
					</h2>
					<p className="mt-8 leading-relaxed">
						Aenean ut tellus tellus. Suspendisse potenti. Nullam
						tincidunt lacus tellus, sed aliquam est vehicula a.
						Pellentesque consectetur condimentum nulla, eleifend
						condimentum purus vehicula in. Donec convallis
						sollicitudin facilisis. Integer nisl ligula, accumsan
						non tincidunt ac, imperdiet in enim. Donec efficitur
						ullamcorper metus, eu venenatis nunc. Nam eget neque
						tempus, mollis sem a, faucibus mi.
					</p>
					<a
						href="/posts/first-post"
						className="inline-block mt-4 font-medium hover:underline text-gray-500"
					>
						Read article &#8594;
					</a>
				</div>

				<div className="w-full lg:w-1/2 lg:px-8 my-20 md:my-0">
					<div className="bg-gray-400 w-full h-96 rounded-lg overflow-hidden">
						<img
							src="./images/lead_generation.jpg"
							alt="A man sitting alone in a coffee shop waiting for a client that will never appear."
							className="h-full w-full object-cover"
						/>
					</div>

					<p className="italic text-sm mt-2 text-right">
						Aenean ante nisi, gravida non mattis semper.
					</p>
				</div>
			</div>
		</section>
	);
}
