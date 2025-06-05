import React from "react";

const PhotographerCard = ({ photographer, onViewProfile }) => {
  const {
    name,
    profilePic,
    location,
    price,
    rating,
    tags,
  } = photographer;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-4">
      <img
        src={profilePic}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500 text-sm">Starting at ₹{price}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-xs px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={onViewProfile}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        View Profile
      </button>
    </div>
  );
};

export default PhotographerCard;
