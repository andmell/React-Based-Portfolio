import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
function App() {
  return (
    <div className='mainParent'>
      <Nav />
      <div className='body'><Outlet/></div>
      <Footer />
    </div>
  );
}

export default App;
