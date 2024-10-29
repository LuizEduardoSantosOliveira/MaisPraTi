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




import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

const loadingElement = document.querySelector("#loading");
const commentsContainer = document.querySelector("#comment");

async function getAllComments() {
    loadingElement.style.display = "block"; 

    try {
        const { data, error } = await supabase
            .from('comments')
            .select('*');

        if (error) throw error;

        data.forEach(comentario => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <div class="review-image">
                    <img src="${comentario.image_url || './img/perfil-de-usuario.png'}" alt="">
                </div>
                <h4>${comentario.name}</h4>
                <p>${comentario.body}</p>
                <small>Email: ${comentario.email}</small>
            `;
            commentsContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Houve um problema com a operação fetch:', error);
        loadingElement.textContent = "Erro ao carregar depoimentos.";
    } finally {
        loadingElement.style.display = "none"; 
    }
}

getAllComments();

