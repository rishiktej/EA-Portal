import React from "react";
import a from "../../../EA/public/logos/akhil.png";
import s from "../../../EA/public/logos/sai.png";
import r from "../../../EA/public/logos/rishik.png";
import ri from "../../../EA/public/logos/ritesh.png";
import p from "../../../EA/public/logos/puppy.png";
import sd from "../../../EA/public/logos/siddu.png";

const creators = [
  {
    name: "Akhil",
    photo: a, // Correctly using the imported photo
    description:
      "Lead Developer and UI/UX Designer with a passion for creating beautiful and functional user interfaces.",
  },
  {
    name: "Sai",
    photo: s, // Correctly using the imported photo
    description:
      "Frontend Developer specializing in React and modern web technologies, committed to crafting seamless user experiences. CGPA Aspirant!!",
  },
  {
    name: "Rishik",
    photo: r, // Correctly using the imported photo
    description:
      "Backend Developer focused on scalable solutions and performance optimization, ensuring robust and efficient server-side operations.",
  },
  {
    name: "Ritesh",
    photo: ri, // Correctly using the imported photo
    description:
      "Full Stack Developer with experience in various technologies, passionate about building high-performance web applications.",
  },
  {
    name: "Puppy",
    photo: p, // Correctly using the imported photo
    description:
      "Creative designer with a keen eye for detail,Oracle,Darwinbox Aspirant",
  },
  {
    name: "Siddu",
    photo: sd, // Correctly using the imported photo
    description:
      "Product Manager who excels at translating user needs into actionable project goals, ensuring successful project delivery.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-600 mb-8">
          Meet the Creators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={creator.photo}
                alt={creator.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-purple-600 mb-2">
                {creator.name}
              </h2>
              <p className="text-gray-600">{creator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
