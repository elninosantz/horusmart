// HorusMart - JavaScript Interativo
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efeito parallax no vídeo de fundo
    const hero = document.querySelector('.hero');
    const bgVideo = document.querySelector('.bg-video');
    const bgFallback = document.querySelector('.bg-fallback');
    
    // Verificar se o vídeo está carregando
    if (bgVideo) {
        bgVideo.addEventListener('loadstart', function() {
            console.log('🎬 Carregando vídeo de fundo...');
        });
        
        bgVideo.addEventListener('canplay', function() {
            console.log('✅ Vídeo de fundo carregado com sucesso!');
        });
        
        bgVideo.addEventListener('error', function() {
            console.log('❌ Erro ao carregar vídeo, usando fallback...');
            if (bgFallback) {
                bgFallback.style.display = 'block';
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        
        if (bgVideo) {
            bgVideo.style.transform = `translateY(${parallax}px)`;
        }
        if (bgFallback) {
            bgFallback.style.transform = `translateY(${parallax}px)`;
        }
    });

    // Animação do título principal - efeito de digitação
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Efeito de partículas dinâmicas
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        document.querySelector('.particles').appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }

    // Criar partículas periodicamente
    setInterval(createParticle, 2000);

    // Efeito de brilho nos botões
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button, .product-btn, .offer-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Efeito de hover nos cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Animação de entrada das seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação de entrada
    const animatedElements = document.querySelectorAll('.product-card, .offer-card, .section-title, .section-subtitle');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


    // Efeito de pulsação no logo do header
    const headerLogo = document.querySelector('.logo-img');
    if (headerLogo) {
        setInterval(() => {
            headerLogo.style.filter = 'drop-shadow(0 0 15px #d4af37)';
            setTimeout(() => {
                headerLogo.style.filter = 'drop-shadow(0 0 5px #d4af37)';
            }, 500);
        }, 3000);
    }

    // Contador de ofertas (simulado)
    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach(card => {
        const priceElement = card.querySelector('.new-price');
        if (priceElement && priceElement.textContent.includes('R$')) {
            // Simular contagem regressiva
            let price = parseFloat(priceElement.textContent.replace('R$ ', '').replace(',', '.'));
            const originalPrice = price;
            
            setInterval(() => {
                price = originalPrice + (Math.random() - 0.5) * 10;
                priceElement.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;
            }, 5000);
        }
    });

    // Efeito de cursor personalizado
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', function() {
        cursor.style.display = 'none';
    });

    // Efeito de hover nos links dourados
    const goldElements = document.querySelectorAll('.nav-link, .hero-title, .logo-text');
    goldElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(212, 175, 55, 0.8)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });

    // Simulação de carregamento de produtos
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Efeito de scroll suave para o topo
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });

    // Adicionar efeito de brilho cíclico ao título principal
    setInterval(() => {
        const title = document.querySelector('.hero-title');
        if (title) {
            title.style.textShadow = '0 0 40px rgba(212, 175, 55, 1)';
            setTimeout(() => {
                title.style.textShadow = '0 0 20px rgba(212, 175, 55, 0.5)';
            }, 1000);
        }
    }, 4000);

    console.log('🎭 HorusMart - O poder digital foi despertado!');
});

