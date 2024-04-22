import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a dedicated Software Engineer with a strong foundation in full-stack development, specializing in building scalable and efficient web applications. My experience includes developing secure REST APIs using Node.js and MongoDB, implementing JWT for robust user authentication, and crafting dynamic web interfaces with technologies like React.js and Golang. With proficiency in a diverse range of languages and developer tools, including .Net, C, C++, HTML, JavaScript, SQL, Tailwind CSS, and Material UI, I am committed to delivering high-quality solutions and enhancing user experiences.

        
        </p>

        <br />

        <p className="text-xl">
        In my recent role as a Software Engineer Intern at Globe Function, I demonstrated expertise in creating optimized APIs, emphasizing efficient data manipulation and system responsiveness. My project portfolio showcases my ability to design visually appealing and responsive user interfaces, implement advanced features such as user authentication, shopping cart functionality, and review systems, and collaborate effectively with cross-functional teams to deliver seamless user experiences. Additionally, with a strong coding profile on platforms like LeetCode and GeeksforGeeks, and leadership experience as the NSS Lead, I am eager to contribute my skills and experience to innovative projects and drive technological advancements.


        </p>
      </div>
    </div>
  );
};

export default About;