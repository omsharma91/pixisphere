import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    const fetchPhotographer = async () => {
      const res = await fetch(`http://localhost:3001/photographers/${id}`);
      const data = await res.json();
      setPhotographer(data);
    };
    fetchPhotographer();
  }, [id]);

  if (!photographer) return <p className="p-4">Loading profile...</p> ;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600">
        ← Back
      </button>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={photographer.profilePic}
            alt={photographer.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">{photographer.name}</h1>
            <p className="text-gray-500">{photographer.location}</p>
            <p className="text-sm mt-2">{photographer.bio}</p>
            <p className="mt-2 text-green-600 font-semibold">
              ₹{photographer.price}
            </p>
            <p className="text-yellow-500">⭐ {photographer.rating}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {photographer.styles.map((style, i) => (
                <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-bold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            {photographer.portfolio.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`portfolio-${i}`}
                className="rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-bold mb-2">Reviews</h2>
          {photographer.reviews.map((r, i) => (
            <div
              key={i}
              className="border-t border-gray-200 py-2 text-sm text-gray-700"
            >
              <p className="font-semibold">
                {r.name} ({r.rating}⭐)
              </p>
              <p className="italic">{r.comment}</p>
              <p className="text-xs text-gray-400">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
