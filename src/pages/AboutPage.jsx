import mypic from "../assets/Self Photo sq.jpg"

export default function AboutPage() {
  return (
    <div className="">
    <div className="">
      <h1 className="text-4xl ">Hi there 👋 I'm Andrew</h1>
        <div className="grid grid-cols-7">
          <img src={mypic} className="w-64 pt-5 rounded-lg"/>
          <div className="col-span-5">
          <p className="pt-5">Hello, I'm an aspiring MERN (MongoDB, Express.js, React, Node.js) developer with a passion for building web applications and a relentless curiosity for all things tech. My journey into the world of web development began as a hobby, but it quickly evolved into a full-blown fascination. I'm driven by the idea of creating interactive and user-friendly web experiences, and MERN stack development is the path I've chosen to turn this vision into reality.</p>
            <p className="pt-5">In my quest to become a proficient MERN developer, I've dived into a world of code, tutorials, and documentation, eagerly embracing each challenge as an opportunity for growth. I've honed my skills in building robust backend systems with Node.js and Express.js while creating dynamic and responsive front-end interfaces using React. My database management knowledge extends to MongoDB, and I'm continuously expanding my expertise in this full-stack development environment. Along the way, I've encountered and overcome numerous hurdles, and each victory fuels my determination to keep learning and improving.</p>
            <p className="pt-5">When I'm not immersed in code, you can find me exploring new technologies, attending meetups, and contributing to open-source projects. My goal as an amateur MERN developer is to not only build exciting web applications but also to collaborate with others in the tech community to create meaningful solutions. I'm excited about the endless possibilities that the world of MERN stack development offers and can't wait to see where this journey takes me next.</p>
          </div>
          
        </div>
    </div>
    </div>
  );
}
