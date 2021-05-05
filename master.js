const toggle = document.getElementById('toggle');
const navBar = document.getElementById('navbar');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
});
navBar.addEventListener("click", () => {
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
  });

