import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

export default function OurWork() {
  return (
    <Layout>
      <section className="relative py-32 px-12 pl-6 lg:py-44 lg:pl-32 bg-gradient-to-br from-blue-500 to-green-400">
        <div className="h-full absolute top-0 left-0">
          <Image
            src="images/our_work.jpg"
            alt="Puzzle pieces"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <h1 className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-blue-50 z-10">
          Our Work
        </h1>
        <p className="font-semibold lg:w-1/2 text-3xl lg:text-5xl max-w-prose text-blue-50">
          A few select pieces for your viewing pleasure. One of these could be
          yours...
        </p>
      </section>

      <section className="pt-24 pb-40 lg:pb-40">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-20 lg:mb-24">
          Select Works
        </h2>

        <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
          <div className="lg:flex items-center justify-center gap-x-14">
            <div className="lg:w-1/4">
              <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                Dr. Toothy
              </h2>
              <p className="leading-relaxed my-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in arcu venenatis est laoreet habitant nibh. Eu proin egestas
                consequat pharetra sit volutpat consectetur mauris. Scelerisque
                ac lectus vitae, amet sed vel molestie dui. Ullamcorper.
              </p>
              <a
                className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-md bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                href="/project-url.html"
              >
                View Project
              </a>
            </div>
            <div className="relative lg:rounded-xl h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 overflow-hidden">
              <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-blue-600"></div>
              <Image
                className="h-full w-full object-cover"
                src="./images/work1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
          <div className="lg:flex flex-row-reverse items-center justify-center gap-x-14">
            <div className="lg:w-1/4">
              <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                Mandible & Co.
              </h2>
              <p className="leading-relaxed my-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in arcu venenatis est laoreet habitant nibh. Eu proin egestas
                consequat pharetra sit volutpat consectetur mauris. Scelerisque
                ac lectus vitae, amet sed vel molestie dui. Ullamcorper.
              </p>
              <a
                className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-md bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                href="/"
              >
                View Project
              </a>
            </div>
            <div className="relative lg:rounded-xl h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tr-10xl lg:rounded-bl-10xl overflow-hidden">
              <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-blue-600"></div>
              <Image
                className="h-full w-full object-cover"
                src="./images/work2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
          <div className="lg:flex items-center justify-center gap-x-14">
            <div className="lg:w-1/4">
              <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                SensoSmile
              </h2>
              <p className="leading-relaxed my-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in arcu venenatis est laoreet habitant nibh. Eu proin egestas
                consequat pharetra sit volutpat consectetur mauris. Scelerisque
                ac lectus vitae, amet sed vel molestie dui. Ullamcorper.
              </p>
              <a
                className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-md bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                href="/"
              >
                View Project
              </a>
            </div>
            <div className="relative lg:rounded-xl h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 overflow-hidden">
              <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-blue-600"></div>
              <Image
                className="h-full w-full object-cover"
                src="./images/work3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
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
