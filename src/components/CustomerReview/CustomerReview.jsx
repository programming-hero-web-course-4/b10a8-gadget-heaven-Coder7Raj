import React, { useState } from "react";

const CustomerReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the review object
    const newReview = { name, email, text };

    // Get existing reviews from localStorage, or initialize an empty array if none exist
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Add the new review to the existing reviews array
    storedReviews.push(newReview);

    // Save the updated reviews array back to localStorage
    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    // Clear the form fields
    setName("");
    setEmail("");
    setText("");

    console.log("Review submitted:", newReview);
  };

  return (
    <div className="flex items-center justify-around p-16 bg-white rounded-lg">
      <div className="p-4 border border-gray-300 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Customer Review Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 outline-none rounded"
              required
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 outline-none rounded"
              required
            />
          </div>

          {/* Text input */}
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Review
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border border-gray-300 outline-none rounded"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <img
          className="w-[358px] rounded-lg"
          src="https://i.postimg.cc/KvGBBCSm/img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomerReview;
