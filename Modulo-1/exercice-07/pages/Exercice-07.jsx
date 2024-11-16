import {Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";

function Ex7(){

    const [posts, setPosts] = useState([]);
    // Estado para armazenar se está carregando
    const [isLoading, setIsLoading] = useState(true);
    // Estado para verificar erros na requisição
    const [error, setError] = useState(null);
  
    // Função para fazer a requisição para a API
    const fetchPosts = async () => {
      setIsLoading(true); // Ativar indicador de carregamento
      setError(null); // Limpar erros anteriores
  
      try {
        // Fazer a requisição para o JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Erro ao carregar os posts');
        }
        const data = await response.json();
        setPosts(data); // Armazenar os posts no estado
      } catch (err) {
        setError(err.message); // Se houver erro, armazenar a mensagem de erro
      } finally {
        setIsLoading(false); // Desativar indicador de carregamento
      }
    };
  
    // Usando useEffect para carregar os dados ao montar o componente
    useEffect(() => {
      fetchPosts();
    }, []); // O array vazio faz com que a requisição seja feita apenas na montagem inicial
  
const navigate = useNavigate
 const goToEx9 = () => {
    navigate("/exercice-09")
 }
 const goToEx8 = () => {
    navigate("/exercice-08")
 }
 const goToEx1 = () => {
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
        <div className="postLoad">
            <h1>Lista de Posts</h1>

            
            {isLoading && <p>Carregando...</p>}

            
            {error && <p style={{ color: 'red' }}>{error}</p>}

            
            {!isLoading && !error && (
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
            )}

           
            <button onClick={fetchPosts} disabled={isLoading}>
            Recarregar Posts
            </button>
        </div>
        <div className="navigation">
            <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
            <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
            <Link to ="/exercice-08"><button onClick={goToEx8}>Exercicio 08</button></Link>
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


export default Ex7
