import Link from "next/link";
import Layout from "../components/layout";

export default function Pricing() {
	return (
		<Layout>
			<section className="min-h-screen pt-40 pb-24 lg:py-48 flex justify-center items-center py-32 px-12 bg-gray-100">
				<div className="text-center font-semibold">
					<h1 className="text-5xl">
						<span className="text-green-500 tracking-wide">
							Flexible{" "}
						</span>
						<span className="text-gray-800">Plans</span>
					</h1>
					<p className="pt-6 text-xl text-gray-500 font-normal w-full px-4 md:px-8 md:w-full">
						Choose a plan that works best for you and your business.
					</p>
					<div className="pt-16 lg:pt-24 flex flex-col lg:flex-row">
						<div className="md:w-96 md:mx-auto lg:w-80 xl:w-96 p-8 bg-white mx-4 lg:mx-0 mb-16 lg:mb-0 text-center rounded-3xl lg:pr-16 shadow-md lg:shadow-lg">
							<h1 className="text-black font-semibold text-2xl">
								Basic
							</h1>
							<span className="block italic pt-6 tracking-wide font-medium text-xs uppercase text-gray-400">
								Starts At
							</span>
							<p className="tracking-wide">
								<span className="text-gray-400 align-top">
									${" "}
								</span>
								<span className="text-3xl font-semibold">
									250
								</span>
								<span className="text-gray-400 font-medium">
									/ month
								</span>
							</p>
							<hr className="mt-4 border-1" />
							<div className="pt-8">
								<p className="flex items-center font-semibold text-gray-400 text-left">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										Get started with{" "}
										<span className="text-black">SEO</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										Monthly{" "}
										<span className="text-black">
											ROI assessment
										</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										<span className="text-black">
											Ongoing
										</span>{" "}
										website support
									</span>
								</p>

								<Link href="/contact">
									<a className="w-full py-4 border-2 text-green-500 border-green-500 mt-8 rounded-xl hover:text-white hover:bg-green-400 hover:border-green-400">
										<span className="font-medium uppercase">
											Contact Us
										</span>
									</a>
								</Link>
							</div>
						</div>

						<div className="md:w-96 md:mx-auto lg:w-80 xl:w-96 relative p-8 bg-gray-900 mx-4 lg:mx-0 mb-16 lg:mb-0 text-center rounded-3xl text-white md:border-4 shadow-md lg:shadow-lg border-white md:transform lg:scale-125">
							<h1 className="text-white font-semibold text-2xl">
								Premium
							</h1>
							<span className="block italic pt-6 tracking-wide font-medium text-xs uppercase text-gray-400">
								Starts At
							</span>
							<p className="tracking-wide">
								<span className="text-gray-400 align-top">
									${" "}
								</span>
								<span className="text-3xl font-semibold">
									390
								</span>
								<span className="text-gray-400 font-medium">
									/ month
								</span>
							</p>
							<hr className="mt-4 border-1 border-gray-600" />
							<div className="pt-8">
								<p className="flex items-center font-semibold text-gray-400 text-left">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="white"
											/>
										</svg>
									</span>
									<span className="pl-2">
										All features in{" "}
										<span className="text-white">
											Basic
										</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="white"
											/>
										</svg>
									</span>
									<span className="pl-2">
										2x targeted{" "}
										<span className="text-white">
											blog articles
										</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="white"
											/>
										</svg>
									</span>
									<span className="pl-2">
										<span className="text-white">
											Effective
										</span>{" "}
										web design
									</span>
								</p>

								<Link href="/contact">
									<a className="">
										<p className="w-full py-4 bg-green-500 mt-8 rounded-xl text-white hover:bg-green-400">
											<span className="font-medium uppercase">
												Contact Us
											</span>
										</p>
									</a>
								</Link>
							</div>
							<div className="absolute top-4 right-4">
								<p className="bg-gradient-to-br from-blue-800 to-green-400 font-semibold px-4 py-1 rounded-full uppercase text-xs">
									Popular
								</p>
							</div>
						</div>

						<div className="md:w-96 md:mx-auto lg:w-80 xl:w-96 p-8 bg-white mx-4 lg:mx-0 mb-16 lg:mb-0 text-center rounded-3xl shadow-md lg:pl-16 lg:shadow-lg">
							<h1 className="text-black font-semibold text-2xl">
								Enterprise
							</h1>
							<span className="block italic pt-6 tracking-wide font-medium text-gray-400 uppercase text-xs">
								Starts At
							</span>
							<p className="tracking-wide">
								<span className="text-gray-400 align-top">
									${" "}
								</span>
								<span className="text-3xl font-semibold">
									430
								</span>
								<span className="text-gray-400 font-medium">
									/ month
								</span>
							</p>
							<hr className="mt-4 border-1" />
							<div className="pt-8">
								<p className="flex items-center font-semibold text-gray-400 text-left">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										All features in{" "}
										<span className="text-black">
											Premium
										</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										Daily{" "}
										<span className="text-black">
											social media engagement
										</span>
									</span>
								</p>
								<p className="flex items-center font-semibold text-gray-400 text-left pt-5">
									<span className="align-middle pr-3">
										<svg
											width="24"
											height="18"
											viewBox="0 0 24 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
												fill="black"
											/>
										</svg>
									</span>
									<span className="pl-2">
										<span className="text-black">
											Advanced
										</span>{" "}
										adword management
									</span>
								</p>

								<Link href="/contact">
									<a className="w-full py-4 border-2 text-green-500 border-green-500 mt-8 rounded-xl hover:text-white hover:bg-green-400 hover:border-green-400">
										<span className="font-medium uppercase">
											Contact Us
										</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pt-24 pb-32 lg:pt-40 lg:pb-60 flex flex-col items-center justify-center">
				<h1 className="text-center text-4xl mx-4 lg:text-5xl text-gray-800">
					Frequently Asked Questions
				</h1>
				<ul className="mt-24 w-full md:mx-auto md:w-2/3 lg:mx-auto lg:w-8/12">
					<div className="mx-4">
						<h3 className="font-workSans uppercase text-xl font-semibold text-gray-500">
							Services
						</h3>

						<li className="inline-block w-full my-8">
							<details className=" shadow-md bg-gray-100">
								<summary className="cursor-pointer flex px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
									<div className="flex items-center">
										<span className="pr-4 lg:pr-8">
											<svg
												className="h-3 fill-current text-gray-600 "
												width="28"
												height="18"
												viewBox="0 0 28 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
											</svg>
										</span>
										<span>
											Some insightful question that will
											be promptly answered?
										</span>
									</div>
								</summary>
								<p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
									Here is the answer to said insightful
									question which does include many
									illuminating responses that do their utmost
									at portraying an air of trust,
									professionalism in a beautifully succinct
									manner.
								</p>
							</details>
						</li>

						<li className="inline-block w-full my-8">
							<details className=" shadow-md bg-gray-100">
								<summary className="cursor-pointer flex px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
									<div className="flex items-center">
										<span className="pr-4 lg:pr-8">
											<svg
												className="h-3 fill-current text-gray-600 "
												width="28"
												height="18"
												viewBox="0 0 28 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
											</svg>
										</span>
										<span>
											Some insightful question that will
											be promptly answered?
										</span>
									</div>
								</summary>
								<p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
									Here is the answer to said insightful
									question which does include many
									illuminating responses that do their utmost
									at portraying an air of trust,
									professionalism in a beautifully succinct
									manner.
								</p>
							</details>
						</li>

						<li className="inline-block w-full my-8">
							<details className=" shadow-md bg-gray-100">
								<summary className="cursor-pointer flex px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
									<div className="flex items-center">
										<span className="pr-4 lg:pr-8">
											<svg
												className="h-3 fill-current text-gray-600 "
												width="28"
												height="18"
												viewBox="0 0 28 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
											</svg>
										</span>
										<span>
											Some insightful question that will
											be promptly answered?
										</span>
									</div>
								</summary>
								<p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
									Here is the answer to said insightful
									question which does include many
									illuminating responses that do their utmost
									at portraying an air of trust,
									professionalism in a beautifully succinct
									manner.
								</p>
							</details>
						</li>
					</div>

					<div className="mx-4">
						<h3 className="uppercase mt-16 lg:mt-32 font-workSans text-xl font-semibold text-gray-500">
							Pricing
						</h3>
						<li className="inline-block w-full my-8">
							<details className=" shadow-md bg-gray-100">
								<summary className="cursor-pointer flex px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
									<div className="flex items-center">
										<span className="pr-4 lg:pr-8">
											<svg
												className="h-3 fill-current text-gray-600 "
												width="28"
												height="18"
												viewBox="0 0 28 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
											</svg>
										</span>
										<span>
											Some insightful question that will
											be promptly answered?
										</span>
									</div>
								</summary>
								<p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
									Here is the answer to said insightful
									question which does include many
									illuminating responses that do their utmost
									at portraying an air of trust,
									professionalism in a beautifully succinct
									manner.
								</p>
							</details>
						</li>

						<li className="inline-block w-full my-8">
							<details className=" shadow-md bg-gray-100">
								<summary className="cursor-pointer flex px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
									<div className="flex items-center">
										<span className="pr-4 lg:pr-8">
											<svg
												className="h-3 fill-current text-gray-600 "
												width="28"
												height="18"
												viewBox="0 0 28 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
											</svg>
										</span>
										<span>
											Some insightful question that will
											be promptly answered?
										</span>
									</div>
								</summary>
								<p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
									Here is the answer to said insightful
									question which does include many
									illuminating responses that do their utmost
									at portraying an air of trust,
									professionalism in a beautifully succinct
									manner.
								</p>
							</details>
						</li>
					</div>
				</ul>
			</section>

			<section className="relative bg-gradient-to-r from-blue-500 to-green-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<h2 className="text-xl font-bold text-white">
						Get in touch at (+27) 81 343 4552
					</h2>
					<Link href="/contact">
						<a className="px-8 py-4 mt-8 lg:mt-0 uppercase rounded inline-block font-bold lg:ml-8 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-blue-50">
							Contact Us
						</a>
					</Link>
				</div>
			</section>
		</Layout>
	);
}
