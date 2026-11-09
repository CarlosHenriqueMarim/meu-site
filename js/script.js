const menuButton=document.querySelector(".menu-toggle");const navigation=document.querySelector(".main-nav");
if(menuButton&&navigation){menuButton.addEventListener("click",()=>{const opened=navigation.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(opened));menuButton.setAttribute("aria-label",opened?"Fechar menu":"Abrir menu");});}
document.querySelectorAll(".year").forEach(item=>item.textContent=new Date().getFullYear());
const form=document.querySelector("#contact-form");if(form){form.addEventListener("submit",event=>{event.preventDefault();document.querySelector("#form-feedback").textContent="Mensagem validada! Este formulário é demonstrativo e não envia dados.";form.reset();});}
