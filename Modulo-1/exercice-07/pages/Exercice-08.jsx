import {Link, useNavigate} from "react-router-dom"
import{useState} from "react"

function Ex8(){
// Lista de imagens para a galeria
const images = [
    "../img/bakamonogatari-01.jpg",
    "../img/bakamonogatari-02.jpg",
     "../img/bakamonogatari-03.jpg",
   
  ];
  
    // Estado para armazenar a imagem selecionada e se o modal está aberto
    const [selectedImage, setSelectedImage] = useState(null);
  
    // Função para abrir o modal com a imagem selecionada
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    // Função para fechar o modal
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    // Função para navegar para a próxima imagem
    const nextImage = () => {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    };
  
    // Função para navegar para a imagem anterior
    const prevImage = () => {
      const currentIndex = images.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    };

const navigate = useNavigate
 const goToEx9 = () => {
    navigate("/exercice-09")
 }
 const goToEx1 = () => {
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
 const goToEx10 = () => {
    navigate("/exercice-10")
 }


 return(
    <>
        <div>
            <h1>Galeria de Imagens</h1>

            {/* Galeria de imagens */}
            <div className="gallery">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    onClick={() => openModal(image)}
                    className="gallery-image"
                />
                ))}
            </div>

            {/* Modal de visualização detalhada */}
            {selectedImage && (
                <div className="modal">
                <div className="modal-content">
                    <img src={selectedImage} alt="Imagem Ampliada" className="modal-image" />
                    <button onClick={closeModal} className="close-btn">Fechar</button>
                    <button onClick={prevImage} className="nav-btn prev-btn">Anterior</button>
                    <button onClick={nextImage} className="nav-btn next-btn">Próxima</button>
                </div>
                </div>
            )}
        </div>
        <div className="navigation">
            <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
            <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
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


export default Ex8
