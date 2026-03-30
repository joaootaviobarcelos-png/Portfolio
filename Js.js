// Funcionalidade 1: Atualizar o ano do rodapé automaticamente
const spanAno = document.getElementById('ano-atual');
if (spanAno) {
    const dataAtual = new Date();
    spanAno.textContent = dataAtual.getFullYear();
}

// Funcionalidade 2: Rolagem Suave (Smooth Scroll)
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita a navegação brusca padrão

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula a posição descontando o tamanho do menu fixo (aprox. 70px)
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
            
            // Faz o scroll suave até a seção
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});