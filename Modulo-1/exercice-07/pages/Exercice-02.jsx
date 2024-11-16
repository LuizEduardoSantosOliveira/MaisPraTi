import {Link, useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";

function Ex2(){
    const [color, setColor] = useState("#ffffff");

    // Função para gerar uma cor aleatória
    const generateRandomColor = () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    };
  
    // useEffect para atualizar o fundo da página sempre que a cor mudar
    useEffect(() => {
        // Armazena a cor original do fundo
        const originalBackgroundColor = document.body.style.backgroundColor;
        // Atualiza o fundo da página com a cor atual
        document.body.style.backgroundColor = color;
    
        // Retorna uma função de limpeza para restaurar a cor original
        return () => {
          document.body.style.backgroundColor = originalBackgroundColor;
        };
      }, [color]);
    
  
    
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
 const goToEx5 = () => {
    navigate("/exercice-05")
 }
 const goToEx4 = () => {
    navigate("/exercice-04")
 }
 const goToEx3 = () => {
    navigate("/exercice-03")
 }
 const goToEx1 = () => {
    navigate("/exercice-01")
 }
 const goToEx10 = () => {
    navigate("/exercice-10")
 }


 return(
    <>
     <div className="randonColor"
      style={{
        backgroundColor: color,
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Cor Atual: {color}</h1>
      <br />
      <button onClick={generateRandomColor}>
        Mudar Cor
      </button>
    </div>
    <div className="navigation">
        <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
        <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
        <Link to ="/exercice-08"><button onClick={goToEx8}>Exercicio 08</button></Link>
        <Link to ="/exercice-07"><button onClick={goToEx7}>Exercicio 07</button></Link>
        <Link to ="/exercice-06"><button onClick={goToEx6}>Exercicio 06</button></Link>
        <Link to ="/exercice-05"><button onClick={goToEx5}>Exercicio 05</button></Link>
        <Link to ="/exercice-04"><button onClick={goToEx4}>Exercicio 04</button></Link>
        <Link to ="/exercice-03"><button onClick={goToEx3}>Exercicio 03</button></Link>
        <Link to ="/exercice-01"><button onClick={goToEx1}>Exercicio 01</button></Link>  
    </div>   
    </>
   
 )
}


export default Ex2
