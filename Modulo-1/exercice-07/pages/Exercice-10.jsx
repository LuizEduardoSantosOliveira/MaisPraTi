import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";

function Ex10(){
  const [activeTab, setActiveTab] = useState('about'); 
  const navigate = useNavigate()
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
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
 const goToEx5 = () => {
    navigate("/exercice-05")
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
 const goToEx1 = () => {
    navigate("/exercice-01")
 }


 return(
    <>
     <div className="tabs-container">
        <div className="tabs">
            <button
            className={activeTab === 'about' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('about')}
            >
            Sobre
            </button>
            <button
            className={activeTab === 'contact' ? 'tab active' : 'tab'}
            onClick={() => handleTabClick('contact')}
            >
            Contato
            </button>
        </div>
        <div className="tab-content">
            {activeTab === 'about' && (
            <div>
                <h2>Sobre</h2>
                <p>Bem-vindo à aba "Sobre". Aqui você encontra informações sobre nós.</p>
            </div>
            )}
            {activeTab === 'contact' && (
            <div>
                <h2>Contato</h2>
                <p>Esta é a aba "Contato". Entre em contato conosco através dos canais disponíveis.</p>
            </div>
            )}
        </div>
     </div>

    <div className="navigation">
        <Link to ="/exercice-09" ><button onClick={goToEx9}>Exercicio 09</button></Link>
        <Link to ="/exercice-08"><button onClick={goToEx8}>Exercicio 08</button></Link>
        <Link to ="/exercice-07"><button onClick={goToEx7}>Exercicio 07</button></Link>
        <Link to ="/exercice-06"><button onClick={goToEx6}>Exercicio 06</button></Link>
        <Link to ="/exercice-05"><button onClick={goToEx5}>Exercicio 05</button></Link>
        <Link to ="/exercice-04"><button onClick={goToEx4}>Exercicio 04</button></Link>
        <Link to ="/exercice-03"><button onClick={goToEx3}>Exercicio 03</button></Link>
        <Link to ="/exercice-02"><button onClick={goToEx2}>Exercicio 02</button></Link>
        <Link to ="/exercice-01"><button onClick={goToEx1}>Exercicio 01</button></Link>

    </div>

    </>
    

 )
}


export default Ex10
