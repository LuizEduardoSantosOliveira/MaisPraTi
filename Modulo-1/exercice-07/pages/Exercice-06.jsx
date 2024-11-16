import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import WelcomeMessage from '../components/WelcomeMensage';

function Ex6() {
   
      // Componente de Formulário
        // Estado para armazenar os valores dos campos do formulário
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [submitted, setSubmitted] = useState(false); // Para controlar se o formulário foi enviado
      
        // Função para lidar com o envio do formulário
        const handleSubmit = (event) => {
          event.preventDefault(); // Evita o comportamento padrão de recarregar a página
      
          // Validação para garantir que todos os campos estão preenchidos
          if (!name || !email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
          }
      
          setError(""); // Limpa a mensagem de erro
          setSubmitted(true); // Indica que o formulário foi enviado com sucesso
        };
  const navigate = useNavigate;
  const goToEx9 = () => {
    navigate("/exercice-09");
  };
  const goToEx8 = () => {
    navigate("/exercice-08");
  };
  const goToEx7 = () => {
    navigate("/exercice-07");
  };
  const goToEx1 = () => {
    navigate("/exercice-01");
  };
  const goToEx5 = () => {
    navigate("/exercice-05");
  };
  const goToEx4 = () => {
    navigate("/exercice-04");
  };
  const goToEx3 = () => {
    navigate("/exercice-03");
  };
  const goToEx2 = () => {
    navigate("/exercice-02");
  };
  const goToEx10 = () => {
    navigate("/exercice-10");
  };

  return (
    <>
      <div className="nameForm">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>
        
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>
        
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
        
          <button type="submit">Enviar</button>
        </form>
        ) : (
          <WelcomeMessage name={name} email={email} />
        )}
      </div>
      <div className="navigation">
        <Link to="/exercice-10">
          <button onClick={goToEx10}>Exercicio 10</button>
        </Link>
        <Link to="/exercice-09">
          <button onClick={goToEx9}>Exercicio 09</button>
        </Link>
        <Link to="/exercice-08">
          <button onClick={goToEx8}>Exercicio 08</button>
        </Link>
        <Link to="/exercice-07">
          <button onClick={goToEx7}>Exercicio 07</button>
        </Link>
        <Link to="/exercice-05">
          <button onClick={goToEx5}>Exercicio 05</button>
        </Link>
        <Link to="/exercice-04">
          <button onClick={goToEx4}>Exercicio 04</button>
        </Link>
        <Link to="/exercice-03">
          <button onClick={goToEx3}>Exercicio 03</button>
        </Link>
        <Link to="/exercice-02">
          <button onClick={goToEx2}>Exercicio 02</button>
        </Link>
        <Link to="/exercice-01">
          <button onClick={goToEx1}>Exercicio 01</button>
        </Link>
      </div>
    </>
  );
}

export default Ex6;
