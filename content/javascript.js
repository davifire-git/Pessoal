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