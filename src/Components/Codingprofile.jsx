import React from 'react';
import Leetcode from "../assets/portfolio/Leetcode.png";
import GFG from "../assets/portfolio/GeeksforGeeks.png";
import HackerRank from "../assets/portfolio/hackerRank.png";

const Codingprofile = () => {

    const codingprofile = [
       {
        id:1,
        src: Leetcode,
        codeLink: "https://leetcode.com/411RAJUT/",

       },
       {
        id:2,
        src: GFG,
        codeLink: "https://www.geeksforgeeks.org/user/809raj/",
       },
       {
        id:3,
        src: HackerRank,
        codeLink: "https://www.hackerrank.com/profile/809raj",
       },
    ];

  return (
    <div
    name="Codingprofile"
    className="py-40 bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen "
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Coding profile
        </p>
        <p className="py-6">Check  my coding profile right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {codingprofile.map(({ id, src , codeLink}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Coding Profile
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Codingprofile

