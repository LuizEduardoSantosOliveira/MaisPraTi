import { Link, useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate()
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
            <h1>About pages</h1>
            <Link to='/home'> <button onClick={goToHome}>Home</button></Link>
            <Link to='/contact'> <button onClick={goToContact}>Contact</button></Link>
            <Link to='/services'><button onClick={goToServices}>Services</button></Link>
        </div>
    )
}


export default About