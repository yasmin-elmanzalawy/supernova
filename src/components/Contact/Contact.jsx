import React, { useState } from "react";
import blobs from "../../assets/blobs.png";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import Navbar from "../Navbar/Navbar";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import Footer from "../Footer/Footer";

export default function Client() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "fc2a4b87-11ac-4ca7-a7a7-464815db1c4c",
        ...formData,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-[#000000] overflow-hidden text-white  pt-24 md:pt-36">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover flex flex-col"
        >
          <Navbar />

          <div className="mx-12 text-center">
            <h2 className="text-center text-4xl font-bold mt-5 md:mt-12 text-white py-8">
              GET IN TOUCH
            </h2>
            <p className="text-center text-white text-2xl p-5">
              Your Email Address Will Not Be Published. Required Fields are
              Remarked*
            </p>
          </div>

          <div className="flex justify-center md:gap-24 flex-wrap md:m-12">
            {/* === FORM SECTION === */}
            <form
              onSubmit={handleSubmit}
              className="bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative z-50 mt-4 md:mt-0"
            >
              <div className="p-12">
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="m-5">
                    <label htmlFor="firstName" className="text-[#7D009B] px-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="m-5">
                    <label htmlFor="lastName" className="text-[#7D009B] px-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="m-5">
                  <label htmlFor="email" className="text-[#7D009B] px-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                    placeholder="Your Email"
                  />
                </div>

                <div className="m-5">
                  <label htmlFor="message" className="text-[#7D009B] px-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] m-auto block"
                  >
                    Submit
                  </button>
                </div>

                {submitted && (
                  <p className="text-green-500 text-center mt-4">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-4">{error}</p>
                )}
              </div>
            </form>

            {/* === CONTACT INFO === */}
            <div className="flex flex-col justify-center bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative z-50 my-12 md:mt-0">
              <div>
                <h3 className="text-[#7D009B] underline py-2 mx-5 font-bold text-3xl">
                  Contact Information
                </h3>
                <div className="flex items-center m-5">
                  <img src={email} className="w-[50px] h-[50px]" alt="email icon" />
                  <div className="px-5">
                    <p className="text-[#7D009B]">Email:</p>
                    <p>info@supernova-gaming.com</p>
                  </div>
                </div>
                <div className="flex items-center m-5">
                  <img src={phone} className="w-[50px] h-[50px]" alt="phone icon" />
                  <div className="px-5">
                    <p className="text-[#7D009B]">Phone Number:</p>
                    <p>+20 15 0393 3933</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
