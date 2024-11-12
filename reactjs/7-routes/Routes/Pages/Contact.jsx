import { Link, useNavigate } from "react-router-dom";

function Contact(){
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate('/about')
    }
    const goToHome = () => {
        navigate('/home')
    }
    const goToContact = () => {
        navigate('/contact')
    }

    const goToServices = () => {
        navigate('/services')
    }
    return(
        <div>
            <h1>Contact Pages</h1>
            <Link to='/home'> <button onClick={goToHome}>Home</button></Link>
            <Link to='/about'> <button onClick={goToAbout}>About</button></Link>
            <Link to='/services'><button onClick={goToServices}>Services</button></Link>
           
        </div>
    )
}


export default Contact