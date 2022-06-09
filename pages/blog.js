import Link from "next/link";
import Layout from "../components/layout";

export default function Blog() {
    return (
        <Layout>
            <section className="pt-32 lg:pt-40">
                <h2 className="text-left mx-4 uppercase md:mx-0 font-medium md:text-center text-gray-600">
                    Latest Articles
                </h2>
                <ul className="mx-4 -mt-12 md:mx-auto md:w-11/12 lg:mx-auto lg:w-1/2">
                    <div className="relative">
                        <Link href="/posts/first-post">
                            <a className="flex flex-col md:flex-row gap-x-12 p-2 md:h-60 my-20 rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border">
                                <div className="h-60 md:h-auto md:w-2/5">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="./images/lead_generation.jpg"
                                        alt="A man sitting alone in a cafe waiting for someone who will never show up."
                                    />
                                </div>
                                <div className="">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-gray-700 text-xs">
                                            Advice
                                        </span>
                                        <span className="text-gray-400 mx-2 font-medium text-sm">
                                            Aug 20, 2021
                                        </span>
                                    </div>
                                    <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                                        How to Generate Leads
                                    </h2>
                                    <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Possimus eligendi
                                        libero sit nihil tempora, totam
                                        reprehenderit aliquam beatae obcaecati
                                        ratione.
                                    </p>
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
                                            <img
                                                className="w-full h-full object-cover object-bottom"
                                                src="./images/writer-3.png"
                                                alt="A smiling Satoshi Nakamoto."
                                            />
                                        </div>
                                        <div className="ml-2 text-xs">
                                            <span className="block font-semibold text-gray-700">
                                                Satoshi Nakamoto
                                            </span>
                                            <span className="block font-medium text-gray-500">
                                                Chief Technical Writer
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="relative">
                        <Link href="/blog">
                            <a className="flex flex-col md:flex-row gap-x-12 p-2 md:h-60 my-20 rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border">
                                <div className="h-60 md:h-auto md:w-2/5">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="./images/increasing_your_reach.jpg"
                                        alt="Ahand reaching out."
                                    />
                                </div>
                                <div className="">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-gray-700 text-xs">
                                            Advice
                                        </span>
                                        <span className="text-gray-400 mx-2 font-medium text-sm">
                                            Feb 4, 2021
                                        </span>
                                    </div>
                                    <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                                        Increasing Your Reach
                                    </h2>
                                    <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Possimus eligendi
                                        libero sit nihil tempora, totam
                                        reprehenderit aliquam beatae obcaecati
                                        ratione.
                                    </p>
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
                                            <img
                                                className="w-full h-full object-cover object-bottom"
                                                src="./images/writer.png"
                                                alt="A smiling female George Orwell."
                                            />
                                        </div>
                                        <div className="ml-2 text-xs">
                                            <span className="block font-semibold text-gray-700">
                                                Georgina Orwell
                                            </span>
                                            <span className="block font-medium text-gray-500">
                                                Lead Happiness Architect
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="relative">
                        <Link href="/blog">
                            <a className="flex flex-col md:flex-row gap-x-12 p-2 md:h-60 my-20 rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border">
                                <div className="h-60 md:h-auto md:w-2/5">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="./images/sweating_the_small_stuff.jpg"
                                        alt="A man working out and sweating... a lot."
                                    />
                                </div>
                                <div className="">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-gray-700 text-xs">
                                            Easter Egg
                                        </span>
                                        <span className="text-gray-400 mx-2 font-medium text-sm">
                                            Feb 29, 2021
                                        </span>
                                    </div>
                                    <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                                        Sweating the Small Stuff
                                    </h2>
                                    <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Possimus eligendi
                                        libero sit nihil tempora, totam
                                        reprehenderit aliquam beatae obcaecati
                                        ratione.
                                    </p>
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
                                            <img
                                                className="w-full h-full object-cover object-bottom"
                                                src="./images/writer-2.png"
                                                alt="A smiling female Jack Johnson."
                                            />
                                        </div>
                                        <div className="ml-2 text-xs">
                                            <span className="block font-semibold text-gray-700">
                                                Jack Johnson
                                            </span>
                                            <span className="block font-medium text-gray-500">
                                                Lead Editor
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </ul>
            </section>

            <section className="pt-24 pb-32 lg:pt-32 lg:pb-40 mx-8 lg:mx-0">
                <div className="relative flex justify-center">
                    <div className="relative">
                        <div className="p-20 text-center bg-white custom_color_border-thick">
                            <h2 className="text-3xl font-bold mb-14 text-gray-900">
                                Ready to Get Started?
                            </h2>
                            <Link href="/pricing">
                                <a className="inline-block uppercase text-center cursor-pointer font-semibold px-5 py-2 lg:px-10 border bg-gray-900 text-gray-50 mx-2 lg:mx-8 transition-all duration-300 shadow-sm hover:bg-gray-700 hover:shadow-md focus:ring-2 focus:ring-blue-300">
                                    View Pricing
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
