import Image from "next/image";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <section className="pb-24">
        <article>
          <div className="relative overflow-hidden h-1/6 lg:screen w-full mb-12 lg:mb-16">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-blue-400  to-green-300 opacity-50"></div>
            <div className="absolute h-full w-full flex flex-col items-center justify-center">
              <div className="text-center lg:mb-2">
                <span className="uppercase tracking-wider font-semibold text-gray-600 text-sm">
                  Ideas
                </span>
                <span className="text-gray-600 mx-2 lg:mx-3 font-medium">
                  July 23, 2021
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0 text-gray-700">
                How to Generate Leads
              </h1>
            </div>

            <div className="h-screen">
              <Image
                className="h-full w-full object-cover"
                src="../images/lead_generation.jpg"
                alt="A man waiting in a cafe for someone that will never show up."
              />
            </div>
          </div>

          <div className="max-w-prose mx-6 lg:mx-auto text-gray-600">
            <p className="mb-12 text-lg lg:text-xl font-semibold text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eligendi libero sit nihil tempora, totam reprehenderit aliquam
              beatae obcaecati ratione. Libero consequatur cumque magnam ipsam
              quae sequi laudantium pariatur veritatis? Totam reprehenderit
              aliquame.
            </p>
            <p className="mb-4">
              Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue
              vitae placerat vel, vestibulum id massa. Maecenas cursus, ante sit
              amet placerat rhoncus, risus est auctor diam, in pulvinar magna
              lectus at erat.
            </p>
            <p className="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p className="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>

            <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
              A Secondary Heading
            </h2>
            <p className="mb-4">
              Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue
              vitae placerat vel, vestibulum id massa. Maecenas cursus, ante sit
              amet placerat rhoncus, risus est auctor diam, in pulvinar magna
              lectus at erat.
            </p>
            <p className="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p className="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>

            <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
              Summary
            </h2>
            <p className="mb-4">
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p className="mb-4">
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default FirstPost;
