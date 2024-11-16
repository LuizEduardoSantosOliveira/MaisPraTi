

function WelcomeMessage({ name, email }) {
    return (
      <div>
        <h2>Bem-vindo, {name}!</h2>
        <p>Seu e-mail é: {email}</p>
      </div>
    );
  }

  export default WelcomeMessage
  