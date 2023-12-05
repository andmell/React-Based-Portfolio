

export default function AboutPage() {
  return (
    <div className="">
        <div className="grid grid-cols-7" id='body'>
          <div className="col-span-5 col-start-2 text-center">
          <h3 className="pt-5 text-4xl text-white">Hi there, I'm Andrew 👋</h3>
            <p className="pt-5 text-white">In my quest to become a proficient MERN developer, I've dived into a world of code, tutorials, and documentation, eagerly embracing each challenge as an opportunity for growth. I've honed my skills in building robust backend systems with Node.js and Express.js while creating dynamic and responsive front-end interfaces using React. My database management knowledge extends to MongoDB, and I'm continuously expanding my expertise in this full-stack development environment. Along the way, I've encountered and overcome numerous hurdles, and each victory fuels my determination to keep learning and improving.</p>
          <button className="px-10 p-2 my-10 bg-yellow-300 hover:bg-yellow-500 font-bold">Projects</button>
          </div>
          
        </div>
    </div>
  );
}
