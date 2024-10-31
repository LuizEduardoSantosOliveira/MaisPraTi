AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    window.menuShow = function() {
        let menuMobile = document.querySelector('.menu-mobile');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
       
    };
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const btnFechar = document.querySelector('.btn__fechar')
  const msgErro = document.querySelector('.modal__msg_erro')
  const msgSucesso =  document.querySelector('.modal__msg_sucesso')
  const modalEnviar = document.querySelector('.modal__enviar')
  const btnEnviar = document.querySelector('.btn__enviar')
  
  
     
  
  const validarDados= ({nome, email, numero}) =>{
     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
     const nomeValido = nome && nome.length >=3
     const numeroTelefoneValido = numero && numero.length == 11
     const emailValido = email && emailRegex.test(email)
      return {
          nomeValido,
          emailValido,
          numeroTelefoneValido
      }
          
     
  };
  
  const pegarDados = () =>{
      const dados = {
          nome :document.querySelector('.input__nome').value,
          email : document.querySelector('.input__email').value ,
          numero: document.querySelector(".input__numero").value
      };
     const{ nomeValido, emailValido, numeroTelefoneValido} = validarDados(dados);
  
     return nomeValido && emailValido && numeroTelefoneValido ? 'sucesso' : 'erro';
  
     
  }
  
  const formatarModal = (statusRegister) =>{
          if(statusRegister === 'sucesso'){
              msgErro.style.display = 'none';
              msgSucesso.style.display = 'block';
              btnFechar.classList.add('bg__sucesso');
              btnFechar.classList.remove('bg__erro');
              document.querySelector('form').reset();
              sendMail();
          }
      
          if(statusRegister === 'erro'){
              msgSucesso.style.display = 'none';
              msgErro.style.display = 'block';
              btnFechar.classList.add('bg__erro');
              btnFechar.classList.remove('bg__sucesso');
              
          }
  }

  const mostrarModal = (statusRegister) => {
    formatarModal(statusRegister);
    modalEnviar.showModal();
      
 }

  btnEnviar.addEventListener('click',(e) => {
      e.preventDefault();
      mostrarModal(pegarDados());
  
  })
  
  btnFechar.addEventListener('click',() => {
      modalEnviar.close();
  })

  function sendMail() {
    (function() {
        emailjs.init("j4p5OwU-Bszor4lVZ");
    })();

    let params = {
        from_name: document.getElementById("input__nome").value,
        email_id: document.getElementById("input__email").value,
        message: document.getElementById("message").value
    };

    let serviceID = "service_fq77tij";
    let templateID = "template_tc9mmrl";

    
    emailjs.send(serviceID, templateID, params)
    .then(res => {
         console.log('Email enviado:', res.status);
    })
    .catch(err => {
        console.error('Erro ao enviar email:', err);
    });
       

  }     
  

           
  