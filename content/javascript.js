        /* MENU MOBILE */
        function toggleMenu() {
            const itens = document.getElementById('itens');
            itens.classList.toggle('ativo');
        }

        function closeMenu() {
            const itens = document.getElementById('itens');
            if (window.innerWidth <= 768) {
                itens.classList.remove('ativo');
            }
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: parar de observar após aparecer
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(element => {
            observer.observe(element);
        });

        /* === MODAL SAIBA MAIS === */
        function abrirModal() {
            const modal = document.getElementById('modalSaibaMais');
            modal.style.display = 'flex';
            // Pequeno delay para a animação de opacidade da classe .active
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden'; // Desativa rolagem do fundo
        }

        function fecharModal() {
            const modal = document.getElementById('modalSaibaMais');
            modal.classList.remove('active');
            // Aguarda a transição de opacidade acabar para dar display: none
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Reativa rolagem
            }, 300);
        }

        // Fechar ao clicar fora da caixinha (direto no overlay escurinho)
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('modalSaibaMais');
            if (event.target === modal) {
                fecharModal();
            }
        });