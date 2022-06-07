export default function Hero() {
	return (
		<div class="cover bg-gradient-to-r from-blue-400 to-cyan-500 overflow-hidden flex items-center py-12 sm:py-24 rounded-br-3xl md:rounded-br-40xl">
			<div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
				<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
					<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
						The Freedom to Create the
						<span class="text-blue-700"> Websites </span>
						You Want
					</h1>
					<p class="mt-5 sm:mt-10 lg:w-10/12 font-normal text-center text-white text-sm sm:text-lg">
						A professonal website drives sales. Create a beautiful
						website to impress and engage new customers and
						establish your business online{" "}
					</p>
				</div>
				<div class="flex justify-center items-center">
					<button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-blue-700 py-2 sm:py-4 text-sm">
						Get Started
					</button>
					<button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300 hover:border-cyan-300 hover:text-blue-700 hover:bg-cyan-300  bg-transparent transition duration-150 ease-in-out lg:text-xl lg:font-bold rounded border border-cyan-300 text-cyan-300 px-4 sm:px-10 py-2 sm:py-4 text-sm">
						Live Demo
					</button>
				</div>
			</div>
		</div>
	);
}
