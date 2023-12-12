export default function AboutMePage() {
  return (
    <div className="main-container text-center">
      <h3 className="text-6xl pt-5">About me</h3>
      <div className="grid grid-cols-2">
        <div className="about-me col-start-1 col-end-1 text-center">
          <h4 className="text-4xl">Here's a little blurb</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="skills col-start-2 col-end-2 text-center text-4xl">
          <h4>Skills</h4>
        </div>
      </div>
    </div>
  );
}
