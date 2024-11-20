document.addEventListener('DOMContentLoaded', function() {
    window.menuShow = function() {
      let menuMobile = document.querySelector('.menu-mobile');
      menuMobile.classList.toggle('open'); // Alterna a classe 'open' para mostrar ou esconder o menu
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev()
        } else if(event.key === 'ArrowRight'){
            swiper.slideNext()
        }
    })

    const gameInput = document.getElementById('gameInput')

    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase()

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0)
                    break
                case 'POKEMON':
                    swiper.slideTo(1)
                    break
                case 'ZELDA':
                    swiper.slideTo(2)
                default:
                    alert('Jogo não foi encontrado');
                    break
            }
        }
    })

    

    const EmailModalBtn = document.getElementById('openEmailModal');
    const emailModal = document.getElementById('emailModal')
    const closeEmailModal = emailModal.querySelector(".closer")

    EmailModalBtn.addEventListener('click', function (){
        emailModal.style.display = 'block';
    })

   

})