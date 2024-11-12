import { Link, useNavigate } from "react-router-dom";

function Services(){
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

    return(
        <div>
            <h1>Services pages</h1>
            <Link to='/home'> <button onClick={goToHome}>Home</button></Link>
            <Link to='/about'> <button onClick={goToAbout}>About</button></Link>
            <Link to='/services'><button onClick={goToContact}>Contact</button></Link>
        </div>
    )
}


export default Services