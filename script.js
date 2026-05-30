// ============================================
// БУРГЕР-МЕНЮ
// ============================================
const burger = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');

if (burger && navList) {
    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.textContent = navList.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            burger.textContent = '☰';
        });
    });
}

// ============================================
// ЧАСТИЦЫ НА ГЛАВНОЙ
// ============================================
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            --dur: ${Math.random() * 8 + 6}s;
            --drift: ${(Math.random() - 0.5) * 200}px;
            animation-delay: ${Math.random() * 8}s;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// ФИЛЬТРЫ НА СТРАНИЦЕ МОДОВ
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.trim();
            const cards = document.querySelectorAll('.mod-card');
            
            cards.forEach(card => {
                if (filter === 'Все моды') {
                    card.style.display = 'block';
                } else {
                    const badge = card.querySelector('.mod-card__badge');
                    if (badge) {
                        const badgeText = badge.textContent.trim();
                        card.style.display = badgeText.includes(filter.replace('е', 'е').replace('ы', 'ы')) ? 'block' : 'none';
                    }
                }
            });
        });
    });
}

// ============================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
// ============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.block-item, .mod-card, .team-card, .timeline-item__content, .server-info__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// ОТПРАВКА ФОРМЫ
// ============================================
const form = document.querySelector('.contacts-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '⏳ Отправка...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '✅ Заявка принята!';
            btn.style.background = 'linear-gradient(180deg, #228B22, #1a6b1a)';
            this.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 2000);
    });
}

console.log('💀 Calamity Server - Пожиратель Богов ждёт тебя!');