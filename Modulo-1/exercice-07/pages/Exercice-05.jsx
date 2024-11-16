import {Link, useNavigate} from "react-router-dom"
import FilteredList from "../components/FilteredList"

function Ex5(){

const navigate = useNavigate
 const goToEx9 = () => {
    navigate("/exercice-09")
 }
 const goToEx8 = () => {
    navigate("/exercice-08")
 }
 const goToEx7 = () => {
    navigate("/exercice-07")
 }
 const goToEx6 = () => {
    navigate("/exercice-06")
 }
 const goToEx1 = () => {
    navigate("/exercice-01")
 }
 const goToEx4 = () => {
    navigate("/exercice-04")
 }
 const goToEx3 = () => {
    navigate("/exercice-03")
 }
 const goToEx2 = () => {
    navigate("/exercice-02")
 }
 const goToEx10 = () => {
    navigate("/exercice-10")
 }


 return(
    <>
        <div className="form">
            <FilteredList/>
        </div>
        <div className="navigation">
            <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
            <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
            <Link to ="/exercice-08"><button onClick={goToEx8}>Exercicio 08</button></Link>
            <Link to ="/exercice-07"><button onClick={goToEx7}>Exercicio 07</button></Link>
            <Link to ="/exercice-06"><button onClick={goToEx6}>Exercicio 06</button></Link>
            <Link to ="/exercice-04"><button onClick={goToEx4}>Exercicio 04</button></Link>
            <Link to ="/exercice-03"><button onClick={goToEx3}>Exercicio 03</button></Link>
            <Link to ="/exercice-02"><button onClick={goToEx2}>Exercicio 02</button></Link>
            <Link to ="/exercice-01"><button onClick={goToEx1}>Exercicio 01</button></Link>

        </div>


    </>
    
    
 )
}


export default Ex5
