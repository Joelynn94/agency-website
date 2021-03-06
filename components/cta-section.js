export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-green-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Get in touch at +1 (440)-777-7777
        </h2>
        <a
          href="#"
          className="px-8 py-4 mt-8 lg:mt-0 uppercase rounded inline-block font-bold lg:ml-8 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-blue-50"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
