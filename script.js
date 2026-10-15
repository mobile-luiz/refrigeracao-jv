// ===== CONFIGURAÇÃO =====
const WHATSAPP = "558189484064";              // 55 + DDD + número, só dígitos
const INSTAGRAM = "https://www.instagram.com/refrigeracaojv";    // link do Instagram da empresa
// ========================

document.getElementById("insta").href = INSTAGRAM;

function abrirWhatsApp(mensagem) {
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensagem), "_blank", "noopener");
}
document.querySelectorAll(".js-zap").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    abrirWhatsApp(el.dataset.msg);
  });
});

// Menu no celular
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", function () {
  const aberto = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", false); });
});

// Destaca no menu a seção visível
const links = menu.querySelectorAll("a");
const secoes = ["inicio", "servicos", "sobre", "contato"].map(function (id) { return document.getElementById(id); });
const obs = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (en) {
    if (en.isIntersecting) {
      const id = en.target.id === "contato" ? "contato" : en.target.id;
      links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + id); });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
secoes.forEach(function (s) { if (s) obs.observe(s); });

document.getElementById("ano").textContent = new Date().getFullYear();
