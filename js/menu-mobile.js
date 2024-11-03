const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const logo = document.getElementById('logo').querySelector('img');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);


  if (active) {
    header.classList.add('menu-open');
    logo.setAttribute('src', 'images/logo-branco.webp');
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    header.classList.remove('menu-open');
    logo.setAttribute('src', 'images/logo.webp');
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const links = menu.querySelectorAll('a');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  btnMobile.setAttribute('aria-expanded', nav.classList.contains('active'));
}


function closeMenuWithSlide() {
  menu.classList.add('closing');
  setTimeout(() => {
    nav.classList.remove('active');
    menu.classList.remove('closing');
  }, 300);
}

links.forEach(link => {
  link.addEventListener('click', closeMenuWithSlide);
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


