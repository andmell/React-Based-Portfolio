import { Link } from "react-router-dom";
import './footer.css';

export default function Footer(){
    return (
        <div className='flex footer justify-center items-center'>
            <div className="text-white items-center">
                <p>Made by <span className="underline"><Link to='/'>Andrew Mell</Link></span></p>
            </div>
        </div>
    );
}
