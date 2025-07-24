document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DE TRADUCCIÓN (i18n) ---
    const translations = {
        es: {
            nav_about: "QUIÉN SOY",
            nav_what_i_do: "QUÉ HAGO",
            nav_how_i_work: "CÓMO TRABAJO",
            nav_contact: "¡HABLEMOS!",
            about_heading: "HOLA,<br>SOY MARTINA",
            about_p1: "Hace 10 años que trabajo en IT construyendo culturas, acompañando equipos y creando experiencias para que el trabajo sea algo <strong>más humano, más real, más disfrutable.</strong>",
            about_p2: "Siempre me movió lo mismo: conectar con la gente. Escucharla. Entenderla. Acompañarla a brillar. Ser puente :)",
            about_p3: "Y desde hace 5 años, lo hago con la computadora en la mochila mientras viajo por el mundo.",
            story_p1: "Durante mucho tiempo creí que mi trabajo y mi estilo de vida eran caminos separados. Sentía una contradicción entre mi versión como People Manager, más estructurada, y mi versión viajera, más libre.",
            story_p2: "Hasta que organicé mi primer company retreat. Ahí entendí que lo que más valoro de trabajar es lo que más me gusta de viajar: <strong>la conexión humana a través de experiencias que quedan para siempre.</strong>",
            story_p3: "Así nació HYPE. Uniendo mis dos versiones para hacer lo que más me gusta y mejor me sale: crear experiencias que inspiran, conectan y dejan huella.",
            what_i_do_heading: "QUÉ HAGO",
            what_i_do_p1: "Diseño company retreats <strong>con propósito y con impacto.</strong>",
            what_i_do_p2: "Lo hago desde mi versión como People Manager, con una mirada estratégica que me permite ver qué necesita el equipo para funcionar mejor, y desde mi versión viajera, con las habilidades de logística que gané en todos estos años. Y obvio, también lo hago desde lo que soy: sociable, creativa, curiosa y aventurera.",
            what_i_do_p3: "Organicé muchos company retreats: con equipos distribuidos por el mundo, con líderes, para grupos chicos y grupos grandes. Y cada vez que las personas se encuentran de verdad —cara a cara, fuera de la rutina y con un propósito— <strong>algo se transforma.</strong>",
            what_i_do_p4: "El equipo vuelve distinto. Más fuerte. Más unido. Con sentido. Lo vi muchas veces. Lo viví muchas veces.",
            how_i_work_heading: "CÓMO TRABAJO",
            step1_heading: "CONSULTORÍA ESTRATÉGICA",
            step1_p: "Nos sentamos a entender qué necesita tu equipo *hoy*. Armo un diagnóstico de la cultura y los desafíos actuales, y a partir de ahí definimos juntos los objetivos del encuentro y la idea, el concepto, que nos van a guíar todo el camino.",
            step2_heading: "DISEÑO DE LA EXPERIENCIA",
            step2_p: "Me encargo de todo, de punta a punta. Busco el destino perfecto, diseño la agenda, y propongo las actividades que nos van a ayudar a cumplir los objetivos. Me ocupo de la logística y los proveedores para que no tengas que preocuparte por nada.",
            step3_heading: "IMPLEMENTACIÓN PRESENCIAL",
            step3_p: "Acompaño al equipo durante el encuentro. Llevo los tiempos de la agenda, facilito las dinámicas, y me aseguro que la experiencia fluya de la mejor manera. Soy una más, dedicada a que todo salga increíble.",
            contact_heading: "¡HABLEMOS!",
            contact1_heading: "ESCRIBIME",
            contact1_cta: "Si ya tenés una idea en mente, mandame un email a hype@gmail.com",
            contact2_heading: "AGENDÁ UNA CALL",
            contact2_cta: "Si no sabés por dónde empezar, coordiná 15 minutos y lo charlamos.",
        },
        en: {
            nav_about: "ABOUT ME",
            nav_what_i_do: "WHAT I DO",
            nav_how_i_work: "HOW I WORK",
            nav_contact: "LET'S TALK!",
            about_heading: "HI,<br>I'M MARTINA",
            about_p1: "For the last 10 years, I've been working in IT building cultures, supporting teams, and creating experiences to make work <strong>more human, more real, and more enjoyable.</strong>",
            about_p2: "I've always been driven by the same thing: connecting with people. Listening to them. Understanding them. Helping them shine. Being a bridge :)",
            about_p3: "And for the last 5 years, I've been doing it with my laptop in my backpack while traveling the world.",
            story_p1: "For a long time, I thought my work and my lifestyle were separate paths. I felt a contradiction between my more structured People Manager version and my freer, traveling version.",
            story_p2: "Until I organized my first company retreat. That's when I understood that what I value most about work is what I love most about traveling: <strong>the human connection through experiences that last forever.</strong>",
            story_p3: "That's how HYPE was born. By uniting my two versions to do what I love most and do best: creating experiences that inspire, connect, and leave a mark.",
            what_i_do_heading: "WHAT I DO",
            what_i_do_p1: "I design company retreats <strong>with purpose and impact.</strong>",
            what_i_do_p2: "I do it from my People Manager side, with a strategic view that allows me to see what a team needs to function better, and from my traveler side, with the logistics and negotiation skills I've gained over the years. And of course, I also do it from who I am: sociable, creative, curious, and adventurous.",
            what_i_do_p3: "I've organized many company retreats: with distributed teams from around the world, with leaders, for small groups and large ones. And every time people truly meet—face to face, out of the routine, and with a purpose—<strong>something transforms.</strong>",
            what_i_do_p4: "The team comes back different. Stronger. More united. With a sense of purpose. I've seen it many times. I've lived it many times.",
            how_i_work_heading: "HOW I WORK",
            step1_heading: "STRATEGIC CONSULTING",
            step1_p: "We sit down to understand what your team needs *today*. I diagnose the culture and current challenges, and from there, we define the goals for the retreat and the core idea, the concept, that will guide us all the way.",
            step2_heading: "EXPERIENCE DESIGN",
            step2_p: "I take care of everything, from start to finish. I find the perfect destination, design the agenda, and propose activities that will help us meet our goals. I handle logistics and suppliers so you don't have to worry about a thing.",
            step3_heading: "ON-SITE IMPLEMENTATION",
            step3_p: "I accompany the team during the retreat. I manage the schedule, facilitate dynamics, and make sure the experience flows in the best way possible. I'm one more member of the team, dedicated to making everything incredible.",
            contact_heading: "LET'S TALK!",
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

    // --- 2. Lógica para animaciones de scroll ---
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

    // --- 3. Lógica del Carrusel Interactivo ---
    const carouselContainer = document.querySelector('.carousel-container');
    const slide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (slide) {
        let currentIndex = 0;
        const numImages = document.querySelectorAll('.carousel-slide img').length / 2;
        const getImageWidth = () => document.querySelector('.carousel-slide img').clientWidth + 20; // +20 por el padding
        let autoSlideInterval;
        function goToSlide(index) {
            slide.style.transition = 'transform 0.5s ease-in-out';
            slide.style.transform = 'translateX(' + (-index * getImageWidth()) + 'px)';
        }
        function nextSlide() {
            currentIndex++;
            if (currentIndex >= numImages) {
                goToSlide(currentIndex);
                setTimeout(() => { slide.style.transition = 'none'; currentIndex = 0; goToSlide(currentIndex); }, 500);
            } else { goToSlide(currentIndex); }
        }
        function prevSlide() {
            if (currentIndex <= 0) { slide.style.transition = 'none'; currentIndex = numImages; goToSlide(currentIndex); }
            setTimeout(() => { currentIndex--; goToSlide(currentIndex); }, 10);
        }
        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(prevSlide, 3000);
        }
        nextBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); nextSlide(); startAutoSlide(); });
        prevBtn.addEventListener('click', () => { clearInterval(autoSlideInterval); prevSlide(); startAutoSlide(); });
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carouselContainer.addEventListener('mouseleave', () => startAutoSlide());
        startAutoSlide();
    }
    
    // --- 4. LÓGICA DE NAVEGACIÓN ACTIVA ---
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