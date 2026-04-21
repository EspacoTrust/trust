// Fecha menu responsivo quando clicado
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvas.hide();
  });
});

// Carrega efeitos
AOS.init({
    duration: 1000,
    once: true
});

// Efeito quando vai pra aba de barbearia
const secao = document.querySelector('.barbearia');

window.addEventListener('scroll', () => {
    const rect = secao.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = (1 - (rect.top / windowHeight)) * 1.8;

    progress = Math.max(0, Math.min(progress, 1));

    secao.style.setProperty('--fade', progress);
});