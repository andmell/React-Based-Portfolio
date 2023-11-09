import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header"
function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className=""><Nav /></div>
      <div className='grow'><Outlet/></div>
      <div className=""><Footer /></div>
    </div>
  );
}

export default App;
