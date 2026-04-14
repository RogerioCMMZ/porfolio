// ==================== SCROLL SUAVE E INTERATIVIDADE ====================

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    setupNavigation();
    setupScrollAnimations();
    setupSmoothScroll();
}

// ==================== NAVEGAÇÃO ====================

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Atualizar link ativo ao fazer scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// ==================== ANIMAÇÕES AO SCROLL ====================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar elementos com classe fade-in
                if (entry.target.classList.contains('fade-in')) {
                    let delay = 0;
                    const fadeElements = entry.target.querySelectorAll('.fade-in');
                    
                    fadeElements.forEach((el, index) => {
                        el.style.animationDelay = (delay * 0.1) + 's';
                        delay++;
                    });
                }
                
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos os elementos com mensagens e cartões
    document.querySelectorAll('.fade-in, .project-card, .skills-category').forEach(el => {
        observer.observe(el);
    });
}

// ==================== SCROLL SUAVE ====================

function setupSmoothScroll() {
    // Implementação de scroll suave para navegadores que não suportam
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ==================== EFEITO PARALLAX NO HOME ====================

window.addEventListener('scroll', function() {
    const homeSection = document.querySelector('.home');
    if (window.pageYOffset < homeSection.offsetHeight) {
        homeSection.style.backgroundPosition = `center ${window.pageYOffset * 0.5}px`;
    }
});

// ==================== ANIMAÇÃO DE ENTRADA ====================

function animateOnLoad() {
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.style.opacity = '0';
        homeContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            homeContent.style.transition = 'all 0.8s ease';
            homeContent.style.opacity = '1';
            homeContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// ==================== EVENTO DE HOVER NOS CARTÕES ====================

function setupCardHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        });
    });
}

// ==================== INICIAR ANIMAÇÕES ====================

document.addEventListener('DOMContentLoaded', function() {
    animateOnLoad();
    setupCardHovers();
});

// ==================== DETECÇÃO DE SCROLL ====================

let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateActiveLink();
            ticking = false;
        });
        ticking = true;
    }
});

// ==================== ANIMAÇÃO DOS BADGES DE COMPETÊNCIAS ====================

function setupSkillBadges() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

document.addEventListener('DOMContentLoaded', setupSkillBadges);

// ==================== FEEDBACK VISUAL NOS BOTÕES ====================

function setupButtonFeedback() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
            ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

document.addEventListener('DOMContentLoaded', setupButtonFeedback);

// ==================== CONTROLE DE VISIBILITY ====================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pausar animações se a aba não está visível
        document.querySelectorAll('[class*="fade-in"]').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Retomar animações
        document.querySelectorAll('[class*="fade-in"]').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});
