import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const review = localStorage.getItem("reviews");
    if (review) {
      const carts = JSON.parse(review);
      setReviews(carts); // Update the state with the data from localStorage
    } else {
      setReviews([]); // Set empty array if there's no review in localStorage
    }
  }, []);
  console.log(reviews);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.length > 0 ? (
          reviews.map(({ id, name, email, text }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
            >
              <h3 className="font-semibold text-lg">Name: {name}</h3>
              <p className="text-gray-600 mt-2">Email: {email}</p>
              <p className="text-gray-600 mt-2">Reviews: {text}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
