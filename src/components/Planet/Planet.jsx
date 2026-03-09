import React, { useState } from "react";
import planet from "../../assets/planet.png";
import "./Planet.css";
import star from "../../assets/semiministar.png";

export default function Planet() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ACCESS_KEY = "fc2a4b87-11ac-4ca7-a7a7-464815db1c4c"; // Replace with your actual Web3Forms access key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      setLoading(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: "New message from Planet form",
            sender_name: formData.firstName + " " + formData.lastName,
            sender_email: formData.email,
            message: formData.message,
            data: formData,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        } else {
          setError("Submission failed. Please try again later.");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  const stars = Array.from({ length: 10 }, () => ({
    top: Math.random() * 700,
    left: Math.random() * window.innerWidth,
    delay: Math.random() * 2.5,
  }));

  return (
    <div>
      <div className="orbit-container rela md:w-[600px] md:h-[600px] lg:h-[880px] lg:w-[880px] w-96 h-96 m-auto md:mb-0 mb-[600px] ">
        {stars.map((starItem, index) => (
          <img
            key={index}
            src={star}
            alt="star"
            className="star"
            style={{
              top: `${starItem.top}px`,
              left: `${starItem.left}px`,
              animationDelay: `${starItem.delay}s`,
            }}
          />
        ))}

        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2">
          <img className="md:mt-[-40px] mt-[-10px]" src={planet} />
        </div>
        <div className="orbit orbit-3"></div>
        <div className="orbit orbit-4"></div>
        <div className="planet"></div>

        <div className="bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative  mt-24 md:mt-0">
          <form onSubmit={handleSubmit} className="p-12">
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
                disabled={loading}
                className="self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] m-auto block"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

            {submitted && (
              <p className="text-green-500 text-center mt-4">
                Thank you! Your message has been sent.
              </p>
            )}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
