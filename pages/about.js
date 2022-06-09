import Layout from "../components/layout";

export default function About() {
	return (
		<Layout>
			<section className="py-32 px-12 pl-6 lg:py-44 lg:pl-32 bg-gray-100">
				<h1 className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-green-400">
					About Us
				</h1>
				<p className="font-semibold lg:w-3/5 text-3xl lg:text-5xl max-w-prose text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Amet nisi risus ac, elit malesuada massa. Tristique
					porttitor sed odio enim sit molestie.
				</p>
			</section>

			<div className="-mt-60 lg:-mt-72 md:hidden">
				<svg
					className="h-80 w-full transform scale-y-200 mt-2 lg:scale-y-100 lg:h-full"
					width="1440"
					height="295"
					viewBox="0 0 1440 295"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 261.859L24 256.464C48 250.299 96 239.509 144 244.904C192 250.299 240 272.649 288 261.859C336 250.299 384 206.368 432 206.368C480 206.368 528 250.299 576 256.464C624 261.859 672 228.718 720 184.017C768 139.316 816 83.824 864 89.9898C912 95.3848 960 161.666 1008 173.227C1056 184.017 1104 139.316 1152 95.3848C1200 50.6833 1248 6.75252 1296 0.586802C1344 -4.8082 1392 28.3325 1416 45.2883L1440 62.244V295H1416C1392 295 1344 295 1296 295C1248 295 1200 295 1152 295C1104 295 1056 295 1008 295C960 295 912 295 864 295C816 295 768 295 720 295C672 295 624 295 576 295C528 295 480 295 432 295C384 295 336 295 288 295C240 295 192 295 144 295C96 295 48 295 24 295H0V261.859Z"
						fill="white"
					/>
				</svg>
			</div>

			<section className="flex flex-col items-center pb-40 mt-12 md:mt-0">
				<div className="flex flex-col items-center -mt-20 md:mt-24">
					<svg
						width="40"
						height="24"
						viewBox="0 0 40 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 0C14.66 0 11.34 2.66 10 8C12 5.34 14.34 4.34 17 5C18.52 5.38 19.62 6.48 20.82 7.7C22.78 9.7 25 12 30 12C35.34 12 38.66 9.34 40 4C38 6.66 35.66 7.66 33 7C31.48 6.62 30.4 5.52 29.18 4.3C27.22 2.3 25 0 20 0ZM10 12C4.66 12 1.34 14.66 0 20C2 17.34 4.34 16.34 7 17C8.52 17.38 9.6 18.48 10.82 19.7C12.78 21.7 15 24 20 24C25.34 24 28.66 21.34 30 16C28 18.66 25.66 19.66 23 19C21.48 18.62 20.4 17.52 19.18 16.3C17.22 14.3 15 12 10 12Z"
							fill="black"
						/>
					</svg>
					<h2 className="mt-4 tracking-wider font-bold text-3xl lg:text-4xl text-gray-700">
						A Bit More About Us
					</h2>
				</div>
				<p className="max-w-prose pt-20 pb-0 px-8 lg:py-24 lg:px-0 text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Varius integer odio vulputate ac pharetra eget nascetur. Ac
					turpis enim condimentum tortor sagittis.
					<br />
					Vulputate tincidunt mollis cursus gravida amet ullamcorper
					sit. Tellus purus semper mus vestibulum cras. Odio augue
					pellentesque pharetra euismod volutpat vitae rhoncus, dolor.
					Massa, lacus, felis ` ligula neque odio vestibulum.
					<br />
					Egestas elementum non augue ipsum auctor sem. Phasellus
					massa aliquam, eget enim. Suspendisse ` habitasse amet at
					orci nulla interdum gravida pellentesque fringilla.
					Ullamcorper fusce nulla integer pharetra sit sed elit.
					<br />
					Tellus lacinia diam odio aliquam maecenas. Scelerisque
					phasellus eu, porttitor facilisis. Nec est a ` tincidunt
					faucibus molestie ultrices. Amet, nullam ultrices aliquet
					consectetur dignissim purus egestas ornare neque.
					<br />
					Erat mauris, ac proin sed in. Consectetur aliquet vestibulum
					quam malesuada. Pretium rhoncus cursus ` sapien urna. Ac non
					at sit enim eu, tellus diam arcu faucibus. In a et magna
					quis felis. Nec, sit ipsum consectetur tempus morbi interdum
					non at.
					<br />
					<span className="text-sm font-semibold text-gray-600">
						- Thierry Henry, Chief Visionary
					</span>
				</p>
			</section>
		</Layout>
	);
}
