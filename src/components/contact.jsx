import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-black-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Email: support@wildsafari.com</p>
          <p className="text-gray-700">Phone: +91 98765 43210</p>
          <p className="text-gray-700">Location: Gujrat, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
