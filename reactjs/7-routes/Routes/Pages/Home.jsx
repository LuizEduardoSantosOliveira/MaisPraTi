import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../authContext/AuthContext'
import { useContext } from "react";

function Home(){
    const {isAuthenticated, logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate('/about')
    }
    const goToContact = () => {
        navigate('/contact')
    }

    const goToServices = () => {
        navigate('/services')
    }
    return(
        <div>
            <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            { isAuthenticated ? (
                <>
                    <Link to="/services">Services</Link>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <Link to="/contact">Contact</Link>
        </nav>
        </div>
    )
}


export default Home