import TopAppBar from "../components/TopAppBar";
import { useState } from "react";

const interests = [
  [
    {
      name: "Hiking",
      info: "I love hiking and exploring new trails.",
      width: "w-1/3",
    },
    {
      name: "Drawing",
      info: "I enjoy drawing and experimenting with different art styles.",
      width: "w-1/2",
    },
    {
      name: "Backpacking",
      info: "Backpacking is one of my favorite activities.",
      width: "w-1/6",
    },
  ],
  [
    {
      name: "Coding",
      info: "Coding is both my work and hobby.",
      width: "w-2/5",
    },
    {
      name: "Reading",
      info: "I love reading fiction, especially sci-fi and fantasy.",
      width: "w-1/5",
    },
    {
      name: "Gaming",
      info: "I enjoy playing video games in my free time.",
      width: "w-2/5",
    },
  ],
  [
    {
      name: "Cooking",
      info: "I like experimenting with new recipes.",
      width: "w-1/4",
    },
    {
      name: "Photography",
      info: "I love capturing moments through my camera.",
      width: "w-1/2",
    },
    {
      name: "Music",
      info: "Listening to and playing music is a big part of my life.",
      width: "w-1/4",
    },
  ],
];

const InterestsButtons = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 font-jetbrains">
        <div className="space-y-4 w-4/5">
          {interests.map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-full h-20">
              {row.map((interest, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedInterest(interest)}
                  className={`h-full ${interest.width} bg-blue-500 text-white text-sm md:text-base px-2 md:px-4 rounded-full mx-1 hover:bg-blue-600 transition`}
                >
                  {interest.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        {selectedInterest && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedInterest(null)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
            >
              <p className="text-lg font-semibold">{selectedInterest.name}</p>
              <p className="mt-2">{selectedInterest.info}</p>
              <button
                onClick={() => setSelectedInterest(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestsButtons;
