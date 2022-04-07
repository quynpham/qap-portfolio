import React from "react";

const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative text-electricblue ">
      <div className="py-10 mx-auto flex sm:flex-nowrap flex-wrap md:px-20 md:text-left px-5">
        <form
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-center text-electricblue text-5xl p-2">
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
              className="w-full bg-transparent rounded border border-gray-300 focus:border-electricblue focus:ring-2 focus:ring-electricblue text-base outline-none text-electricblue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-electricblue">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-electricblue focus:ring-2 focus:ring-electricblue text-base outline-none text-electricblue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-electricblue">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-electricblue focus:ring-2 focus:ring-electricblue text-base outline-none text-electricblue py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="sm:text-base md:text-lg text-gray-50 bg-electricblue border border-electricblue py-2 px-4 focus:outline-none hover:bg-transparent hover:text-electricblue rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
