import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative text-seeweed ">
      <div className="py-10 mx-auto flex sm:flex-nowrap flex-wrap md:px-20 md:text-left px-5">
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-center text-seeweed text-5xl p-2">
            Contact
          </h2>
          <p className="p-3 leading-relaxed mb-5">
            Got a question or a proposal, ask for my resume or just want to say hello ? Fill in the form below. I look forward to hearing from you !
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-seeweed focus:ring-2 focus:ring-seeweed text-base outline-none text-seeweed py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-seeweed">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-seeweed focus:ring-2 focus:ring-seeweed text-base outline-none text-seeweed py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-seeweed">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-seeweed focus:ring-2 focus:ring-seeweed text-base outline-none text-seeweed py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="sm:text-base md:text-lg text-gray-50 bg-seeweed border border-seeweed py-2 px-4 focus:outline-none hover:bg-transparent hover:text-seeweed rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
