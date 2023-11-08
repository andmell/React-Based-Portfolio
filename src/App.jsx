import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header"
function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="bg-blue-300 flex"><Nav /></div>
      <div className='grow bg-blue-950'><Outlet/></div>
      <div className="bg-blue-300"><Footer /></div>
    </div>
  );
}

export default App;
