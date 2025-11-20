// MENU HAMBÚRGUER
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// MODAL, TOAST E ALERTS SIMPLES
const form = document.getElementById("formCadastro");
const alertSucesso = document.getElementById("alertSucesso");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alertSucesso.style.display = "block";

        setTimeout(() => {
            alertSucesso.style.display = "none";
        }, 3000);
    });
}
