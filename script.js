document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DE TRADUCCIÓN (i18n) ---
    const translations = {
        es: {
            nav_organizer: "QUIÉN LO ORGANIZA",
            nav_how_it_works: "CÓMO FUNCIONA",
            nav_contact: "¡HABLEMOS!",
            tagline_main: "COMPANY RETREATS CON PROPÓSITO Y CON IMPACTO REAL.",
            tagline_sub1: "Más de 5 encuentros organizados con grupos de hasta 60 personas de diferentes lugares del mundo.",
            tagline_sub2: "Desde encuentros de equipos completos hasta eventos de liderazgo. Creando <strong>experiencias que inspiran, conectan y dejan huella</strong>, en los rincones más lindos de Argentina.",
            organizer_title: "¿QUIÉN LO ORGANIZA?",
            organizer_subtitle: "¡Yo, Martina!",
            organizer_p1: "Hace más de 10 años que trabajo en el mundo IT, construyendo culturas, acompañando equipos y creando experiencias que hacen del trabajo algo más <strong>humano y disfrutable</strong>.",
            organizer_p2: "Siempre me movió lo mismo: conectar con las personas y generar espacios donde se sientan escuchadas, acompañadas, valoradas y libres de ser ellas mismas.",
            organizer_p3: "Desde hace 5 años, lo hago con la computadora en la mochila mientras descubro el mundo.",
            organizer_p4: "Hoy combino todo lo que aprendí en People Experience con mi pasión por viajar, organizando company retreats para equipos híbridos y remotos en lugares increíbles que recargan y renuevan.",
            organizer_p5: "Y también lo hago desde lo que soy: sociable, curiosa, creativa y aventurera, con la convicción profunda de que encuentros así pueden ser <strong>transformadores</strong>.",
            how_it_works_title: "¿CÓMO FUNCIONA?",
            step1_heading: "CONSULTORÍA ESTRATÉGICA",
            step1_p: "Nos sentamos a entender qué necesita tu equipo *hoy*. Armo un diagnóstico de la cultura y los desafíos actuales, y a partir de ahí definimos juntos los objetivos del encuentro y la idea, el concepto, que nos van a guíar todo el camino.",
            step2_heading: "DISEÑO DE LA EXPERIENCIA",
            step2_p: "Me encargo de todo, de punta a punta. Busco el destino perfecto, diseño la agenda, y propongo las actividades que nos van a ayudar a cumplir los objetivos. Me ocupo de la logística y los proveedores para que no tengas que preocuparte por nada.",
            step3_heading: "IMPLEMENTACIÓN PRESENCIAL",
            step3_p: "Acompaño al equipo durante el encuentro. Llevo los tiempos de la agenda, facilito las dinámicas, y me aseguro que la experiencia fluya de la mejor manera. Soy una más, dedicada a que todo salga increíble.",
            contact_title: "¡HABLEMOS!",
            contact1_heading: "ESCRIBIME",
            contact1_cta: "Si ya tenés una idea en mente, mandame un email a hype@gmail.com",
            contact2_heading: "AGENDÁ UNA CALL",
            contact2_cta: "Si no sabés por dónde empezar, coordiná 15 minutos y lo charlamos.",
        },
        en: {
            nav_organizer: "WHO ORGANIZES IT?",
            nav_how_it_works: "HOW IT WORKS",
            nav_contact: "LET'S TALK!",
            tagline_main: "COMPANY RETREATS WITH PURPOSE AND REAL IMPACT.",
            tagline_sub1: "Over 5 events organized with groups of up to 60 people from different parts of the world.",
            tagline_sub2: "From full team gatherings to leadership events. Creating <strong>experiences that inspire, connect, and leave a mark</strong>, in the most beautiful corners of Argentina.",
            organizer_title: "WHO ORGANIZES IT?",
            organizer_subtitle: "Me, Martina!",
            organizer_p1: "For over 10 years, I've been working in the IT world, building cultures, supporting teams, and creating experiences that make work more <strong>human and enjoyable</strong>.",
            organizer_p2: "I've always been driven by the same thing: connecting with people and creating spaces where they feel heard, supported, valued, and free to be themselves.",
            organizer_p3: "For the last 5 years, I've been doing it with my laptop in my backpack while discovering the world.",
            organizer_p4: "Today, I combine everything I've learned in People Experience with my passion for travel, organizing company retreats for hybrid and remote teams in incredible places that recharge and renew.",
            organizer_p5: "And I also do it from who I am: sociable, curious, creative, and adventurous, with the deep conviction that such encounters can be <strong>transformative</strong>.",
            how_it_works_title: "HOW IT WORKS",
            step1_heading: "STRATEGIC CONSULTING",
            step1_p: "We sit down to understand what your team needs *today*. I diagnose the culture and current challenges, and from there, we define the goals for the retreat and the core idea, the concept, that will guide us all the way.",
            step2_heading: "EXPERIENCE DESIGN",
            step2_p: "I take care of everything, from start to finish. I find the perfect destination, design the agenda, and propose activities that will help us meet our goals. I handle logistics and suppliers so you don't have to worry about a thing.",
            step3_heading: "ON-SITE IMPLEMENTATION",
            step3_p: "I accompany the team during the retreat. I manage the schedule, facilitate dynamics, and make sure the experience flows in the best way possible. I'm one more member of the team, dedicated to making everything incredible.",
            contact_title: "LET'S TALK!",
            contact1_heading: "WRITE ME",
            contact1_cta: "If you already have an idea in mind, send me an email at hype@gmail.com",
            contact2_heading: "SCHEDULE A CALL",
            contact2_cta: "If you're not sure where to start, schedule a 15-minute call and we'll chat.",
        }
    };
    const langSwitcherButton = document.getElementById('lang-switcher-button');
    const langOptions = document.getElementById('lang-options');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                 el.innerHTML = translations[lang][key];
            }
        });
        langSwitcherButton.textContent = lang.toUpperCase();
        localStorage.setItem('language', lang);
    };
    langSwitcherButton.addEventListener('click', (event) => { event.stopPropagation(); langOptions.classList.toggle('show'); });
    langOptions.addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-option')) {
            event.preventDefault();
            const selectedLang = event.target.getAttribute('data-lang');
            setLanguage(selectedLang);
            langOptions.classList.remove('show');
        }
    });
    window.addEventListener('click', () => { if (langOptions.classList.contains('show')) { langOptions.classList.remove('show'); } });
    const userLang = localStorage.getItem('language') || (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(userLang);

    // --- Lógica para animaciones de scroll ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(element => { animationObserver.observe(element); });
    }

    // --- LÓGICA CARRUSEL DE IMPACTO ---
    const impactCarousel = document.getElementById('impact-carousel');
    const impactImages = [
        'images/header/Grupal.jpg', 'images/header/Rafting.jpg', 'images/header/Rafting 1.jpg', 
        'images/header/Brindis.JPG', 'images/header/Charla.JPG', 'images/header/Cena.jpg'
    ];
    let currentImpactIndex = 0;

    function showNextImpactImage() {
        const nextImage = new Image();
        nextImage.src = impactImages[(currentImpactIndex + 1) % impactImages.length];
        
        const currentImageSrc = impactImages[currentImpactIndex];
        impactCarousel.style.backgroundImage = `url('${currentImageSrc}')`;
        
        impactCarousel.classList.remove('brindis-pos', 'cena-pos');

        if (currentImageSrc.includes('Brindis.JPG')) {
            impactCarousel.classList.add('brindis-pos');
        } else if (currentImageSrc.includes('Cena.jpg')) {
            impactCarousel.classList.add('cena-pos');
        }

        impactCarousel.style.animation = 'none';
        void impactCarousel.offsetWidth; 
        impactCarousel.style.animation = `zoomAndFade ${3}s ease-in-out forwards`;
        currentImpactIndex = (currentImpactIndex + 1) % impactImages.length;
    }
    if (impactCarousel) {
        setInterval(showNextImpactImage, 3000); // Cambia cada 3 segundos
        showNextImpactImage();
    }


    // --- LÓGICA CARRUSEL GALERÍA (RESTAURADO) ---
    const galleryCarousel = document.querySelector('#portfolio .carousel-slide');
    const galleryImages = [
        'images/web/Puente.jpg', 'images/web/Manos.png', 'images/web/Escalada.jpg', 'images/web/Sombra.JPG', 
        'images/web/Fiesta.JPG', 'images/web/Risas.JPG', 'images/web/Olimpiadas.png', 'images/web/Presentacion.JPG', 
        'images/web/Mas risas.JPG', 'images/web/Ronda.png'
    ];

    if (galleryCarousel) {
        const allGalleryImages = [...galleryImages, ...galleryImages];
        galleryCarousel.innerHTML = allGalleryImages.map(src => `<img src="${src}" alt="Portfolio image">`).join('');
        
        const slide = galleryCarousel;
        const prevBtn = document.querySelector('#portfolio .prev-btn');
        const nextBtn = document.querySelector('#portfolio .next-btn');
        
        let currentIndex = 0;
        const numImages = galleryImages.length;
        const getImageWidth = () => slide.querySelector('img').clientWidth + 20;
        let autoSlideInterval;

        function goToSlide(index) {
            slide.style.transition = 'transform 0.5s ease-in-out';
            slide.style.transform = `translateX(${-index * getImageWidth()}px)`;
        }

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= numImages) {
                goToSlide(currentIndex);
                setTimeout(() => {
                    slide.style.transition = 'none';
                    currentIndex = 0;
                    goToSlide(currentIndex);
                }, 500);
            } else {
                goToSlide(currentIndex);
            }
        }

        function prevSlide() {
            if (currentIndex <= 0) {
                slide.style.transition = 'none';
                currentIndex = numImages;
                goToSlide(currentIndex);
            }
            setTimeout(() => {
                currentIndex--;
                goToSlide(currentIndex);
            }, 10);
        }

        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(prevSlide, 3000);
        }

        nextBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); nextSlide(); startAutoSlide(); });
        prevBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); prevSlide(); startAutoSlide(); });
        galleryCarousel.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        galleryCarousel.parentElement.addEventListener('mouseleave', () => startAutoSlide());
        
        startAutoSlide();
    }
    
    // --- LÓGICA DE NAVEGACIÓN ACTIVA ---
    const sections = document.querySelectorAll('main .container > section, footer#hablemos');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
            currentSectionId = sections[sections.length - 1].id;
        }

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active-link');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

});