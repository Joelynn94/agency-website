import Link from "next/link";
import Layout from "../components/layout";

export default function OnlineAdvertising() {
	return (
		<Layout>
			<section className="relative py-32 px-12 pl-6 lg:py-44 lg:pl-32 bg-gradient-to-br from-blue-500 to-green-400">
				<div className="h-full absolute top-0 left-0">
					<img
						src="images/social.jpg"
						alt="People socializing."
						className="w-full h-full object-cover opacity-10"
					/>
				</div>
				<h1 className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-blue-50 z-10">
					Online Advertising
				</h1>
				<p className="font-semibold lg:w-1/2 text-3xl lg:text-5xl max-w-prose text-blue-50">
					A focused strategy is key to achieving success here.
				</p>
			</section>

			<section className="py-24">
				<article>
					<div className="max-w-prose mx-6 lg:mx-auto text-gray-600">
						<p className="mb-12 text-lg lg:text-xl font-semibold text-gray-700">
							On this page, you want to explain to the visitor the
							importance of online advertising and it can be used
							to bring in more clients. Use infographics, lists,
							and pictures to get your message across.
						</p>
						<p className="mb-4">
							Nunc dictum nec tellus nec hendrerit. Etiam leo
							felis, congue vitae placerat vel, vestibulum id
							massa. Maecenas cursus, ante sit amet placerat
							rhoncus, risus est auctor diam, in pulvinar magna
							lectus at erat.
						</p>
						<p className="mb-4">
							Nullam eget neque tellus. In tellus odio, pretium ac
							risus vitae, bibendum dignissim lectus. Vestibulum
							hendrerit libero nec mauris feugiat vehicula. Duis
							malesuada diam tempor odio efficitur, vitae faucibus
							purus ornare.
						</p>
						<p className="mb-4">
							Aenean rhoncus mauris id sapien gravida lobortis.
							Praesent vel eleifend purus. Nulla euismod pharetra
							massa sit amet vestibulum. Interdum et malesuada
							fames ac ante ipsum primis in faucibus. Cras nec
							semper quam.
						</p>

						<h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
							A Secondary Heading
						</h2>
						<p className="mb-4">
							Nunc dictum nec tellus nec hendrerit. Etiam leo
							felis, congue vitae placerat vel, vestibulum id
							massa. Maecenas cursus, ante sit amet placerat
							rhoncus, risus est auctor diam, in pulvinar magna
							lectus at erat.
						</p>
						<p className="mb-4">
							Nullam eget neque tellus. In tellus odio, pretium ac
							risus vitae, bibendum dignissim lectus. Vestibulum
							hendrerit libero nec mauris feugiat vehicula. Duis
							malesuada diam tempor odio efficitur, vitae faucibus
							purus ornare.
						</p>
						<p className="mb-4">
							Aenean rhoncus mauris id sapien gravida lobortis.
							Praesent vel eleifend purus. Nulla euismod pharetra
							massa sit amet vestibulum. Interdum et malesuada
							fames ac ante ipsum primis in faucibus. Cras nec
							semper quam.
						</p>

						<h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
							Summary
						</h2>
						<p className="mb-4">
							Nullam eget neque tellus. In tellus odio, pretium ac
							risus vitae, bibendum dignissim lectus. Vestibulum
							hendrerit libero nec mauris feugiat vehicula. Duis
							malesuada diam tempor odio efficitur, vitae faucibus
							purus ornare.
						</p>
						<p className="mb-4">
							Aenean rhoncus mauris id sapien gravida lobortis.
							Praesent vel eleifend purus. Nulla euismod pharetra
							massa sit amet vestibulum. Interdum et malesuada
							fames ac ante ipsum primis in faucibus. Cras nec
							semper quam.
						</p>
					</div>
				</article>
			</section>

			<section className="relative bg-gradient-to-r from-blue-500 to-green-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<h2 className="text-xl text-center font-bold text-white">
						We focus on more patients so you can focus on your
						practice.
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
